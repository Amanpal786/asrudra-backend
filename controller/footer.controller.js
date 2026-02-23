import Footer from '../module/Footer.js';
// Backend controller for footer management

// GET: Fetch footer content
export const getFooter = async (req, res) => {
  try {
    const footer = await Footer.findOne(); // Only one footer document expected
    res.status(200).json(footer);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch footer data', error });
  }
};

// POST: Create or update footer content
export const createOrUpdateFooter = async (req, res) => {
  try {
    const existing = await Footer.findOne(); // Check if footer exists
    const data = req.body;

    let footer;
    if (existing) {
      // Update existing footer
      footer = await Footer.findByIdAndUpdate(existing._id, data, { new: true });
    } else {
      // Create new footer
      footer = await Footer.create(data);
    }

    res.status(200).json(footer);
  } catch (error) {
    res.status(500).json({ message: 'Error saving footer data', error });
  }
};
