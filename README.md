# Baseball Stats App

## Prerequisites

- Python 3.x
- Postgres (on Mac, brew install postgresql)
- Node.js
- npm

## Backend Setup

1. Create a virtual environment:

   ```bash
   python3 -m venv venv
   source venv/bin/activate

1. Install requirements:

   ```bash
   pip3 install -r backend/requirements.txt

## Start Services

1. Start DB & backend service:

   ```bash
   brew services start postgresql
   cd backend
   python app.py

1. Start frontend service:

   ```bash
   cd frontend
   npm install
   npm start
