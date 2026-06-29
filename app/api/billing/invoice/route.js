function randomFrom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function GET() {
  const customers = ["Café Montmartre", "Studio Nord", "Urban Fit", "Dental Pro Lyon"];
  const customer = randomFrom(customers);

  console.log("[billing.invoice] Creating invoice", {
    customer,
    plan: randomFrom(["Starter", "Growth", "Scale"])
  });

  await wait(Math.floor(Math.random() * 300) + 80);

  console.log("[billing.invoice] Invoice finalized", {
    customer,
    status: "open"
  });

  return Response.json({
    ok: true,
    type: "billing.invoice",
    customer,
    status: "open"
  });
}
