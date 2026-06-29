function randomFrom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function GET() {
  console.error("[error] Simulated server error", {
    reason: "Provider timeout",
    provider: randomFrom(["Elastic Email", "Telnyx", "Stripe"]),
    retryable: true
  });

  return Response.json({
    ok: false,
    type: "error",
    message: "Simulated server error for Vercel logs"
  }, {
    status: 500
  });
}
