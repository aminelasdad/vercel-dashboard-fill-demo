function randomFrom(items){return items[Math.floor(Math.random()*items.length)]}
function wait(ms){return new Promise(resolve=>setTimeout(resolve,ms))}
export default async function handler(req,res){
 const invoice=randomFrom(["INV-2026-006","INV-2026-007","INV-2026-008"]), amount=randomFrom([6900,9900,14900,34900]);
 console.log("[stripe.webhook] Incoming invoice.paid event",{invoice,amount,currency:"eur"});
 await wait(Math.floor(Math.random()*220)+60);
 console.log("[stripe.webhook] Payment event saved",{invoice,status:"paid"});
 res.status(200).json({received:true,type:"stripe.webhook",event:"invoice.paid",invoice,amount});
}