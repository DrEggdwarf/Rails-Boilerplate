# Rails + Inertia.js + React — AI-Powered Boilerplate

Boilerplate prêt à cloner pour démarrer un projet Rails avec Inertia.js, React, i18n natif et un **système multi-agents IA** intégré via Claude Code.

## Stack

| Couche | Technologie | Version |
|--------|------------|---------|
| Backend | Ruby on Rails | 8.1 |
| Frontend | React + Inertia.js | 18 + 2.x |
| Bundler | Vite (vite_rails) | 6.x |
| DB dev | SQLite | 3 |
| DB prod | PostgreSQL | - |
| i18n | Rails I18n natif | fr + en |
| IA | Claude Code (multi-agents) | - |

## Prérequis

- [rbenv](https://github.com/rbenv/rbenv) + ruby-build (Ruby 3.3+ géré automatiquement via `.ruby-version`)
- Node.js 20+ (géré automatiquement via `.nvmrc` si nvm est installé)
- SQLite3 (`sudo apt install sqlite3 libsqlite3-dev` sur Debian/Ubuntu)
- [Claude Code](https://claude.ai/claude-code) pour le système multi-agents

## Quickstart

```bash
git clone https://github.com/DrEggdwarf/Rails-Boilerplate.git mon-projet && cd mon-projet && bundle config set --local path 'vendor/bundle' && bundle install && npm install && bundle exec rails db:create db:migrate && bin/dev
```

> Ouvrir **http://localhost:3000**

Ou étape par étape :

```bash
# 1. Cloner
git clone https://github.com/DrEggdwarf/Rails-Boilerplate.git mon-projet
cd mon-projet

# 2. Installer les dépendances
bundle config set --local path 'vendor/bundle'
bundle install
npm install

# 3. Base de données
bundle exec rails db:create db:migrate

# 4. Lancer (Rails + Vite en simultané)
bin/dev
```

> `bin/dev` lance Rails + Vite simultanément via Foreman (Procfile.dev).

## Personnaliser le boilerplate

1. **Renommer l'app** : remplacer `app_name` dans `config/deploy.yml` et `config/cable.yml`
2. **Changer le titre** : modifier `config/locales/fr.yml` et `config/locales/en.yml`
3. **Remplacer la page d'accueil** : éditer `app/frontend/pages/Home.jsx`
4. **Configurer la prod** : renseigner `config/deploy.yml` (serveur, image Docker)

## Système Multi-Agents IA

Ce boilerplate inclut un framework agile multi-agents piloté par Claude Code.

### Principe

Claude Code agit comme **Manager** : il clarifie la demande, planifie un sprint, délègue aux agents, orchestre la code review et met à jour la documentation.

```
Demande → Clarification → Sprint Planning → Exécution → Review → Documentation
```

### Les 12 agents

#### Agents de construction

| Agent | Modèle | Domaine |
|-------|--------|---------|
| @pm | haiku | Specs, user stories, priorisation |
| @architect | sonnet | Structure, patterns, dépendances |
| @backend | sonnet | Rails, modèles, controllers, i18n |
| @frontend | haiku | React, Inertia, composants |
| @devops | haiku | Docker, CI/CD, déploiement |
| @database | sonnet | Migrations, index, perf SQL |

#### Agents de review (phase automatique après chaque sprint)

| Agent | Modèle | Domaine | Déclenchement |
|-------|--------|---------|---------------|
| @security | sonnet | Audit OWASP, secrets | Toujours |
| @testing | sonnet | Tests unitaires & intégration | Toujours |
| @quality | sonnet | Complexité, nommage, DRY | Toujours |
| @performance | sonnet | Core Web Vitals, N+1, bundle | Backend ou frontend modifié |
| @a11y | sonnet | WCAG 2.1 AA, contraste, ARIA | Frontend modifié |
| @pentester | sonnet | Tests d'intrusion (localhost) | Sur demande |

### Utilisation

Ouvrir Claude Code dans ce projet et décrire une feature :

```
"Je veux ajouter un système d'authentification avec email/password"
```

Le Manager va :
1. Poser des questions de clarification
2. Proposer un sprint plan à valider
3. Exécuter les agents dans l'ordre (séquentiel ou parallèle)
4. Lancer la code review automatique
5. Mettre à jour la documentation

### Mémoire entre sessions

Les agents documentent leur travail dans `ai/context/` (versionné) :
- `sprint_log.md` — Historique des sprints
- `decisions.md` — Décisions d'architecture (ADR)
- `backlog.md` — Tâches futures identifiées

## i18n

L'app est multilingue dès le départ (fr par défaut, en inclus).

```jsx
// Dans un composant React
import { useTranslation } from "../lib/useTranslation";
const { t } = useTranslation();
return <h1>{t("app.name")}</h1>;
```

Ajouter une langue : créer `config/locales/xx.yml` + ajouter `:xx` dans `config/initializers/i18n.rb`.

## Structure du projet

```
├── ai/
│   ├── agents/          # 12 agents YAML (rôle, scope, rules, prompt)
│   ├── workflows/       # new_feature.yml, code_review.yml
│   └── context/         # sprint_log.md, decisions.md, backlog.md
├── app/
│   ├── controllers/     # Controllers Rails (render inertia:)
│   ├── frontend/
│   │   ├── components/  # Composants React partagés
│   │   ├── entrypoints/ # Point d'entrée Vite (application.jsx)
│   │   ├── lib/         # Hooks utilitaires (useTranslation)
│   │   └── pages/       # Pages Inertia (PascalCase)
│   └── views/layouts/   # Layout HTML avec tags Vite
├── config/
│   ├── locales/         # fr.yml, en.yml
│   └── initializers/    # i18n.rb
├── CLAUDE.md            # Instructions Manager (framework 5 phases)
└── vite.config.ts
```
