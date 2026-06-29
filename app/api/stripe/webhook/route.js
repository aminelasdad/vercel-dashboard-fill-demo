function randomFrom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function GET() {
  const invoices = ["INV-2026-006", "INV-2026-007", "INV-2026-008"];
  const invoice = randomFrom(invoices);
  const amount = randomFrom([6900, 9900, 14900, 34900]);

  console.log("[stripe.webhook] Incoming invoice.paid event", {
    invoice,
    amount,
    currency: "eur"
  });

  await wait(Math.floor(Math.random() * 220) + 60);

  console.log("[stripe.webhook] Payment event saved", {
    invoice,
    status: "paid"
  });

  return Response.json({
    received: true,
    type: "stripe.webhook",
    event: "invoice.paid",
    invoice,
    amount
  });
}
