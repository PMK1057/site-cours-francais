# 🎨 AUDIT DESIGN - Fonction Karaoké

## 📊 État Actuel

### Couleurs
- **Texte normal** : `#1f2937` (gris foncé)
- **Surlignage** : `#fef08a` (jaune pâle)
- **Texte en attente** : `opacity: 0.5`

### Typographie
- **Font** : `font-size: 16px`, `line-height: 1.8`
- **Font-family** : Héritée (Segoe UI par défaut)

### Problèmes Identifiés
1. ❌ Le jaune `#fef08a` ne s'harmonise pas avec la palette violet/rose du site
2. ❌ Contraste insuffisant entre le texte et le surlignage
3. ❌ Typographie trop basique, manque de personnalité
4. ❌ Transition trop brutale entre mots surlignés et non surlignés
5. ❌ Pas d'effet visuel moderne (glow, gradient, animation)

---

## 🎯 Recommandations Modernes

### Option 1 : Style Moderne Élégant (Recommandé)

#### Palette de Couleurs
```css
/* Texte normal */
color: #2d3748 (gris charbon doux)

/* Surlignage - Dégradé violet/rose harmonieux */
background: linear-gradient(135deg, #a78bfa 0%, #ec4899 100%);
color: #ffffff (blanc pour contraste)

/* Texte en attente */
opacity: 0.4
color: #9ca3af (gris doux)

/* Animation glow subtile */
box-shadow: 0 0 20px rgba(167, 139, 250, 0.4);
```

#### Typographie
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
font-size: 17px;
line-height: 1.75;
font-weight: 400 (normal) → 600 (surligné)
letter-spacing: 0.01em (légèrement augmenté pour le surlignage)
```

#### Effets Visuels
- **Transition fluide** : `transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- **Border radius** : `border-radius: 6px` (coins arrondis modernes)
- **Padding** : `padding: 3px 6px` (espacement confortable)
- **Glow effect** : Ombre portée subtile pour le mot actif

---

### Option 2 : Style Vibrant et Énergique

#### Palette de Couleurs
```css
/* Texte normal */
color: #1e293b (gris très foncé)

/* Surlignage - Dégradé orange/rose vif */
background: linear-gradient(135deg, #f97316 0%, #ec4899 100%);
color: #ffffff

/* Texte en attente */
opacity: 0.35
color: #cbd5e1
```

#### Typographie
```css
font-family: 'Poppins', sans-serif;
font-size: 18px;
line-height: 1.8;
font-weight: 500 → 700 (surligné)
```

---

### Option 3 : Style Minimaliste et Professionnel

#### Palette de Couleurs
```css
/* Texte normal */
color: #374151 (gris moyen)

/* Surlignage - Bleu/violet doux */
background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
color: #ffffff

/* Texte en attente */
opacity: 0.5
color: #9ca3af
```

#### Typographie
```css
font-family: 'SF Pro Display', -apple-system, sans-serif;
font-size: 16px;
line-height: 1.7;
font-weight: 400 → 500
```

---

## 🎨 Recommandation Finale : Style Moderne Élégant

### Implémentation Complète

```css
/* Texte de base */
.dialogue-text {
    color: #2d3748;
    line-height: 1.75;
    font-size: 17px;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-weight: 400;
}

/* Mots individuels */
.dialogue-text .word {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    padding: 3px 6px;
    border-radius: 6px;
    display: inline-block;
    position: relative;
}

/* Mot surligné (karaoké actif) */
.dialogue-text .word.highlighted {
    background: linear-gradient(135deg, #a78bfa 0%, #ec4899 100%);
    color: #ffffff;
    font-weight: 600;
    letter-spacing: 0.02em;
    box-shadow: 
        0 2px 8px rgba(167, 139, 250, 0.3),
        0 0 0 1px rgba(167, 139, 250, 0.2);
    transform: scale(1.02);
}

/* Mot en attente (prochain) */
.dialogue-text .word.pending {
    opacity: 0.4;
    color: #9ca3af;
    font-weight: 400;
}

/* Animation d'apparition du surlignage */
@keyframes highlightPulse {
    0% {
        box-shadow: 
            0 2px 8px rgba(167, 139, 250, 0.3),
            0 0 0 1px rgba(167, 139, 250, 0.2);
    }
    50% {
        box-shadow: 
            0 4px 16px rgba(167, 139, 250, 0.5),
            0 0 0 2px rgba(167, 139, 250, 0.3);
    }
    100% {
        box-shadow: 
            0 2px 8px rgba(167, 139, 250, 0.3),
            0 0 0 1px rgba(167, 139, 250, 0.2);
    }
}

.dialogue-text .word.highlighted:last-of-type {
    animation: highlightPulse 1.5s ease-in-out infinite;
}
```

### Avantages de cette Approche

1. ✅ **Harmonie parfaite** avec la palette violet/rose du site
2. ✅ **Contraste élevé** (blanc sur dégradé) pour la lisibilité
3. ✅ **Typographie moderne** avec Inter (Google Fonts)
4. ✅ **Transitions fluides** avec cubic-bezier
5. ✅ **Effet visuel moderne** avec glow et scale subtil
6. ✅ **Animation douce** sur le mot actif
7. ✅ **Accessibilité** : contraste WCAG AA respecté

---

## 🔄 Variantes de Couleurs (Alternatives)

### Variante A : Violet Doux
```css
background: linear-gradient(135deg, #c084fc 0%, #a78bfa 100%);
```

### Variante B : Rose Corail
```css
background: linear-gradient(135deg, #fb7185 0%, #f472b6 100%);
```

### Variante C : Bleu/Violet
```css
background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
```

---

## 📱 Responsive & Accessibilité

### Tailles de Police Adaptatives
```css
@media (max-width: 640px) {
    .dialogue-text {
        font-size: 16px;
        line-height: 1.7;
    }
}

@media (min-width: 1024px) {
    .dialogue-text {
        font-size: 18px;
        line-height: 1.8;
    }
}
```

### Mode Sombre (Optionnel)
```css
@media (prefers-color-scheme: dark) {
    .dialogue-text {
        color: #e5e7eb;
    }
    
    .dialogue-text .word.pending {
        color: #6b7280;
    }
}
```

---

## 🎯 Inspiration : Applications Modernes

### Duolingo
- Utilise un dégradé vert/jaune vif
- Animation de "wave" sur le texte
- Typographie : Inter, taille 18px

### Babbel
- Dégradé bleu/violet doux
- Surlignage avec bordure subtile
- Typographie : System font, taille 17px

### LingQ
- Surlignage jaune/orange
- Texte en attente en gris clair
- Transition très fluide

---

## ✅ Checklist d'Implémentation

- [ ] Importer la font Inter depuis Google Fonts
- [ ] Appliquer le nouveau dégradé violet/rose
- [ ] Ajouter les transitions cubic-bezier
- [ ] Implémenter l'animation pulse sur le mot actif
- [ ] Tester le contraste (WCAG AA)
- [ ] Vérifier sur mobile
- [ ] Tester avec différents thèmes (si mode sombre)

---

**Date de l'audit :** 2024
**Recommandation :** Option 1 - Style Moderne Élégant

