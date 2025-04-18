import dbConnect from "../../../utils/dbConnect"
import Case from "../../../models/Case"
dbConnect();
export default async function handler(req,res){
    const {method} = req;
    switch(method){
        case "GET":
            try{
                const plaintiff = req.query.complainentEmail;
                console.log(req.query);
                
                const cases = await Case.find({complainentEmail: plaintiff})

                
                res.status(200).json({success:true,data:cases});
                //res.status(200).json({success:true,data:users})
            }catch(error){
                console.log(error);
                
                res.status(400).json({success:false})
            }
            break;
    }
    //res.status(200).json({"name":"shreyasP"})
}