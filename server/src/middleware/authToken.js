
async function authToken(req,res,next){
    try{

        const token = req.cookies?.token || req.header
        if(!token){
            return res.json({message :"user not login"})
        }
        
        jwt.verify(token , process.env.TOKEN_SECRETE_KEY ,function(err,decoded){
           console.log(err)
           console.log("decoded",decoded)
        })      
    }catch(err){
        res.status(400).json({
            message : err.message ,
            data:[],


        })
    }
}