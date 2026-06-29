function randomFrom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function GET() {
  const delay = Math.floor(Math.random() * 1800) + 900;

  console.log("[slow] Slow route started", {
    delayMs: delay
  });

  await wait(delay);

  console.log("[slow] Slow route completed", {
    delayMs: delay
  });

  return Response.json({
    ok: true,
    type: "slow",
    delayMs: delay
  });
}
