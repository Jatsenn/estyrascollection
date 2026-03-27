# AI Vibe Coding Rules - Estyras Collection (Clothing Shop)

## 1) Product Direction (Non-Negotiable)
- Build a clean, minimal, high-fashion editorial clothing shop.
- Visual personality: white background, black typography, gray accents — no color distractions.
- Pages/sections: Home (Hero, Featured, Categories, About, Testimonials), Shop, Product Detail, Cart, Contact.
- Default language tone: sleek, minimal, confident.

## 2) Visual Rules
- Color tokens only (no random hex in components):
  - `--color-bg`: pure white (`#FFFFFF`) / dark: near-black (`#111111`)
  - `--color-surface`: light gray (`#F5F5F5`) / dark: `#1A1A1A`
  - `--color-surface-dark`: medium gray (`#E0E0E0`) / dark: `#2A2A2A`
  - `--color-text`: near-black (`#111111`) / dark: off-white (`#F0F0F0`)
  - `--color-text-muted`: medium gray (`#757575`) / dark: `#888888`
  - `--color-border`: light gray (`#D9D9D9`) / dark: `#2E2E2E`
  - `--color-accent`: black (`#000000`) / dark: white (`#FFFFFF`) — CTA, highlights, active states
  - `--color-accent-hover`: dark charcoal (`#222222`) / dark: `#E0E0E0`
  - `--color-inverse-bg`: black (`#000000`) / dark: white (`#FFFFFF`) — dark sections
  - `--color-inverse-text`: white (`#FFFFFF`) / dark: black (`#111111`)
- Dark/Light mode:
  - Toggled via `ThemeService` (`core/services/theme.service.ts`).
  - Persisted in `localStorage` under key `estyras-theme`.
  - Respects `prefers-color-scheme` on first visit.
  - Applied via `[data-theme='dark']` on `<html>` element.
  - Toggle button lives in the navbar.
- Typography:
  - Strong bold display heading for hero/section titles.
  - Clean sans-serif body font with high readability.
  - Heading scale consistent (`h1 > h2 > h3`), no arbitrary sizes.
  - Letter-spacing on uppercase labels for fashion editorial feel.
- Spacing system:
  - Use 8px spacing scale only (`8, 16, 24, 32, 40, 48, 64, 80`).
  - Section vertical spacing must be consistent.
- Layout:
  - Max content width container (`1140-1280px`) centered.
  - Use grid for product cards, flex for nav and micro layouts.
  - Desktop first visual parity, then responsive behavior.
- UI behavior:
  - Buttons: one primary black-fill style, one secondary ghost/outline style.
  - Cards: clean border (`--color-border`), no radius or very subtle radius, clean hover (slight shadow or border darken).
  - Animations: short and intentional (`150-250ms`), no heavy effects.
  - No gradients — flat, clean surfaces only.

## 3) Engineering Rules for AI-Assisted Development
- One task = one prompt = one commit.
- Every AI-generated change must pass:
  - `npm run lint`
  - `npm run test` (or targeted tests)
  - local manual responsive check (mobile/tablet/desktop)
- Never accept AI code blindly:
  - Review for duplicated logic.
  - Remove dead code and unused imports.
  - Verify accessibility labels and semantic tags.
- Keep prompts explicit:
  - include goal
  - include constraints
  - include file targets
  - include done criteria
- Add short PR notes for each change:
  - what changed
  - why
  - risk
  - how verified

## 4) Angular Architecture Rules
- Use standalone components.
- Use `OnPush` change detection by default.
- Feature-first organization (not type-first global dumping).
- Keep components dumb/presentational when possible.
- Move business/data logic to services/facades.
- Use typed models/interfaces for all section and product data.
- Use route-level lazy loading for shop, product, and cart pages.
- No direct API calls inside templates/components if avoidable.

## 5) Recommended Folder Structure
```txt
src/
  app/
    core/
      config/
      constants/
      guards/
      interceptors/
      layout/
        navbar/
        footer/
      services/
      utils/
    shared/
      components/
        ui/
          button/
          section-header/
          product-card/
          badge/
      directives/
      pipes/
      models/
      helpers/
    features/
      home/
        pages/
          home-page/
        sections/
          hero/
          featured/
          categories/
          about/
          testimonials/
        data/
          home-content.ts
        home.routes.ts
      shop/
        pages/
          shop-page/
        components/
          product-grid/
          filter-sidebar/
        data/
          products.ts
        shop.routes.ts
      product/
        pages/
          product-detail-page/
        product.routes.ts
      cart/
        pages/
          cart-page/
        cart.routes.ts
      contact/
        pages/
          contact-page/
        contact.routes.ts
    app.routes.ts
    app.config.ts
    app.component.ts
  assets/
    fonts/
    icons/
    images/
      products/
      lookbook/
  styles/
    abstracts/
      _tokens.scss
      _mixins.scss
      _functions.scss
    base/
      _reset.scss
      _typography.scss
      _utilities.scss
    themes/
      _default.scss
    main.scss
  environments/
    environment.ts
    environment.prod.ts
```

## 6) Naming Conventions
- Files: kebab-case (`product-card.component.ts`).
- Classes/Interfaces: PascalCase.
- Variables/functions: camelCase.
- Selector prefix: `app-`.
- Avoid generic names; use domain names (`product-catalog.service.ts`).

## 7) Content/Data Rules
- Keep editable shop data in typed local config first (`features/shop/data`).
- Structure product data with:
  - id, name, price, category, images, sizes, colors, description, stock
- Structure home content by section:
  - hero copy
  - featured products
  - categories
  - about/brand story
  - testimonials
- If backend/CMS is added later, keep same interface contract.

## 8) Responsiveness & Accessibility Rules
- Required breakpoints (minimum):
  - mobile `<= 767px`
  - tablet `768-1023px`
  - desktop `>= 1024px`
- All interactive controls must have visible focus states.
- Contrast must meet WCAG AA (black/white naturally exceeds this).
- Images require meaningful `alt` text (especially product images).
- Nav and section hierarchy must use semantic landmarks (`header`, `main`, `section`, `footer`).

## 9) Performance Rules
- Optimize and compress all product and lookbook images.
- Use lazy loading for below-the-fold media and product images.
- Avoid oversized UI libraries for simple components.
- Track bundle growth; reject large unnecessary deps.

## 10) Git Workflow Rules
- Branch naming:
  - `feat/<area>-<short-desc>`
  - `fix/<area>-<short-desc>`
- Commit style (Conventional Commits):
  - `feat(hero): add hero banner section`
  - `fix(cart): correct item quantity update`
- PR checklist:
  - lint/test pass
  - responsive screenshots
  - accessibility quick check
  - no console errors

## 11) "Do Not" List
- Do not mix theme values directly into component CSS.
- Do not use colors outside the defined token palette.
- Do not add gradients, heavy shadows, or colorful accents — keep it black, white, gray.
- Do not create huge components (>250 lines) without splitting.
- Do not store secrets in frontend code.
- Do not merge AI output without review + verification.

## 12) Definition of Done (Per Task)
- Feature implemented and visually aligned with black/white/gray editorial vibe.
- Code follows folder and naming standards.
- Lint/tests pass.
- Mobile/tablet/desktop validated.
- Accessibility and performance basics checked.
