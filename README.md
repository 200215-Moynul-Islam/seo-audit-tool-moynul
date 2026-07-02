# SEO Audit Tool

A full-stack application for auditing the SEO fundamentals and basic performance of a single public webpage. The tool fetches a URL, analyzes the HTML, and presents a structured report through a React-based interface.

## Features

- SEO checks for title tags, meta descriptions, headings, images, canonical tags, robots directives, Open Graph/Twitter metadata, structured data, links, and accessibility basics
- Performance checks for page size, response timing, CSS/JS/image counts, and image transfer volume
- FastAPI backend for analysis and a Vite + React frontend for report presentation

## Tech Stack

### Frontend

- React
- Vite
- TypeScript
- Tailwind CSS
- Axios

### Backend

- FastAPI
- Python
- BeautifulSoup
- httpx

## Architecture Overview

1. A user submits a URL in the frontend.
2. The frontend sends a POST request to the backend API.
3. The FastAPI service fetches and parses the page HTML.
4. The audit engine runs a set of analyzers and performance checks.
5. The structured result is returned to the UI and rendered as a report.

## Project Structure

```text
backend/
  app/
    analyzers/
    routers/
    schemas/
    services/
  requirements.txt
frontend/
  src/
    components/
    pages/
    services/
    types/
  package.json
```

## Setup

### Backend

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

### Frontend

```bash
cd frontend
npm install
```

## Run Locally

Start the backend:

```bash
cd backend
source .venv/bin/activate
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

Start the frontend in a separate terminal:

```bash
cd frontend
npm run dev
```

The frontend will use the backend at `http://127.0.0.1:8000` by default.

## API Overview

### POST /audit

Analyzes a single public webpage.

Request body:

```json
{
  "url": "https://example.com"
}
```

Response:

```json
{
  "success": true,
  "data": {
    "url": "https://example.com",
    "issues": []
  }
}
```

Possible error responses:

- `400` for invalid or inaccessible URLs
- `500` for unexpected analysis failures

## Environment Variables

Example frontend environment file:

```env
VITE_API_BASE_URL=http://127.0.0.1:8000
```

Backend currently does not require any environment variables for local development.

## Future Improvements

- Add support for batch URL auditing
- Include richer Lighthouse-style metrics
- Export results as JSON or CSV
- Add historical trend tracking and comparison views
