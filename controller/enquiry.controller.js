export const createEnquiry = async (req,res)=>{
 try{

  const { fullName,email,phoneNumber } = req.body;

  const enquiry = new Enquiry({
   fullName,
   email,
   phoneNumber
  });

  await enquiry.save();

  res.status(201).json({
   message:"Enquiry saved successfully"
  });

 }catch(err){
  console.log(err);
  res.status(500).json({error:err.message});
 }
}