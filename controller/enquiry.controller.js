export const createEnquiry = async (req,res)=>{
 try{

  const enquiry = new Enquiry(req.body);

  await enquiry.save();

  res.status(201).json({
   message:"Enquiry saved"
  });

 }catch(err){
  console.log(err);
  res.status(500).json({error:err.message});
 }
};