# La Terrasse Diani Beach

Source du site [laterrasse.co.ke](https://laterrasse.co.ke/), hébergé actuellement avec ChatGPT Sites. Ce dépôt conserve le code et les images du site ; sa présence sur GitHub ne change pas à elle seule l'hébergement ni le domaine.

## Développement local

- Node.js 22.13 ou plus récent
- `npm ci`
- `npm run dev` pour le serveur local
- `npm run build` pour vérifier la compilation

Le site utilise Vinext, React et le plugin Sites dans `vite.config.ts`. Les pages et composants sont dans `app/`, les photos et autres ressources dans `public/`. Le fichier `.openai/hosting.json` référence le projet Sites et ses bindings D1/R2 ; une installation sur un autre hébergeur demandera une configuration adaptée.

## Configuration

Copier `.env.example` vers un fichier local `.env` et remplacer la valeur d'exemple uniquement si l'API d'articles est utilisée. Ne jamais committer le vrai `ARTICLE_API_TOKEN`. Le token de production, les identifiants et les données de la base D1 ou du stockage R2 ne sont pas contenus dans ce dépôt.

Les réservations pointent vers SevenRooms. La mesure GA4 (`G-BKVX3B1GHN`) est activée uniquement après le consentement du visiteur. Les contenus et photographies restent ceux de La Terrasse.
