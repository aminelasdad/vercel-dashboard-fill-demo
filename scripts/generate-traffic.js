const target = process.env.TARGET_URL || "http://localhost:3000";

const routes = [
  "/api/email/send",
  "/api/campaign/run",
  "/api/stripe/webhook",
  "/api/contacts/import",
  "/api/billing/invoice",
  "/api/domains/check",
  "/api/slow",
  "/api/error",
  "/api/health"
];

const total = Number(process.env.REQUESTS || 120);
const delayMs = Number(process.env.DELAY_MS || 1000);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function hit(route) {
  const url = target.replace(/\/$/, "") + route;

  try {
    const started = Date.now();
    const res = await fetch(url);
    const duration = Date.now() - started;
    console.log(`${res.status} ${route} ${duration}ms`);
  } catch (error) {
    console.log(`FAILED ${route}`, error.message);
  }
}

async function main() {
  console.log(`Target: ${target}`);
  console.log(`Requests: ${total}`);
  console.log(`Delay: ${delayMs}ms`);

  for (let i = 0; i < total; i++) {
    const route = routes[Math.floor(Math.random() * routes.length)];
    await hit(route);
    await sleep(delayMs);
  }

  console.log("Traffic generation completed.");
}

main();
