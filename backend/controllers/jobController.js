import Company  from "../models/company.js";
import User  from "../models/user.js";
import Job from "../models/job.js";
import mongoose from "mongoose";

// admin post jobs

export const postJob= async(req,res)=>{

  try{
    const {title,description,requirements,salary,experienceLevel,location,jobType,position,companyId}=req.body;
    const userId=req.id;


    if(!title|| !description|| !requirements || !salary ||!experienceLevel||!location ||!jobType||!position||!companyId)
    {
        return res.status(404).json({
            message:"Something is missing",
            success:false
        })
    }
    const job= await  Job.create({
        title,
        description,
        requirements: requirements.split(","),
        salary:Number(salary),
        experienceLevel:Number(experienceLevel),
        location,
        jobType,
        position,
        company: companyId,
        created_by:userId,





        


        
    })
    return res.status(201).json({
        message:"Job Created Successfully",
        success:true

    });
  }
  catch(error)
  {
    console.log(error);

  }

}

// Job for students

export const getAllJobs =async(req,res)=>{

    try{
     

        const keyword = req.query.keyword || "";
        const query = {
            $or: [
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } },
            ]
        };

        
        const jobs= await Job.find(query).populate(
            {
                path:"company",
            
            }).sort({
                createdAt: -1,
            })
        ;
        if(!jobs)
        {
            res.status(404).json({
            message:"Jobs not found",
            success:false
            })
        }
        return res.status(200).json({
            message:"All the jobs",
            jobs,
            success:true
        })


    }
    catch(error)
    {
        console.log(error);

    }


}
export const getJobById=async (req,res)=>{

    try{
        const jobId= req.params.id;
        const job= await Job.findById(jobId);
        if(!job)
        {
            return res.status(404).json({
                message:"Job not found",
                success:false
            })
        }
        return res.status(200).json({
            message:"Job Found",
            job,
            success:true
        })

    }
    catch(error)
    {
        console.log(error);

  
    }
}
export const getAllJobByAdmin= async(req,res)=>{
    try{

        const adminId=req.id;
        const jobs=await Job.find({created_by:adminId}).populate({
            path:'company',
            createdAt:-1
        })
        if(!jobs)
            {
                return res.status(404).json({
                    message:"Job not found",
                    success:false
                })
            }
            return res.status(200).json({
                message:"Job found",
                jobs,
                success:true
            })

    }
    catch(error)
    {
        console.log(error);

    }
}