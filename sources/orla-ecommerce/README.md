# Orla.co — Luxury Modest Fashion E-Commerce

<div align="center">

![Orla.co Luxury Modest Fashion](screenshots/00-hero-banner.jpg)

**An editorial, minimalist e-commerce digital storefront and administrative management portal for modern modest women's apparel.**

[![Next.js](https://img.shields.io/badge/Next.js-15.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-6.3-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)
[![Vitest](https://img.shields.io/badge/Vitest-89%20Passed-6E9F18?style=for-the-badge&logo=vitest)](https://vitest.dev/)

[Features](#-key-features) • [Visual Tour](#-visual-tour) • [Architecture](#-architecture--system-design) • [Domain Model](#-domain-model--ubiquitous-language) • [Getting Started](#-getting-started) • [ADR Index](#-architecture-decision-records-adrs)

</div>

---

## 📖 Overview

**Orla.co** is a boutique digital fashion platform tailored for modern Indonesian women seeking modest, versatile, and elegant everyday apparel. Built with **Next.js 15 (App Router)**, **TypeScript**, **Prisma ORM**, and **Tailwind CSS**, the platform bridges high-fashion editorial aesthetics with robust Indonesian commerce workflows (BCA Bank Transfer, QRIS payments, interactive Leaflet delivery pin picking, and real-time Biteship courier logistics).

### Core Highlights

- 🎨 **Editorial Visual Identity**: EB Garamond serif display typography, Hanken Grotesk sans body, soft warm neutrals (`#FDFCFB`, `#FCF9F8`, `#8E8378`, `#E8E1D6`, `#EBCACA`), 12px rounded cards, and ambient micro-animations.
- ⚡ **Two-Step Order-First Checkout Flow**: Decoupled order placement and payment proof submission ensuring atomic inventory reservation, zero stock race conditions, and locked subtotal & shipping calculations.
- 🚚 **Biteship Logistics Aggregator**: Live multi-courier rate estimation (JNE, SiCepat, J&T, AnterAja, GoSend/Grab), coordinate-based instant delivery, automated pickup booking, airway bill (AWB) generation, and real-time delivery status webhooks.
- 🔐 **Passwordless Customer Auth & Isolated Admin RBAC**: 6-digit numeric email OTP customer accounts paired with isolated bcrypt-authenticated Admin management portal guarded by Next.js middleware.
- 📦 **Atomic Inventory Lifecycle**: Automated stock lock on `PENDING`, payment proof verification on `PAID`, courier dispatch on `SHIPPED`, and automatic stock restoration upon order cancellation.

---

## ✨ Key Features

### 🛍️ Customer Experience
- **Editorial Homepage**: Hero carousel, category filtering, search, and responsive curated collection grids.
- **Dynamic Product Detail Page (PDP)**: Primary image gallery, color swatch sync, size selector, and collapsible fabric composition / care instructions.
- **Client-First Shopping Bag**: Zustand cart with `localStorage` persistence and live stock inventory validation at checkout.
- **Interactive Delivery Pin Picker**: Leaflet map modal with reverse geocoding and real-time Biteship courier rate calculations.
- **Two-Step Dedicated Payment View**: 24-hour payment deadline countdown, one-click copy BCA account numbers, dynamic QRIS code display, and receipt dropzone.
- **Customer Account Dashboard**: Passwordless email OTP profile, order timeline tracker, and live shipment tracking links.

### 🛡️ Administrative Operations
- **Shopify-Inspired Admin Portal**: Secure dashboard at `/admin/login` guarded by isolated `orla_admin_session` cookie.
- **Product Catalog Management**: Product mutation domain module with multi-color image assignments, variant matrices, and category management.
- **Order Fulfillment & Logistics Dispatch**: Review customer transfer/QRIS receipts, update fulfillment statuses, trigger Biteship automated courier pickup, and generate Airway Bill (AWB) numbers.
- **Automated Delivery Webhooks**: Signature-verified Biteship webhook handler for real-time order status advancement (`PROCESSING` -> `SHIPPED` -> `COMPLETED`).

---

## 🖼️ Visual Tour

Here is a visual walk-through of the core application views captured from the live platform:

### 1. Editorial Storefront
*Hero carousel, serene typography, category filters, and curated apparel collections.*
![Orla.co Storefront](screenshots/01-storefront.png)

---

### 2. Product Detail Page (PDP)
*High-fashion imagery, dynamic color swatch synchronization, size selection, and fabric specs.*
![Orla.co Product Detail](screenshots/02-product-detail.png)

---

### 3. Interactive Checkout & Delivery Rate Calculator
*Customer shipping address form, Leaflet delivery pin picker, and real-time Biteship multi-courier pricing.*
![Orla.co Checkout Flow](screenshots/03-checkout-flow.png)

---

### 4. Two-Step Dedicated Payment Page
*24-hour payment deadline countdown, locked BCA bank details, QRIS scan display, and receipt dropzone.*
![Orla.co Two-Step Payment](screenshots/04-two-step-payment.png)

---

### 5. Customer Account Dashboard
*Passwordless OTP profile, customer details, active orders timeline, and live courier tracking badges.*
![Orla.co Customer Account](screenshots/05-customer-account.png)

---

### 6. Admin Management Portal
*Comprehensive order fulfillment dashboard, receipt verification, and Biteship automated courier dispatch.*
![Orla.co Admin Portal](screenshots/06-admin-portal.png)

---

## 🏛️ Architecture & System Design

Orla.co is architected around **Domain-Driven Design (DDD)** principles, strict **Client/Server Seams**, and decoupled transactional boundaries.

### 1. System & Infrastructure Architecture

![System & Infrastructure Architecture](diagrams/01-system-architecture.png)

<details>
<summary>🔍 <i>View Mermaid Source Code</i></summary>

```mermaid
flowchart TB
    subgraph ClientLayer ["Client Storefront Layer (Browser)"]
        Storefront["<b>Storefront UI & PDP</b><br/>Next.js 15 App Router / React 19"]
        CartStore["<b>Zustand Cart Store</b><br/>localStorage: orla_cart_storage"]
        LeafletPicker["<b>Leaflet Map Pin Picker</b><br/>Coordinate Geocoding Modal"]
    end

    subgraph EdgeLayer ["Edge & Routing Guard (Middleware)"]
        NextProxy["<b>Next.js Middleware</b><br/>Route Matcher & Guard"]
        AdminAuthCheck{"<b>Admin Session?</b><br/>orla_admin_session"}
        CustomerAuthCheck{"<b>Customer Session?</b><br/>orla_session"}
    end

    subgraph ServerLayer ["Server App Router Backend (Node.js)"]
        RouteHandlers["<b>API Route Handlers</b><br/>/api/* & /api/admin/*"]
        OrderLifecycle["<b>OrderLifecycle Domain</b><br/>Atomic Stock Reservation"]
        CatalogDomain["<b>Product Catalog</b><br/>Reader & Mutation Domain"]
        AuthService["<b>Auth & OTP Service</b><br/>Passwordless Customer / Admin"]
        StorageService["<b>Storage Service</b><br/>Local Disk / Cloud Storage"]
        BiteshipAggregator["<b>Biteship Logistics Client</b><br/>Rates, Booking, Tracking"]
    end

    subgraph ExternalLayer ["Persistence & External Gateways"]
        PrismaORM["<b>Prisma ORM Client</b><br/>Binary Query Engine"]
        Database[("<b>Database Engine</b><br/>PostgreSQL / SQLite")]
        BiteshipAPI["<b>Biteship REST API</b><br/>Multi-Courier Logistics Gateway"]
        WebhookTrigger["<b>Biteship Webhooks</b><br/>Status Advancement Trigger"]
    end

    %% Flow connections
    Storefront --> NextProxy
    CartStore --> RouteHandlers
    LeafletPicker --> RouteHandlers

    NextProxy --> AdminAuthCheck
    NextProxy --> CustomerAuthCheck
    AdminAuthCheck --> RouteHandlers
    CustomerAuthCheck --> RouteHandlers

    RouteHandlers --> OrderLifecycle
    RouteHandlers --> CatalogDomain
    RouteHandlers --> AuthService
    RouteHandlers --> StorageService
    RouteHandlers --> BiteshipAggregator

    OrderLifecycle --> PrismaORM
    CatalogDomain --> PrismaORM
    AuthService --> PrismaORM
    PrismaORM --> Database

    BiteshipAggregator --> BiteshipAPI
    WebhookTrigger --> OrderLifecycle
```

</details>

---

### 2. Two-Step Checkout & Stock Reservation Lifecycle (State Machine)

The order lifecycle guarantees transactional stock reservation at order creation, preventing out-of-stock race conditions while customers execute bank transfers or QRIS scans.

![Two-Step Checkout & Stock Reservation Lifecycle](diagrams/02-checkout-lifecycle.png)

<details>
<summary>🔍 <i>View Mermaid Source Code</i></summary>

```mermaid
flowchart TD
    Start([<b>Customer Browses Storefront</b>]) --> AddToCart["<b>1. Add Product Variants to Cart</b><br/>Zustand client store sync"]
    AddToCart --> CheckoutPage["<b>2. Proceed to /checkout</b><br/>Enter shipping details & map pin"]
    CheckoutPage --> FetchRates["<b>3. Fetch Live Biteship Courier Rates</b><br/>JNE, SiCepat, J&T, Instant Couriers"]
    FetchRates --> SubmitOrder["<b>4. Submit Order</b><br/>Lock subtotal, shipping cost & postal address"]

    SubmitOrder --> PendingOrder["<b>ORDER CREATED (Status: PENDING)</b><br/>• Atomic database transaction decrements inventory stock<br/>• 24-Hour payment deadline countdown begins<br/>• Client shopping cart automatically cleared"]

    PendingOrder --> PaymentAction["<b>5. Customer Navigates to Payment Page</b><br/>/checkout/payment/[orderNumber]"]

    PaymentAction --> PaymentChoice{"<b>Payment Method</b>"}
    PaymentChoice -- "BCA Bank Transfer" --> BCAPay["<b>Copy BCA Account Number</b><br/>Locked unique invoice amount"]
    PaymentChoice -- "Dynamic QRIS" --> QRISPay["<b>Scan QRIS Code</b><br/>Compatible with all Indonesian e-wallets"]

    BCAPay & QRISPay --> UploadProof["<b>6. Upload Payment Proof Receipt</b><br/>Store receipt image via StorageService"]

    UploadProof --> PaidStatus["<b>ORDER STATUS: PAID</b><br/>Awaiting administrator verification"]

    PendingOrder -- "24-Hour Timeout / Customer Cancel" --> CancelledPending["<b>ORDER STATUS: CANCELLED</b><br/>• Automatic stock restoration to inventory"]

    PaidStatus --> AdminReview{"<b>Admin Review Receipt</b><br/>/admin/orders dashboard"}
    AdminReview -- "Receipt Verified" --> ProcessingStatus["<b>ORDER STATUS: PROCESSING</b><br/>Payment confirmed by store admin"]
    AdminReview -- "Invalid / Fake Receipt" --> CancelledPaid["<b>ORDER STATUS: CANCELLED</b><br/>• Automatic stock restoration to inventory"]

    ProcessingStatus --> CourierPickup["<b>7. Admin Books Biteship Courier Pickup</b><br/>Generate courier Airway Bill (AWB / Resi)"]

    CourierPickup --> ShippedStatus["<b>ORDER STATUS: SHIPPED</b><br/>Courier dispatched; tracking active"]

    ShippedStatus --> WebhookDelivery["<b>8. Biteship Webhook Trigger</b><br/>Package delivered to customer destination"]

    WebhookDelivery --> CompletedStatus["<b>ORDER STATUS: COMPLETED</b><br/>Order lifecycle successfully finished"]

    CompletedStatus --> EndSuccess([<b>Lifecycle Complete</b>])
    CancelledPending & CancelledPaid --> EndCancelled([<b>Order Terminated</b>])
```

</details>

---

### 3. Security & Client/Server Seam Boundaries

To prevent hydration issues, bundle bloat, and accidental leaks of Node-native packages (`sharp`, `crypto`, `fs`), Orla.co enforces a strict **Seam Pattern**:

![Security & Client/Server Seam Boundaries](diagrams/03-seam-boundaries.png)

<details>
<summary>🔍 <i>View Mermaid Source Code</i></summary>

```mermaid
flowchart LR
    subgraph ClientSafeZone ["Client-Safe Zone (use client)"]
        UIComponents["<b>UI Components Layer</b><br/>ProductCard, CartDrawer, Forms, Modals"]
        ClientUtils["<b>Client Utility Modules</b><br/>*-utils.ts (e.g. product-catalog-utils.ts)"]
        ZustandStore["<b>Zustand Stores & State</b><br/>useCartStore, UI state, localStorage"]
        UIComponents --> ClientUtils
        UIComponents --> ZustandStore
    end

    subgraph BoundarySeam ["Module Seam Boundary"]
        APIRoutes["<b>Next.js Route Handlers</b><br/>/api/* HTTP JSON REST Endpoints"]
        JSONSerialize["<b>JSON Serialization Seam</b><br/>Decoupled network transport boundary"]
        APIRoutes --- JSONSerialize
    end

    subgraph ServerOnlyZone ["Server-Only Zone (Node.js Runtime)"]
        DomainModules["<b>Domain Logic & Services</b><br/>OrderDomain, ProductDomain, StorageService"]
        NativeLibs["<b>Node Native Packages</b><br/>sharp (image WebP), crypto, fs, child_process"]
        PrismaClient["<b>Prisma ORM Client Instance</b><br/>Binary database engine queries"]
        EnvSecrets["<b>Environment Secrets & Keys</b><br/>JWT_SECRET, BITESHIP_API_KEY, DB credentials"]
        DomainModules --> NativeLibs
        DomainModules --> PrismaClient
        DomainModules --> EnvSecrets
    end

    UIComponents ==>|HTTP JSON Fetch| APIRoutes
    JSONSerialize ==>|Server-Only Calls| DomainModules
```

</details>

---

## 📖 Domain Model & Ubiquitous Language

| Term | Domain Definition | Avoid |
| :--- | :--- | :--- |
| **Product** | A fashion item listed for sale on the store, available in specific colors and sizes. | *Item, merchandise, article* |
| **Variant** | A specific combination of color and size for a Product, with its own stock count. | *Sub-product, SKU option* |
| **Customer** | A shopper who browses, orders, and manages account details using passwordless OTP. | *User, buyer, account holder* |
| **OTP** | A temporary 6-digit numeric code sent via email to authenticate a Customer without a password. | *Passcode, magic link, pin* |
| **Order** | A customer's purchase request detailing selected items, shipping address, and fulfillment status. | *Transaction, checkout record* |
| **Payment Proof** | An image receipt uploaded by a Customer as evidence of manual bank transfer or QRIS payment. | *Transfer receipt, pay slip* |
| **Admin** | An authorized store manager who authenticates via password to manage catalog, stock, and orders. | *Superuser, operator* |
| **Two-Step Checkout** | Decoupled flow: (1) Order creation + stock lock, (2) Dedicated 24h payment and proof upload. | *Single-page transfer, blind transfer* |
| **Shipment Aggregator**| Biteship logistics service providing multi-courier rates, pickup booking, and delivery webhooks. | *Shipping vendor, delivery broker* |
| **Airway Bill (AWB)** | The customer-facing courier tracking number (Nomor Resi / `waybill_id`) assigned upon dispatch. | *Waybill number, tracking code* |

---

## 🛠️ Tech Stack & Tooling

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [Next.js 15.2](https://nextjs.org/) (App Router) | Server-Side Rendering, Server Components, Route Handlers |
| **Language** | [TypeScript 5.7](https://www.typescriptlang.org/) | Strict static typing and compile-time verification |
| **Styling** | [Tailwind CSS 4.3](https://tailwindcss.com/) | Bespoke luxury tokens, warm neutral palettes, responsive design |
| **Typography** | [EB Garamond](https://fonts.google.com/specimen/EB+Garamond) + [Hanken Grotesk](https://fonts.google.com/specimen/Hanken+Grotesk) | Editorial headlines and modern legible UI typography |
| **Database & ORM**| [Prisma 6.3](https://www.prisma.io/) + SQLite / PostgreSQL | Type-safe schema, relational queries, database migrations |
| **State Management**| [Zustand 5.0](https://zustand-demo.pmnd.rs/) | Lightweight persistent cart store with `localStorage` sync |
| **Mapping & Geospatial**| [Leaflet 1.9](https://leafletjs.com/) + [React-Leaflet 5.0](https://react-leaflet.js.org/) | Interactive delivery destination pin picker |
| **Logistics API** | [Biteship API](https://biteship.com/) | Real-time multi-courier rates, automated pickup, and tracking |
| **Image Processing**| [Sharp 0.35](https://sharp.pixelplumbing.com/) | High-performance WebP image resizing and cropping |
| **Authentication**| JSON Web Tokens (JWT) + bcryptjs | Passwordless 6-digit OTP & isolated Admin session cookie |
| **Testing** | [Vitest 4.1](https://vitest.dev/) | High-speed unit, integration, and API testing (89 tests) |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v20.x` or higher
- **Package Manager**: `npm` (v10+)
- **OS**: Windows, macOS, or Linux

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/rizkiwijanarko/Orlaa.co.git
cd Orlaa.co
npm install
```

### 2. Environment Configuration

Copy `.env.example` to `.env` and set your PostgreSQL connection string:

```env
# Database Connection (PostgreSQL)
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/orlaa_db?schema=public"

# JWT Secret for Session Cookies
JWT_SECRET="your-super-secret-jwt-key"

# Biteship Logistics Integration
BITESHIP_TEST_API_KEY="your-biteship-test-api-key"
BITESHIP_ORIGIN_LOCATION_ID="your-origin-location-id"
BITESHIP_WEBHOOK_KEY="X-Biteship-Signature"
BITESHIP_WEBHOOK_SECRET="your-webhook-secret-key"
```

### 3. Database Setup & Migration

Push the Prisma schema to your PostgreSQL database and either migrate your existing SQLite data or seed a fresh catalog:

```bash
# Push Prisma schema to your PostgreSQL database
npm run prisma:db-push

# Option A: Migrate all existing SQLite data (categories, products, orders, customers)
npm run db:migrate-to-postgres

# Option B: Or seed fresh catalog products and default admin account
npx prisma db seed
```

> **Default Admin Credentials**:
> - Email: `admin@orla.co`
> - Password: `adminpassword123`

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the storefront.  
Open [http://localhost:3000/admin/login](http://localhost:3000/admin/login) to access the administrative portal.

---

## 🧪 Verification & Testing

Orla.co maintains an automated testing suite asserting API contracts, state mutations, and domain business rules:

```bash
# Run Vitest test suite (sequential SQLite test execution)
npm test

# Run TypeScript static type check
npx tsc --noEmit

# Run Next.js linter
npm run lint
```

### Test Suite Summary
- **12 Test Files** / **89 Tests**: 100% passing
- Covers: Biteship rate calculations & tracking, Two-Step Checkout stock reservation, Customer Email OTP auth, Admin RBAC middleware, and Storage abstractions.

---

## 📁 Project Directory Structure

```
.
├── app/                           # Next.js App Router Pages & APIs
│   ├── account/                   # Customer dashboard & order history
│   ├── admin/                     # Admin portal (/admin/dashboard, /admin/orders, /admin/products)
│   ├── api/                       # Public & Admin API Route Handlers
│   │   ├── admin/                 # Protected admin API routes (/orders, /products, /pickup)
│   │   ├── auth/                  # Customer OTP & Admin authentication endpoints
│   │   ├── checkout/              # Two-step order placement & payment proof upload
│   │   ├── shipping/              # Biteship rate estimation & live tracking proxy
│   │   └── webhooks/              # Biteship courier delivery status webhooks
│   ├── checkout/                  # Two-step checkout & /checkout/payment/[orderNumber]
│   ├── product/[slug]/            # Dynamic product detail page (PDP)
│   ├── shop/                      # Catalog browsing & category filters
│   ├── globals.css                # Tailwind CSS design system tokens
│   ├── layout.tsx                 # Root layout with navbar & cart drawer
│   └── page.tsx                   # Editorial storefront homepage
├── components/                    # Reusable Client & Server Components
│   ├── admin/                     # Admin sidebar, order tables, product editors
│   ├── cart-drawer.tsx            # Slide-out Zustand shopping bag
│   ├── delivery-pin-picker.tsx    # Leaflet interactive map modal
│   ├── navbar.tsx                 # Responsive header navigation
│   └── product-card.tsx           # Luxury product card with hover swap
├── docs/                          # Project Documentation & Architecture
│   ├── adr/                       # 10 Architecture Decision Records (ADRs)
│   ├── assets/screenshots/        # High-resolution UI captures & mockups
│   └── spec.md                    # Core MVP functional specification
├── lib/                           # Domain Services & Business Logic
│   ├── auth.ts                    # JWT signing, OTP verification, cookie utilities
│   ├── biteship.ts                # Biteship API client & rate calculators
│   ├── order-domain.ts            # OrderLifecycle state machine & stock reservation
│   ├── product-catalog.ts         # ProductCatalogReader & ProductCatalogEditor
│   ├── storage.ts                 # Abstracted StorageService (Local/Cloud)
│   └── store/cart.ts              # Zustand cart state with localStorage persistence
├── prisma/                        # Database Schema & Seeders
│   ├── schema.prisma              # Data models (Customer, Product, Order, Admin)
│   └── seed.ts                    # Initial data seeder
├── scripts/                       # Automation & Screenshot Capture Scripts
│   └── capture-screenshots.js     # Puppeteer screenshot capture script
└── tests/                         # Vitest Integration & Unit Tests
```

---

## 📑 Architecture Decision Records (ADRs)

Key architectural decisions are documented in [`docs/adr/`](docs/adr/):

| ADR | Title | Decision Summary |
| :--- | :--- | :--- |
| [ADR-0001](docs/adr/0001-nextjs-postgres-tech-stack.md) | Next.js 15 & Prisma Stack | App Router with TypeScript and Prisma ORM for type-safe full-stack cohesion. |
| [ADR-0002](docs/adr/0002-passwordless-otp-auth.md) | Passwordless Email OTP Auth | 6-digit numeric passcodes eliminating password friction for shoppers. |
| [ADR-0003](docs/adr/0003-abstracted-local-file-storage.md) | Abstracted Storage Service | Pluggable interface isolating disk storage from future cloud S3 migration. |
| [ADR-0004](docs/adr/0004-admin-rbac-and-session-isolation.md) | Admin RBAC & Session Isolation | Isolated `orla_admin_session` cookie guarding all `/admin/*` routes. |
| [ADR-0005](docs/adr/0005-client-first-cart-persistence.md) | Client-First Cart Persistence | Zustand `localStorage` persistence with live stock validation at checkout. |
| [ADR-0006](docs/adr/0006-inventory-stock-reservation-lifecycle.md) | Inventory Stock Reservation | Immediate stock lock on `PENDING` order creation; auto-restock on cancellation. |
| [ADR-0007](docs/adr/0007-qris-and-manual-bank-transfer.md) | QRIS & BCA Bank Transfer | Dual payment methods tailored for Indonesian banking and e-wallet apps. |
| [ADR-0008](docs/adr/0008-order-history-and-admin-operations.md) | Order History & Admin Operations | Real-time order timeline tracking and admin status management. |
| [ADR-0009](docs/adr/0009-biteship-shipment-aggregator-integration.md) | Biteship Shipment Aggregator | Dynamic multi-courier rates, destination pin lookup, and automated pickup. |
| [ADR-0010](docs/adr/0010-two-step-order-first-checkout-flow.md) | Two-Step Order-First Checkout Flow | Decoupled order placement from receipt upload to eliminate financial/stock races. |

---

## 📄 License & Attribution

Distributed under the MIT License. Built with ❤️ for modest luxury fashion.  
Copyright © 2026 **Orla.co**. All rights reserved.
