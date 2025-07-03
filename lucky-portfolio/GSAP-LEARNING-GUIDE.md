# Guide d'Apprentissage GSAP - LuckyDev Agency

## 🎯 Introduction

Ce projet vous permet d'apprendre GSAP (GreenSock Animation Platform) à travers des exemples concrets intégrés dans une vraie landing page d'agence web.

## 🚀 Nouveautés du Site


### Sections du Site

1. **Hero** - Animation d'entrée spectaculaire
2. **Stats** - Compteurs animés
3. **Services** - 3 services principaux (Design, Développement, SEO)
4. **Process** - Méthodologie en 4 étapes
5. **Portfolio** - Galerie de projets
6. **GSAP Showcase** - Démo d'animations avancées
7. **Contact** - Formulaire moderne

## 📚 Concepts GSAP Couverts

### 1. Animations de Base

```javascript
// Animation simple
gsap.from(".element", {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power3.out",
});
```

**Concepts clés :**

- `from` : Anime depuis une position vers la position actuelle
- `to` : Anime depuis la position actuelle vers une nouvelle position
- `duration` : Durée de l'animation en secondes
- `ease` : Type de transition (power1, power2, power3, etc.)

### 2. Timeline (Orchestration)

```javascript
const tl = gsap.timeline({ delay: 0.5 });

tl.from(".hero-badge", { duration: 1, y: 30, opacity: 0 })
  .from(".hero-title", { duration: 1.2, y: 50, opacity: 0 }, "-=0.5")
  .from(".hero-subtitle", { duration: 1, y: 30, opacity: 0 }, "-=0.7");
```

**Concepts clés :**

- `timeline()` : Crée une séquence d'animations
- `'-=0.5'` : Démarre 0.5s avant la fin de l'animation précédente
- `delay` : Retard avant le démarrage de la timeline

### 3. Stagger (Décalage)

```javascript
gsap.from(".service-card", {
  duration: 1.2,
  y: 60,
  opacity: 0,
  stagger: 0.15, // Décalage de 0.15s entre chaque élément
  ease: "power3.out",
});
```

**Concepts clés :**

- `stagger` : Applique un décalage entre plusieurs éléments
- Crée un effet de vague naturel

### 4. ScrollTrigger (Animation au Scroll)

```javascript
gsap.from(".service-card", {
  duration: 1.2,
  y: 60,
  opacity: 0,
  stagger: 0.15,
  scrollTrigger: {
    trigger: ".services-section",
    start: "top 70%", // Quand le haut de la section atteint 70% de la hauteur
    end: "bottom 20%",
  },
});
```

**Concepts clés :**

- `trigger` : Élément qui déclenche l'animation
- `start` : Point de démarrage
- `end` : Point de fin
- `scrub` : Lie l'animation à la position du scroll

### 5. Animations Continues (Repeat)

```javascript
gsap.to(".floating-shape", {
  y: -30,
  rotation: 360,
  duration: 6,
  repeat: -1, // Répéter à l'infini
  yoyo: true, // Faire l'animation dans les deux sens
  ease: "power2.inOut",
  stagger: 0.5,
});
```

**Concepts clés :**

- `repeat: -1` : Répétition infinie
- `yoyo: true` : Animation bidirectionnelle
- `stagger` : Décalage entre éléments multiples

### 6. Animation de Compteurs

```javascript
const stats = document.querySelectorAll(".stat-number");
stats.forEach((stat) => {
  const target = parseInt(stat.textContent || "0");
  gsap.fromTo(
    stat,
    {
      textContent: 0,
    },
    {
      duration: 2,
      textContent: target,
      snap: { textContent: 1 }, // Force les valeurs entières
      ease: "power2.out",
    }
  );
});
```

**Concepts clés :**

- `fromTo` : Anime d'une valeur spécifique à une autre
- `snap` : Force des valeurs discrètes
- `textContent` : Anime le contenu texte

## 🎨 Animations Avancées (GSAPShowcase Component)

### 1. SVG Morphing

Transformation fluide de formes SVG

### 2. Système de Particules

Animation de multiples éléments avec propriétés aléatoires

### 3. Motion Path

Mouvement le long d'un chemin SVG

### 4. Parallax Multi-layers

Effet de profondeur avec plusieurs couches

## 🛠 Structure du Code

### Fichiers Principaux

- `src/app/page.tsx` - Page principale avec animations de base
- `src/components/GSAPShowcase.tsx` - Composant d'animations avancées
- `package.json` - Dépendances GSAP

### Plugins GSAP Utilisés

- `ScrollTrigger` - Animations déclenchées par le scroll
- `TextPlugin` - Animation de texte
- `MotionPathPlugin` - Animation le long de chemins

## 🎯 Exercices d'Apprentissage

### Débutant

1. **Modifier les durées** : Changez les `duration` des animations
2. **Tester les easing** : Essayez différents types (`bounce`, `elastic`, etc.)
3. **Ajuster les stagger** : Modifiez les décalages entre éléments

### Intermédiaire

1. **Créer une nouvelle timeline** : Ajoutez une section avec votre propre séquence
2. **Expérimenter ScrollTrigger** : Créez des animations avec `scrub: true`
3. **Ajouter des hover effects** : Utilisez GSAP pour les interactions souris

### Avancé

