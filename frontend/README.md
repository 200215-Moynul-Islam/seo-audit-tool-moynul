# Frontend

React + Vite + TypeScript client for the SEO Audit Tool.

## Overview

The frontend provides a simple interface for entering a URL, sending it to the backend API, and displaying the resulting SEO and performance audit report.

## Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Axios

## Project Structure

```text
src/
  components/
    audit/
    layout/
    ui/
  pages/
  services/
  types/
```

## Setup

```bash
cd frontend
npm install
```

## Run the Development Server

```bash
cd frontend
npm run dev
```

The app will be available at `http://localhost:5173` by default.

## Environment

Create a `.env` file if you need to override the backend API URL:

```env
VITE_API_BASE_URL=http://127.0.0.1:8000
```

## Scripts

- `npm run dev` – start the development server
- `npm run build` – build the production bundle
- `npm run preview` – preview the production build
- `npm run lint` – run ESLint
