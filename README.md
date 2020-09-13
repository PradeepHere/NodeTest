# NodeTest Application
### Run the app locally

- `npm install` - This will install all dependencies required to run the application as per package.json.
- `npm run dev` - This will start the application and run on port 3000 in development mode
- `npm test` - This will run the unit tests along with the code coverage report

Using http://localhost:3000/api/v1/parse OR http://localhost:3000/api/v2/parse

## Folder Structure

```
src
└───index.ts          # Application entry point
└───routes.ts         # Application routes / endpoints
└───controllers       # Controllers having business logic
└───handlers          # Common logic
└───models            # Request and Response entities
└───tests             # Unit tests

## REST Services

The application exposes a few REST endpoints to parse the request data sent as per requirement

`HTTP` `POST` /api/v1/parse

`HTTP` `POST` /api/v2/parse

## Code coverage report

--------------------------|---------|----------|---------|---------|-------------------
File                      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
--------------------------|---------|----------|---------|---------|-------------------
All files                 |     100 |       50 |     100 |     100 |
 tests                    |     100 |       50 |     100 |     100 |
  BaseTest.ts             |     100 |       50 |     100 |     100 | 21
 tests/parse              |     100 |      100 |     100 |     100 |
  parseController.spec.ts |     100 |      100 |     100 |     100 |
--------------------------|---------|----------|---------|---------|-------------------