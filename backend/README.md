# Backend API

FastAPI service for analyzing the SEO and basic performance of a single public webpage.

## Overview

The backend accepts a URL, fetches the target page, parses the HTML, runs a set of SEO and performance analyzers, and returns a structured audit report.

## Tech Stack

- Python 3
- FastAPI
- BeautifulSoup
- httpx
- Pydantic

## Project Structure

```text
app/
  analyzers/
  routers/
  schemas/
  services/
main.py
requirements.txt
```

## Setup

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## Run the Server

```bash
cd backend
source .venv/bin/activate
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at `http://127.0.0.1:8000`.

## API Endpoints

### POST /audit

Analyzes a target URL.

Request body:

```json
{
  "url": "https://example.com"
}
```

Successful response:

```json
{
  "success": true,
  "data": {
    "url": "https://example.com",
    "issues": []
  }
}
```

Error responses:

- `400` if the URL is invalid or inaccessible
- `500` for unexpected server-side errors

## Notes

The audit engine currently runs a suite of analyzers covering:

- page title and meta description
- headings and image checks
- canonical, robots, Open Graph, and Twitter tags
- structured data and link analysis
- accessibility basics
- performance metrics
