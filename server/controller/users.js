const firebaseWrapper=require('../lib/firebaseWrapper')

const userController={

    getUserData:async(req,res,next)=>{
        try {        
            let records=await firebaseWrapper.getCollections('users',['mobile','==','7377811111'])
            res.json({result:{
                records,
                status:"success",
                code:200               
            }})
        } catch (error) {
            res.json({error,code:500,status:"error"})
        }
    },
    getUsersList:async(req,res,next)=>{
        try {        
            let records=await firebaseWrapper.getCollections('users')
            res.json({result:{
                records,
                status:"success",
                code:200               
            }})
        } catch (error) {
            res.json({error,code:500,status:"error"})
        }
    }


}

module.exports=userController