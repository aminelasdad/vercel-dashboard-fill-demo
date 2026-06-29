function randomFrom(items){return items[Math.floor(Math.random()*items.length)]}
function wait(ms){return new Promise(resolve=>setTimeout(resolve,ms))}
export default async function handler(req,res){
 const source=randomFrom(["Google Maps","Pages Jaunes","Pagine Gialle","Yelp","Local CSV"]), imported=Math.floor(Math.random()*350)+25;
 console.log("[contacts.import] Import started",{source,imported});
 if(Math.random()<0.22) console.warn("[contacts.import] Duplicate contacts detected",{source,duplicates:Math.floor(Math.random()*50)+5});
 await wait(Math.floor(Math.random()*450)+100);
 console.log("[contacts.import] Import completed",{source,imported});
 res.status(200).json({ok:true,type:"contacts.import",source,imported});
}