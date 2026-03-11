# Sprint Log

<!-- Format :
## Sprint YYYY-MM-DD — Nom de la feature
- **Tickets** : X exécutés
- **Agents utilisés** : @backend (sonnet), @frontend (haiku), ...
- **Fichiers modifiés** : [liste]
- **Décisions prises** : [résumé]
- **Statut** : Terminé / En cours
-->

## Sprint 2026-03-11 — Boilerplate initial
- **Tickets** : Setup Rails + Inertia + React + Vite + Multi-agents IA
- **Agents utilisés** : aucun (setup manuel)
- **Fichiers créés** :
  - app/controllers/home_controller.rb
  - app/frontend/entrypoints/application.jsx
  - app/frontend/pages/Home.jsx
  - config/vite.json, vite.config.ts, package.json
  - ai/agents/*.yml (8 agents), ai/workflows/*.yml (2 workflows)
  - CLAUDE.md (framework Manager 5 phases)
- **Bugs résolus** :
  - `vite_javascript_tag "application"` génère `.js` mais fichier est `.jsx` → utiliser `"application.jsx"`
  - `@vitejs/plugin-react` nécessite `vite_react_refresh_tag` dans le layout avant le JS
- **Statut** : Boilerplate fonctionnel

## Sprint 2026-03-11 — i18n + Question Relay
- **Tickets** : i18n multilingue (fr/en) + convention question relay agents
- **Agents utilisés** : aucun (implémentation directe)
- **Fichiers créés** :
  - config/locales/fr.yml, config/locales/en.yml
  - config/initializers/i18n.rb
  - app/controllers/application_controller.rb (locale detection + inertia_share)
  - app/frontend/lib/useTranslation.js
  - app/frontend/components/LocaleSwitcher.jsx
- **Fichiers modifiés** :
  - app/frontend/pages/Home.jsx (i18n via hook)
  - CLAUDE.md (question relay pattern)
- **Décisions prises** :
  - i18n Option A : Rails détecte la locale, passe les traductions via inertia_share, React consomme avec hook `useTranslation`
  - Locale par défaut : fr, fallback activé
  - Détection : param `?locale=` > session > Accept-Language header
  - Question relay : agents signalent avec `QUESTIONS:` + `BLOCKER: true` si bloquant
- **Statut** : Terminé
