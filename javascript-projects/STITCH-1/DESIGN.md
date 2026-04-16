```markdown
# Design System Strategy: Urban Editorial

## 1. Overview & Creative North Star: "The Artisanal Archive"
This design system moves away from the sterile, cookie-cutter layouts of modern tech and toward a "High-End Editorial" experience. The North Star is **The Artisanal Archive**: a visual language that feels as curated as a Smithfield pour-over and as structural as the neighborhood’s industrial heritage.

The system breaks the "template" look through **intentional asymmetry** and **tonal layering**. We treat the digital screen not as a flat grid, but as a series of tactile, stacked materials. By utilizing oversized serif typography against a backdrop of warm, textured creams and deep espresso tones, we create a space that feels both "Industrial-Chic" and "Cozy Neighborhood Spot."

---

## 2. Colors & Surface Philosophy
Our palette is rooted in the organic process of coffee roasting and the urban greenery of Dublin’s Northside.

*   **Primary (`#271310`) & Primary Container (`#3e2723`):** These represent the "Deep Coffee" core. Use these for high-impact moments and primary CTAs.
*   **Secondary (`#556349`):** Our "Muted Forest Green." This is used to signify growth, freshness, and the "neighborhood" aspect.
*   **Tertiary (`#340900`):** The "Terracotta" accent, used sparingly for warmth and urgent interactive elements.
*   **The Neutrals (`#fcf9f4` to `#dcdad5`):** A sophisticated range of creams (Surface to Surface Dim) that avoid the clinical feel of pure white.

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders to define sections. Layout boundaries must be achieved solely through background color shifts. For example, a `surface-container-low` section should sit directly against a `surface` background to create a "silent" division.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine paper. 
*   **Base:** `surface` (#fcf9f4).
*   **Secondary Layer:** `surface-container-low` (#f6f3ee).
*   **Elevated Components:** `surface-container-lowest` (#ffffff) for cards to create a subtle "pop" against the cream background.

### The "Glass & Signature Texture" Rule
To add "soul," use **Glassmorphism** for floating navigation bars or overlays. Use `surface` colors at 80% opacity with a `20px` backdrop-blur. Apply subtle linear gradients (e.g., `primary` to `primary-container`) on hero buttons to provide a polished, metallic depth reminiscent of high-end espresso machinery.

---

## 3. Typography: The Editorial Contrast
We pair a high-contrast serif with a functional, geometric sans-serif to bridge the gap between "Industrial" and "Cozy."

*   **Display & Headlines (Newsreader):** This stylish serif is our "Signature." It should be used with generous leading and occasional intentional overlapping with images to create an editorial, magazine-like feel.
    *   *Display-LG (3.5rem):* Reserved for hero titles and evocative brand statements.
*   **Titles & Body (Manrope):** Our "Clean Sans-Serif." It provides the industrial, functional counter-balance. Manrope’s modern geometry ensures high readability for menus and long-form neighborhood stories.
    *   *Body-LG (1rem):* The standard for menu descriptions and blog content.
    *   *Label-MD (0.75rem):* Used for metadata, tags, and "Industrial" technical details (e.g., bean origin, roast date).

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "software-like" for this brand. We use **Tonal Layering** to convey importance.

*   **The Layering Principle:** Instead of a shadow, place a `surface-container-highest` (#e5e2dd) element inside a `surface` (#fcf9f4) container. The change in "warmth" creates the necessary focal point.
*   **Ambient Shadows:** If a floating element (like a mobile FAB or a modal) requires a shadow, use a `12%` opacity version of the `primary` color with a `48px` blur and `12px` Y-offset. This mimics natural light filtered through a cafe window.
*   **The "Ghost Border" Fallback:** If accessibility requires a stroke, use the `outline-variant` (#d3c3c0) at **15% opacity**. This creates a "suggestion" of a border rather than a hard line.

---

## 5. Components & Interface Elements

### Buttons
*   **Primary:** `primary` background with `on-primary` text. Use `lg` (0.5rem) roundedness. No borders.
*   **Secondary:** `secondary-container` background with `on-secondary-container` text.
*   **Tertiary:** Text-only with a `3px` underline using the `tertiary-fixed-dim` color, offset by `0.35rem` (Spacing 1).

### Cards & Lists
*   **Anti-Divider Policy:** Forbid the use of horizontal rules (`<hr>`). Separate list items using the **Spacing Scale** (specifically `spacing-5` or `spacing-8`) or by alternating background tones between `surface-container-low` and `surface-container-high`.
*   **Image Treatments:** Images in cards should use the `md` (0.375rem) corner radius to feel integrated into the "soft industrial" aesthetic.

### Input Fields
*   **State:** Use `surface-container-highest` for the field background.
*   **Focus:** Do not use a blue ring. Transition the background to `primary-container` and use a subtle `primary` underline (2px).

### Specialty Component: The "Menu Grid"
Instead of a standard list, use an asymmetrical grid for the coffee menu. Mix large imagery with `display-sm` typography and `label-md` technical specs to mimic a printed lifestyle magazine.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical margins. A hero image might be flush to the right edge, while the text is indented significantly from the left (`spacing-16`).
*   **Do** use the Spacing Scale religiously. Consistent gaps of `spacing-12` (4rem) between sections create the "premium breathing room" required for a high-end brand.
*   **Do** use `on-surface-variant` (#504442) for secondary text to maintain a warm, low-contrast "coffee-stained" aesthetic.

### Don’t:
*   **Don't** use 100% black (#000000). Always use `primary` (#271310) for the deepest tones.
*   **Don't** use standard `0.25rem` (Default) roundedness for everything. Mix `none` for structural containers and `full` for interactive chips to create visual tension.
*   **Don't** crowd the interface. If a screen feels full, increase the spacing to the next tier in the scale. High-end design is defined by what you *don't* include.

---

**Director's Final Note:** This system is not about efficiency alone; it is about *atmosphere*. Every pixel should feel like it was placed by a craftsman, not a layout engine. Keep it warm, keep it structured, and never, ever use a 1px solid grey line.```