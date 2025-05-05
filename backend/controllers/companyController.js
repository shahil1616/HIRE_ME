import { trusted } from "mongoose";
import Company from "../models/company.js";


export const registerCompany=async(req,res)=>{

    try{
        const{companyName}=req.body;
    if(!companyName)
    {
        return res.status(400).json({
            message:"Company name is required",
            sucess:false
        })
    }
    let company = await Company.findOne({name:companyName});

    if(company)
    {
        return res.status(400).json({
            message:"Company already exits",
            sucess:false
        })

    }
    company =await Company.create({
        name:companyName,
        userId:req.id
    })

    return res.status(201).json({
        message: "Company registered successfully.",
        company,
        success: true
    })
    }
    catch(error)
    {
        console.log(error);
    }


}

export const getCompany=async (req,res)=>{
    try{
        const userId=req.id;
    const companies= await Company.find({userId});

    if (!companies) {
        return res.status(404).json({
            message: "Companies not found.",
            success: false
        }
    )
    }

    return res.status(200).json({
        message:"All Companies",
        companies,
        success:true
    })
    }
    catch(error)
    {
        console.log(error);

    }

}
// get comoany by id


export const getCompanyById= async (req,res)=>{
    try{
           const companyId= req.params.id;
           const company =await Company.findById(companyId);
           if (!company) {
            return res.status(404).json({
                message: "Company not found.",
                success: false
            })
        }
        return res.status(200).json({
            company,
            success: true
        })

    }
    catch(error)
    {
      console.log(error);
    }
}
export const updateCompany=async (req,res)=>{

    try{

        const{name,desc,website,location}=req.body;
        const file =req.file;


        const updateData={name,desc,website,location};

        const company =await Company.findByIdAndUpdate(req.params.id,updateData,{new:true});
        if (!company) {
            return res.status(404).json({
                message: "Company not found.",
                success: false
            })
        }
        return res.status(200).json({
            message:"Company information updated.",
            success:true
        })



    }catch(error)
    {
        console.log(error)
    }



}