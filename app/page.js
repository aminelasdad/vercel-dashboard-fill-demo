export default function Home() {
  return (
    <main>
      <div className="header">
        <div className="badge">Vercel Dashboard Fill Demo</div>
        <h1>Projet de remplissage du vrai dashboard Vercel</h1>
        <p>
          Cette app sert uniquement à générer des vrais logs, erreurs, requêtes API,
          routes dynamiques et activités visibles dans Vercel.
        </p>
      </div>

      <div className="grid">
        <div className="card">
          <strong>Email API</strong>
          <p>Génère des logs de type campagne email.</p>
          <code>/api/email/send</code>
        </div>
        <div className="card">
          <strong>Campaign API</strong>
          <p>Génère des logs de traitement campagne.</p>
          <code>/api/campaign/run</code>
        </div>
        <div className="card">
          <strong>Stripe Webhook</strong>
          <p>Génère des logs de paiement et webhook.</p>
          <code>/api/stripe/webhook</code>
        </div>
        <div className="card">
          <strong>Error Route</strong>
          <p>Génère volontairement une erreur serveur.</p>
          <code>/api/error</code>
        </div>
      </div>

      <div className="row">
        <button id="start">Start browser traffic</button>
        <button id="stop" className="secondary">Stop</button>
        <button id="burst" className="secondary">Send burst</button>
      </div>

      <div id="log" className="log">
        Browser traffic log will appear here...
      </div>

      <script dangerouslySetInnerHTML={{ __html: `
        let timer = null;
        const routes = [
          "/api/email/send",
          "/api/campaign/run",
          "/api/stripe/webhook",
          "/api/contacts/import",
          "/api/billing/invoice",
          "/api/domains/check",
          "/api/slow",
          "/api/error"
        ];

        const logBox = document.getElementById("log");

        function write(message) {
          const line = "[" + new Date().toLocaleTimeString() + "] " + message;
          logBox.innerHTML = line + "<br>" + logBox.innerHTML;
        }

        async function hit() {
          const route = routes[Math.floor(Math.random() * routes.length)];
          try {
            const response = await fetch(route);
            write(response.status + " " + route);
          } catch (e) {
            write("FAILED " + route);
          }
        }

        document.getElementById("start").onclick = () => {
          if (timer) return;
          write("Traffic started");
          timer = setInterval(hit, 1800);
        };

        document.getElementById("stop").onclick = () => {
          if (timer) clearInterval(timer);
          timer = null;
          write("Traffic stopped");
        };

        document.getElementById("burst").onclick = async () => {
          write("Burst started");
          for (let i = 0; i < 20; i++) {
            hit();
            await new Promise(r => setTimeout(r, 250));
          }
          write("Burst completed");
        };
      `}} />
    </main>
  );
}
