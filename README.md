# BazarDor (বাজারদর) 🛒

### *Real-Time Market Price Tracking & Commodity Intelligence Platform*

[![Live Demo](https://img.shields.io/badge/Live-Demo-emerald?style=for-the-badge&logo=vercel)](https://bazar-one-jade.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.style=for-the-badge)](https://opensource.org/licenses/MIT)

## 🌐 Live Application

Explore the live production deployment of BazarDor here:
👉 **[https://bazar-one-jade.vercel.app/](https://bazar-one-jade.vercel.app/)**

---

## 📖 Overview

**BazarDor** is a cutting-edge web portal engineered to bring pricing transparency and analytical insights to everyday consumers in Bangladesh. By tracking essential daily commodities—including rice, lentils, edible oils, fresh produce, fish, and meat—the platform empowers users to monitor price fluctuations, compare market trends, and make informed purchasing decisions.

Built with performance, scalability, and localization in mind, the application features server-side rendering, resilient error boundaries, and deep Bengali cultural integration.

## ✨ Key Features

* **Dynamic Price Analytics & Tracking:** Monitor current commodity prices alongside daily/weekly historical shifts, percentage increases/decreases, and statistical trend indicators.

* **Category-Based Filtering & Multi-Level Sorting:** Seamlessly navigate across commodity segments and sort items dynamically by price ranges (Low-to-High, High-to-Low, and Default).

* **Localized Bengali Interface:** Deep support for localized layouts, custom typography (`Noto Sans Bengali`), and dynamic digit formatting (`convertToBanglaNumber`).

* **Robust Authentication Ecosystem:** Secure credential-based sign-in/sign-up flows coupled with social authentication providers (**Google** and **GitHub**) via **Better Auth**.

* **Adaptive Responsive Design:** Built using a mobile-first philosophy, utilizing adaptive DaisyUI drop-down navigation bars and touch-friendly UI components.

* **Resilient State & Loading Architecture:** Graceful Suspense fallback boundaries and custom skeleton loaders preventing prerendering blocking errors.

## 🛠️ Technology Stack

* **Core Framework:** [Next.js](https://nextjs.org/) (App Router, Turbopack)

* **Styling & Design System:** [Tailwind CSS](https://tailwindcss.com/), [DaisyUI](https://daisyui.com/), [HeroUI](https://heroui.com/)

* **Icons & UI Feedback:** `react-icons`, `react-toastify`

* **Authentication Engine:** [Better Auth](https://better-auth.com/)

* **Language/Type System:** TypeScript

## 📂 Architecture & Directory Structure

```
├── src/
│   ├── app/                # Next.js App Router root (Pages, Dynamic Routes, Layouts)
│   │   ├── category/       # Category browsing and product listing views
│   │   ├── profile/        # User-protected profile and session dashboard
│   │   ├── sign-in/        # Authentication login portal
│   │   ├── sign-up/        # New user registration portal
│   │   ├── layout.tsx      # Root server layout with global metadata
│   │   └── page.tsx        # Homepage dashboard container
│   ├── component/          # Modular UI components (NavBar, Marquee, Cards, Skeletons)
│   ├── formatNumber/       # Utility service for Bengali numeral transformations
│   ├── lib/                # Client-side authentication wrappers and helpers
│   └── type/               # Shared TypeScript interfaces and contract types
├── public/                 # Static assets, branding logos, and icons
├── tailwind.config.ts      # Custom Tailwind theme extensions
└── package.json            # Project dependencies and execution scripts
```

## 🚀 Getting Started & Installation

### Prerequisites

Ensure your development environment meets the following requirements:

* **Node.js**: Version 18.x or higher

* **npm**, **yarn**, **pnpm**, or **bun** package manager

### Step-by-Step Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/moniruzzaman-tasrif/hat-bazar.git
   cd bazardor
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory and configure your runtime environment variables:
   ```env
   NEXT_PUBLIC_API_BASE_URL=https://openapi.programming-hero.com/api/bazardor
   BETTER_AUTH_SECRET=your_secure_auth_secret_key
   BETTER_AUTH_URL=http://localhost:3000
   ```

4. **Run the Development Server:**
   ```bash
   npm run dev
   ```

5. **Access the Application:**
   Open [http://localhost:3000](http://localhost:3000) in your web browser to view the running application.

## 🧪 Build & Production Deployment

To build the application for high-performance production hosting:

```bash
# Generate optimized production bundle
npm run build

# Start production server instance
npm run start
```

## 🤝 Contribution Guidelines

Contributions are welcome and appreciated! If you have suggestions for improvement or wish to report a bug, please follow these steps:

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## 📄 License

Distributed under the **MIT License**. See `LICENSE` file for more information.