1. **Créer un système de particules personnalisé**
2. **Implémenter du morphing SVG**
3. **Développer des animations 3D avec CSS transforms**

## 📖 Ressources GSAP

### Documentation Officielle

- [GSAP Docs](https://greensock.com/docs/)
- [ScrollTrigger Docs](https://greensock.com/docs/v3/Plugins/ScrollTrigger)

### Exemples et Inspiration

- [GSAP CodePen Collection](https://codepen.io/collection/nZaXeM)
- [ScrollTrigger Demos](https://greensock.com/st-demos/)

### Easing Reference

- `power1.out` - Décélération douce
- `power2.out` - Décélération moyenne
- `power3.out` - Décélération forte
- `bounce.out` - Effet rebond
- `elastic.out` - Effet élastique

## 🚀 Pour Commencer

1. **Lancez le serveur** : `npm run dev`
2. **Ouvrez** : `http://localhost:3000`
3. **Inspectez le code** : Regardez les animations dans DevTools
4. **Expérimentez** : Modifiez les valeurs et observez les changements

## 💡 Conseils Pro

### Performance

- Utilisez `transform` et `opacity` pour des animations fluides
- Évitez d'animer `width`, `height`, `left`, `top`
- Préférez `scale`, `translateX`, `translateY`, `rotate`

### UX/UI

- Les animations doivent servir l'expérience utilisateur
- Durées recommandées : 0.3s à 0.8s pour les micro-interactions
- Utilisez `prefers-reduced-motion` pour l'accessibilité

### Debugging

- Utilisez `GSDevTools` pour contrôler les animations
- `ScrollTrigger.refresh()` après des changements DOM
- `console.log()` dans les callbacks pour débugger

## 🌟 Animation du Logo Cloud Banner

### Concept

Le logo cloud banner est une animation continue où les logos défilent horizontalement dans des directions opposées, créant un effet visuel attrayant.

### Code d'animation

```javascript
// Animation du logo cloud banner
function animateLogoBanner() {
  // Première rangée : défile vers la droite
  gsap.to(".logo-row-1", {
    x: "-50%",
    duration: 20,
    ease: "none",
    repeat: -1,
  });

  // Deuxième rangée : défile vers la gauche
  gsap.to(".logo-row-2", {
    x: "50%",
    duration: 25,
    ease: "none",
    repeat: -1,
  });

  // Animation des logos individuels au hover
  gsap.set(".logo-item", {
    scale: 1,
    filter: "grayscale(100%)",
  });

  // Animation hover sur les logos
  document.querySelectorAll(".logo-item").forEach((logo) => {
    logo.addEventListener("mouseenter", () => {
      gsap.to(logo, {
        scale: 1.1,
        filter: "grayscale(0%)",
        duration: 0.3,
        ease: "power2.out",
      });
    });

    logo.addEventListener("mouseleave", () => {
      gsap.to(logo, {
        scale: 1,
        filter: "grayscale(100%)",
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });
}

// Appeler la fonction
animateLogoBanner();
```

### Explications

1. **Défilement continu** :

   - `x: '-50%'` : déplace l'élément de 50% de sa largeur vers la gauche
   - `ease: 'none'` : mouvement linéaire sans accélération/décélération
   - `repeat: -1` : répète l'animation indéfiniment

2. **Directions opposées** :

   - Première rangée : défile vers la droite (valeur négative)
   - Deuxième rangée : défile vers la gauche (valeur positive)

3. **Effet hover** :
   - `filter: 'grayscale(100%)'` : logos en noir et blanc par défaut
   - `filter: 'grayscale(0%)'` : logos en couleur au survol
   - `scale: 1.1` : légère augmentation de taille

### Variantes d'animation

```javascript
// Version avec pause au hover
gsap.to(".logo-row-1", {
  x: "-50%",
  duration: 20,
  ease: "none",
  repeat: -1,
  paused: false,
  onComplete: () => {
    // Redémarre l'animation
    gsap.set(".logo-row-1", { x: "0%" });
  },
});

// Pause l'animation au hover du container
document
  .querySelector(".logo-cloud-container")
  .addEventListener("mouseenter", () => {
    gsap.to(".logo-row-1, .logo-row-2", { timeScale: 0.2, duration: 0.5 });
  });

document
  .querySelector(".logo-cloud-container")
  .addEventListener("mouseleave", () => {
    gsap.to(".logo-row-1, .logo-row-2", { timeScale: 1, duration: 0.5 });
  });
```

### CSS Support

```css
/* Masque les bords pour un effet fluide */
.logo-cloud-container {
  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
  -webkit-mask: linear-gradient(
    90deg,
    transparent,
    white 20%,
    white 80%,
    transparent
  );
}

/* Style des logos */
.logo-item {
  transition: all 0.3s ease;
  filter: grayscale(100%);
  opacity: 0.7;
}

.logo-item:hover {
  filter: grayscale(0%);
  opacity: 1;
  transform: scale(1.05);
}
```

## 🎉 Défis Bonus

1. **Mode sombre/clair** : Ajoutez un toggle avec transition GSAP
2. **Loading animation** : Créez un loader avec des animations complexes
3. **Page transitions** : Animations entre les pages
4. **Cursor personnalisé** : Curseur animé qui suit la souris
5. **Logo cloud banner** : Animez le banner de logos avec différents effets

Bon apprentissage avec GSAP ! 🚀
