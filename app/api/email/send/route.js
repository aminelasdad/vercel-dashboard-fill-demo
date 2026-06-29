function randomFrom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function GET(request) {
  const campaigns = ["Paris Restaurants Outreach", "Agency Reactivation", "Fitness Local Leads", "Local SEO Audit Offer"];
  const providers = ["Elastic Email", "Mailgun", "SendGrid", "SMTP Relay"];
  const campaign = randomFrom(campaigns);
  const provider = randomFrom(providers);
  const batchSize = Math.floor(Math.random() * 180) + 20;

  console.log("[email.send] Starting email batch", {
    campaign,
    provider,
    batchSize,
    environment: process.env.VERCEL_ENV || "local"
  });

  if (Math.random() < 0.15) {
    console.warn("[email.send] Provider latency warning", {
      provider,
      latencyMs: Math.floor(Math.random() * 900) + 400
    });
  }

  await wait(Math.floor(Math.random() * 300) + 80);

  console.log("[email.send] Batch completed", {
    sent: batchSize,
    campaign,
    provider
  });

  return Response.json({
    ok: true,
    type: "email.send",
    campaign,
    provider,
    sent: batchSize
  });
}
