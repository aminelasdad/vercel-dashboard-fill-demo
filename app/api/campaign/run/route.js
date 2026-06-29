function randomFrom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function GET() {
  const clients = ["Café Montmartre", "Studio Nord", "Urban Fit", "Dental Pro Lyon", "Hotel Rivera"];
  const client = randomFrom(clients);
  const leads = Math.floor(Math.random() * 900) + 100;

  console.log("[campaign.run] Campaign execution started", {
    client,
    leads,
    channel: randomFrom(["email", "voip", "email+voip"])
  });

  await wait(Math.floor(Math.random() * 500) + 120);

  if (Math.random() < 0.12) {
    console.warn("[campaign.run] Daily quota close to limit", {
      client,
      usagePercent: Math.floor(Math.random() * 20) + 80
    });
  }

  console.log("[campaign.run] Campaign execution finished", {
    client,
    processedLeads: leads
  });

  return Response.json({
    ok: true,
    type: "campaign.run",
    client,
    processedLeads: leads
  });
}
