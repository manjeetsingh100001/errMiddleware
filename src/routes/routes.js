
const register=async(req,res,next)=>{
try {
    let {username,password}=req.body
    if(username && password && username.length > 0 && password.length > 0){
        res.send({status:true,msg: `${username} Successfully registered`})          
    }else{
        throw new Error( "Provide valid Username or password ") 
    }

} catch (error) {
    console.log("errr",error)
    next(error)
}
}

const sendOtp=async(req,res,next)=>{
    try {
        let {mobile}=req?.body
        if(mobile && mobile.length>0){
            res.send({status:true,msg: "OTP send successfully "}) 
        }else{
            throw new Error({
                status:false,
                msg: "mobile no is empty "
            })
        }

       
    } catch (error) {
        next(error)
    }
    }

   
    module.exports={register,sendOtp}