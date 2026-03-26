# Design System Document

## 1. Overview & Creative North Star
**Creative North Star: The Lucid Educator**
This design system is built to transform the often-daunting process of language acquisition into a high-end, editorial experience. We move away from the "utility-only" look of standard educational apps and embrace a "Lucid" aesthetic—characterized by airy layouts, sophisticated tonal depth, and intentional breathing room. 

The system breaks the rigid "app-grid" template through **asymmetric content pacing** and **layered elevation**. By treating the UI as a series of premium editorial surfaces rather than flat digital boxes, we create a calm, focused environment that reduces cognitive load and elevates the user's journey.

---

## 2. Colors
Our palette balances a high-energy "Electric Orchid" with "Warm Bone" neutrals to create a workspace that feels both vibrant and professional.

### Core Palette
- **Primary (Electric Orchid):** `#a400a4` – Used for key brand moments and progress indicators.
- **Secondary (Deep Royal):** `#6a1cf6` – Reserved for secondary actions and community highlights.
- **Tertiary (Sapling Green):** `#3d6600` – Used for success states and "correct" feedback.
- **Surface (Warm Bone):** `#f7f7f2` – The foundational canvas of the application.

### The "No-Line" Rule
To maintain a high-end editorial feel, **1px solid borders are prohibited** for defining sections. Boundaries must be established through:
- **Background Shifts:** Placing a `surface-container-low` (`#f1f1ec`) section against a `surface` (`#f7f7f2`) background.
- **Tonal Transitions:** Using the hierarchy of surface tiers to suggest structure without "boxing in" the user.

### Signature Textures & Glass
- **The Gloss Factor:** Floating elements (like navigation bars or specialized tooltips) should utilize **Glassmorphism**. Use a semi-transparent version of `surface-container-lowest` (`#ffffff` at 80% opacity) with a `20px` backdrop blur.
- **Signature CTA Gradient:** For critical "Continue" or "Submit" buttons, apply a subtle linear gradient from `primary` (`#a400a4`) to `primary_dim` (`#900090`) at a 135-degree angle to add depth.

---

## 3. Typography
We use a dual-font strategy to balance character with extreme readability.

- **Display & Headlines (Plus Jakarta Sans):** A sophisticated sans-serif with a wide stance. Used for headers to provide a premium, "magazine" feel.
  - *Headline-LG:* 2rem (Bold) - For major screen titles.
- **Titles & Body (Be Vietnam Pro):** A highly legible, modern sans-serif optimized for Vietnamese diacritics and long-form learning content.
  - *Title-MD:* 1.125rem (Medium) - For question prompts and card titles.
  - *Body-LG:* 1rem (Regular) - For primary reading material and user input.

---

## 4. Elevation & Depth
Depth in this system is organic, not artificial. We avoid harsh shadows in favor of **Tonal Layering**.

- **The Layering Principle:** Stack surfaces to create focus. An input field (`surface-container-highest`) sits naturally "inside" a card (`surface-container-lowest`), which sits on a section (`surface-container-low`).
- **Ambient Shadows:** When a card requires a "lift" (e.g., draggable word chips), use a tinted shadow: `rgba(45, 47, 44, 0.06)` with a `16px` blur and `4px` Y-offset. This mimics natural light reflecting off the surface.
- **The "Ghost Border" Fallback:** If a border is required for accessibility (e.g., in high-contrast modes), use the `outline-variant` (`#adada9`) at **15% opacity**.

---

## 5. Components

### Buttons
- **Primary (Action):** Rounded `xl` (1.5rem), using the `primary` fill with `on-primary` text. These must feel "weighted" and significant.
- **Secondary (Social/Ghost):** Use a `surface-container-lowest` fill with a `Ghost Border`. These should feel lighter, allowing the primary action to dominate the visual hierarchy.

### Input Fields
- **Editorial Input:** Large, soft-cornered (`lg`) containers using `surface-container-highest` (`#dcddd7`).
- **States:** On focus, transition the background to `surface-container-lowest` and apply a subtle `primary` tint to the "Ghost Border."

### Progress Bars
- Use a `primary` fill on a `surface-container` background. The bar should have a `full` roundedness and a height of `8px` to feel modern and sleek, never chunky.

### Learning Chips (Draggable Words)
- Soft cards using `surface-container-lowest` with a very soft ambient shadow. Typography should be `primary` to indicate interactability. Forbid dividers; use `spacing-4` (1rem) to let elements breathe.

### Community Cards
- Forbid dividers between header and content. Use a vertical shift in spacing (`spacing-6`) and a shift to `surface-container-low` for the comment section to create a "nested" feel.

---

## 6. Do's and Don'ts

### Do
- **DO** use the full spacing scale to create intentional white space. "If in doubt, add more air."
- **DO** use the `tertiary` (Sapling Green) for positive reinforcement (e.g., the microphone button or correct answers).
- **DO** overlap elements slightly (e.g., a floating speech bubble over an image) to create a layered, custom feel.

### Don't
- **DON'T** use black (`#000000`) for text. Use `on-surface` (`#2d2f2c`) to maintain a soft, premium contrast.
- **DON'T** use sharp corners. Every element must adhere to the `Roundedness Scale` (minimum `sm` for small details, `lg` or `xl` for containers).
- **DON'T** use 100% opaque borders to separate content. Let the color of the surfaces do the work.