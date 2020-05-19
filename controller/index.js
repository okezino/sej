const model = require("../model/db")

module.exports = class auth{
    static postreg(req, cb){
      
        let obj = {
            familyname : req.body.familyname,
            contactnumber : req.body.contactnumber,
            email : req.body.email
        }

        model.Postdata(obj, result =>{
            if(result.sucess){
               cb({sucess : true, message : "successful"})
            }else{
                cb({sucess : false, message : "fail to register"})
            }
        })

    }
} 

