# Design System — Charte Graphique

> Document vivant. Mis à jour par @frontend lors de chaque sprint qui touche à l'UI.
> Source de vérité pour tous les choix visuels du projet.

---

## Tokens

Les valeurs concrètes sont dans `app/frontend/styles/tokens.js`.
Les variables CSS globales sont dans `app/frontend/styles/globals.css`.

**Règle** : jamais de valeur hardcodée dans un composant. Toujours importer depuis `tokens.js` ou utiliser une variable CSS.

---

## Palette de couleurs

### Couleurs de marque
| Token | Valeur | Usage |
|-------|--------|-------|
| `colors.primary` | `#16213e` | Couleur principale, headers, CTA primaires |
| `colors.primaryLight` | `#1a2a50` | Hover sur primary |
| `colors.accent` | `#0a9396` | Liens, badges, éléments interactifs secondaires |
| `colors.accentLight` | `#94d2bd` | Fonds de badges, highlights |

### Couleurs sémantiques
| Token | Valeur | Usage |
|-------|--------|-------|
| `colors.success` | `#2a9d8f` | Succès, confirmations |
| `colors.warning` | `#e9c46a` | Avertissements |
| `colors.error` | `#e76f51` | Erreurs, destructions |
| `colors.info` | `#457b9d` | Informations neutres |

### Règles d'accessibilité
- Ratio de contraste texte/fond : **minimum 4.5:1** (WCAG AA)
- Ratio grand texte (>18px ou bold >14px) : **minimum 3:1**
- Ne jamais transmettre une information par la couleur seule (ajouter icône ou texte)

---

## Typographie

### Familles
- **Sans-serif** : System font stack (`-apple-system, BlinkMacSystemFont, "Segoe UI"...`)
- **Monospace** : `SFMono-Regular, Consolas, Menlo` — pour le code uniquement

### Échelle
| Niveau | Token | Taille | Usage |
|--------|-------|--------|-------|
| XS | `fontSize.xs` | 12px | Labels, métadonnées |
| SM | `fontSize.sm` | 14px | Texte secondaire, captions |
| Base | `fontSize.base` | 16px | Corps de texte standard |
| LG | `fontSize.lg` | 18px | Intro, lead text |
| XL | `fontSize.xl` | 20px | Sous-titres de sections |
| 2XL | `fontSize.2xl` | 24px | Titres secondaires (h2) |
| 4XL | `fontSize.4xl` | 36px | Titre principal (h1) |

### Règles
- H1 unique par page
- Hiérarchie stricte h1 → h2 → h3 (pas de sauts)
- `line-height: 1.5` pour le corps, `1.25` pour les titres

---

## Espacement

Unité de base : **4px** (`spacing.1 = 0.25rem`)

| Token | Valeur | Usage typique |
|-------|--------|---------------|
| `spacing[2]` | 8px | Espacement interne compact (padding boutons) |
| `spacing[4]` | 16px | Espacement standard entre éléments |
| `spacing[6]` | 24px | Espacement sections internes |
| `spacing[8]` | 32px | Espacement entre sections |
| `spacing[12]` | 48px | Espacement grandes sections |

**Règle** : toujours utiliser un multiple de 4px. Jamais de valeurs arbitraires (ex: 13px, 22px).

---

## Composants

### Boutons
```
Primaire  : bg=primary, text=white, hover=primaryLight
Secondaire: bg=transparent, border=primary, text=primary
Danger    : bg=error, text=white
Désactivé : opacity 0.5, cursor not-allowed
```

### Cards
```
bg=white, border=1px solid colors.border.light, radius=radii.lg, shadow=shadows.sm
Hover : shadow=shadows.md
```

### Formulaires
```
Input : border=colors.border.default, radius=radii.md, focus=accent outline
Label : fontSize.sm, fontWeight.medium, color=text.secondary
Error : color=error, fontSize.sm
```

---

## Accessibilité (intégrée au design)

- Tous les boutons ont un état `:focus-visible` visible (outline `2px solid accent`)
- Toutes les images ont un `alt`
- Les icônes décoratives ont `aria-hidden="true"`
- Les formulaires ont des labels associés (`htmlFor`)
- Les couleurs d'erreur sont accompagnées d'une icône ou d'un message texte

---

## Ce qui est à décider au démarrage du projet

- [ ] Logo et favicon
- [ ] Couleurs de marque (remplacer les valeurs dans `tokens.js`)
- [ ] Police personnalisée (Google Fonts, etc.) — modifier `globals.css`
- [ ] Dark mode (variables CSS prêtes pour être dupliquées sous `@media (prefers-color-scheme: dark)`)

---

## Historique des décisions design

| Date | Décision | Raison |
|------|----------|--------|
| 2026-03-11 | System fonts stack (pas de Google Fonts) | Performance — pas de requête externe |
| 2026-03-11 | Spacing unit = 4px | Cohérence avec les standards (Tailwind, Material) |
| 2026-03-11 | WCAG AA comme standard minimum | Accessibilité comme exigence de base |
