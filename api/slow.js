function randomFrom(items){return items[Math.floor(Math.random()*items.length)]}
function wait(ms){return new Promise(resolve=>setTimeout(resolve,ms))}
export default async function handler(req,res){
 const delay=Math.floor(Math.random()*1800)+900;
 console.log("[slow] Slow route started",{delayMs:delay});
 await wait(delay);
 console.log("[slow] Slow route completed",{delayMs:delay});
 res.status(200).json({ok:true,type:"slow",delayMs:delay});
}