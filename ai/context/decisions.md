# Décisions d'Architecture (ADR)

## ADR-001 : Stack technique
- **Date** : 2026-03-11
- **Statut** : Accepté
- **Décision** : Ruby on Rails 8.1 + Inertia.js + React 18 + Vite
- **Raison** : Rails pour la productivité backend, Inertia pour éviter une SPA complexe avec API, React pour l'écosystème composants
- **Conséquences** : Pas de routing client-side, les controllers Rails gèrent le routing via Inertia

## ADR-002 : Base de données
- **Date** : 2026-03-11
- **Statut** : Accepté
- **Décision** : SQLite en développement, PostgreSQL en production
- **Raison** : SQLite simplifie le setup dev, PostgreSQL pour la robustesse en prod (Rails 8 supporte bien les deux)

## ADR-003 : Orchestration IA via Claude Code natif
- **Date** : 2026-03-11
- **Statut** : Accepté
- **Décision** : Utiliser Claude Code (abonnement) comme orchestrateur multi-agents, pas de clé API séparée
- **Raison** : Éviter le doublon de coûts, sub-agents via l'outil Agent intégré
- **Conséquences** : Les agents sont des fichiers YAML de config, le CLAUDE.md définit le comportement du Manager

<!-- Ajouter les ADR du projet ici lors du clonage du boilerplate -->
