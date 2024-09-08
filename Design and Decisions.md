# Design, Decisions, and Tradeoffs

## Design

- Simple 3 layered design
- Frontend (React & Typescript)
  - RESTful API to handle CRUD operations
- Middleware (Python & Flask)
- Backend (Postgres)
- Baseball Public API

## Early Decisions

- All the development and testing done on my MacBook locally: for ease and speed
- Used GitHub from the beginning: Increased confidence due to speed, historic tracking, and ease of reverts
- Iterated through the solution several times
  - UI pull data from public API directly ("e2e walking skeleton" paradigm)
  - Backend service running
  - UI switches to use Backend service
  - Backend service pulls data from API and saves to DB (with rank updated)
  - UI: Edit player functionality
  - UI: ChatGPT based player description

## Tradeoffs

- Deferred some of the best practices
  - Unit Testing
  - Deploying to public cloud
  - Superior UX/UI designs

