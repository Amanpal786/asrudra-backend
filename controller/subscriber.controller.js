import Subscriber from '../module/Subscriber.js';

export const createSubscriber = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: 'Email is required' });

  try {
    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: 'Already subscribed' });
    }

    const subscriber = await Subscriber.create({ email, source: 'subscribe' });
    res.status(201).json({ message: 'Subscribed successfully', subscriber });
  } catch (error) {
    res.status(500).json({ message: 'Failed to subscribe', error });
  }
};
