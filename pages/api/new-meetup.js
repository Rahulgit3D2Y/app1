import { MongoClient } from "mongodb";


async function handler(req,res){
    if(req.mehod==='POST'){
        const data=req.body
        MongoClient.connect('mongodb+srv://rahul2504:rahul2504@cluster0.1ifdp2p.mongodb.net/?retryWrites=true&w=majority')
        const db=client.db;
        const meetupcollection=db.collection('meetups')
       const result= await meetupcollection.insertone(data)
    
    console.log(result)
client.close()
res.status(201).json({message:'yo'})
}
}
export default handler