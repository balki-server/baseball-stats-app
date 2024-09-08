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

2. Install requirements:
   pip3 install -r backend/requirements.txt

## Start Services

1. Start DB & backend service:
   brew services start postgresql
   cd backend
   python app.py

4. Start frontend service:
   cd frontend
   npm install
   npm start
