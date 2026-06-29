
export async function GET() {
  console.log("[health] Health check passed");
  return Response.json({
    ok: true,
    service: "vercel-dashboard-fill-demo"
  });
}
