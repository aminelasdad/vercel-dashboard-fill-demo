# Vercel Dashboard Fill Demo

Ce projet sert à remplir le vrai dashboard Vercel avec de l'activité réelle :

- Logs
- Deployments
- Functions
- Erreurs 500
- Requêtes API
- Routes
- Build history
- Environment variables
- Domains si tu ajoutes un domaine

Ce n'est pas ton vrai SaaS. C'est uniquement un projet de remplissage pour faire des captures d'écran de Vercel.

---

## 1. Tester en local

```bash
npm install
npm run dev
```

Puis ouvre :

```txt
http://localhost:3000
```

Clique sur :

- Start browser traffic
- Send burst

---

## 2. Envoyer sur GitHub

```bash
git init
git add .
git commit -m "Initial Vercel dashboard fill demo"
git branch -M main
git remote add origin https://github.com/TON_USER/vercel-dashboard-fill-demo.git
git push -u origin main
```

---

## 3. Importer dans Vercel

1. Va sur Vercel.
2. Add New Project.
3. Import Git Repository.
4. Sélectionne ce repo.
5. Framework Preset : Next.js.
6. Clique sur Deploy.

---

## 4. Remplir les Logs Vercel

Après déploiement, ouvre l'URL Vercel du projet.

Exemple :

```txt
https://vercel-dashboard-fill-demo.vercel.app
```

Clique sur :

- Start browser traffic
- Send burst

Ensuite va dans Vercel :

```txt
Project > Logs
```

Tu verras des vraies lignes de logs.

---

## 5. Générer du trafic depuis ton PC

Tu peux aussi lancer :

```bash
TARGET_URL=https://TON-PROJET.vercel.app npm run traffic
```

Sur Windows PowerShell :

```powershell
$env:TARGET_URL="https://TON-PROJET.vercel.app"; npm run traffic
```

Pour plus de trafic :

```bash
TARGET_URL=https://TON-PROJET.vercel.app REQUESTS=300 DELAY_MS=500 npm run traffic
```

PowerShell :

```powershell
$env:TARGET_URL="https://TON-PROJET.vercel.app"; $env:REQUESTS="300"; $env:DELAY_MS="500"; npm run traffic
```

---

## 6. Remplir Deployments

Fais plusieurs petits commits :

```bash
git add .
git commit -m "Add mock email logs"
git push

git add .
git commit -m "Update campaign worker"
git push

git add .
git commit -m "Fix billing webhook"
git push
```

Chaque push crée un nouveau deployment Vercel.

---

## 7. Remplir Environment Variables

Dans Vercel :

```txt
Project > Settings > Environment Variables
```

Ajoute par exemple :

```txt
ELASTIC_EMAIL_API_KEY = demo_xxx
TELNYX_API_KEY = demo_xxx
STRIPE_SECRET_KEY = sk_test_xxx
DATABASE_URL = mysql://demo
APP_ENV = production
```

Ce sont des fausses valeurs, ne mets pas tes vraies clés.

---

## 8. Remplir Domains

Dans Vercel :

```txt
Project > Settings > Domains
```

Tu peux ajouter un sous-domaine de test si tu en as un.

Exemple :

```txt
vercel-demo.midas-stack.com
```

Puis Vercel te donnera des DNS à ajouter chez ton registrar.

---

## 9. Analytics

Pour Analytics / Speed Insights, il faut généralement activer les fonctionnalités dans Vercel et générer du trafic réel.

Le plus rapide pour les captures :

1. Active Analytics si disponible dans ton dashboard.
2. Ouvre l'URL depuis plusieurs navigateurs.
3. Clique sur plusieurs routes.
4. Attends que Vercel remonte les données.

---

## Routes disponibles

```txt
/api/email/send
/api/campaign/run
/api/stripe/webhook
Trigger Vercel deployment
/api/contacts/import
/api/billing/invoice
/api/domains/check
/api/slow
/api/error
/api/health
```
