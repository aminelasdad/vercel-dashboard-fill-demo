function randomFrom(items){return items[Math.floor(Math.random()*items.length)]}
function wait(ms){return new Promise(resolve=>setTimeout(resolve,ms))}
export default async function handler(req,res){
 const campaigns=["Paris Restaurants Outreach","Agency Reactivation","Fitness Local Leads","Local SEO Audit Offer"];
 const providers=["Elastic Email","Mailgun","SendGrid","SMTP Relay"];
 const campaign=randomFrom(campaigns), provider=randomFrom(providers), batchSize=Math.floor(Math.random()*180)+20;
 console.log("[email.send] Starting email batch",{campaign,provider,batchSize});
 if(Math.random()<0.18) console.warn("[email.send] Provider latency warning",{provider,latencyMs:Math.floor(Math.random()*900)+400});
 await wait(Math.floor(Math.random()*300)+80);
 console.log("[email.send] Batch completed",{sent:batchSize,campaign,provider});
 res.status(200).json({ok:true,type:"email.send",campaign,provider,sent:batchSize});
}