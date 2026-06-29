export default function handler(req,res){
 console.log("[health] Health check passed");
 res.status(200).json({ok:true,service:"vercel-dashboard-fill-static-api"});
}