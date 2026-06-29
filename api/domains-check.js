function randomFrom(items){return items[Math.floor(Math.random()*items.length)]}
function wait(ms){return new Promise(resolve=>setTimeout(resolve,ms))}
export default async function handler(req,res){
 const domain=randomFrom(["midas-stack.com","mail.midas-stack.com","dev-test-stack-02.website","demo-client.fr"]), dkimPass=Math.random()>0.25;
 console.log("[domains.check] DNS verification started",{domain});
 await wait(Math.floor(Math.random()*250)+80);
 if(!dkimPass) console.warn("[domains.check] DKIM pending",{domain,record:"selector1._domainkey"});
 else console.log("[domains.check] DNS verification passed",{domain,spf:"pass",dkim:"pass",dmarc:"pass"});
 res.status(200).json({ok:true,type:"domains.check",domain,spf:"pass",dkim:dkimPass?"pass":"pending",dmarc:"pass"});
}