function randomFrom(items){return items[Math.floor(Math.random()*items.length)]}
function wait(ms){return new Promise(resolve=>setTimeout(resolve,ms))}
export default function handler(req,res){
 console.error("[error] Simulated server error",{reason:"Provider timeout",provider:randomFrom(["Elastic Email","Telnyx","Stripe"]),retryable:true});
 res.status(500).json({ok:false,type:"error",message:"Simulated server error for Vercel logs"});
}