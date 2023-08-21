## Auth Routes Documentation

_base route = `/auth`_

#### `GET /auth/whoami`

- **Description:** Retrieve the currently authenticated user's information from the `request` created by an interceptor.
- **Method:** GET
- **URL:** `/auth/whoami`
- **Response:**

  - `200 OK`: Returns the user's information.
  - `401 Unauthorized`: If the user is not authenticated.

- **Use case**
  - Get the currently authenticated user to determine the base route. `http://app` OR `http://app/dashboard`
  - Retrieves the username from the request to be shown on the dashboard

#### `POST /auth/signup`

- **Description:** Create a new user account.
- **Method:** POST
- **URL:** `/auth/signup`
- **Response:**
  - `201 Created`: If the user account is successfully created.
  - `400 Bad Request`: If there are validation errors in the request payload.

#### `POST /auth/signin`

- **Description:** Authenticate and sign in a user.
- **Method:** POST
- **URL:** `/auth/signin`
- **Response:**
  - `200 OK`: If the user is successfully authenticated and signed in.
  - `401 Unauthorized`: If the provided credentials are invalid.
  - `404 Not Found`: If the user account is not found.

#### `POST /auth/signout`

- **Description:** Sign out the authenticated user.
- **Method:** POST
- **URL:** `/auth/signout`
- **Response:**
  - `200 OK`: If the user is successfully signed out.
  - `401 Unauthorized`: If the user is not authenticated.
