import jwt from "jsonwebtoken";

export const isAuthenticated= async (req,res,next)=>{

    try{

        const token=req.cookies.token;
        if(!token)
        {
             return res.status(401).json({
                message: "User not authenticated",
                success: false,
            })
        }
        const gottoken= await jwt.verify(token,process.env.SECRET_KEY);
        if(!gottoken)
        {
            return res.status(401).json({
                message:"Invalid token",
                success:false
            })
        }

        req.id=gottoken.userId;
        next();


    }
    catch(error)
    {
        console.log(error);

    }
}



