## User Routes DOcumentation

_Please, refer to auth.md. It works only if a user is authenticated_

_base route = `/user`_

#### `GET /user`

- **Description** Retrieves all the users registered in the database
- **Method** GET
- **URL** `/user`
- **Response:**

  - `200 OK`: Returns all the users in the database if only you it is requested by a superuser (administrator)
  - `401 Unauthorized`: If the user is not authenticated, OR is authenticated but not a super user.

## `GET /user/:username`

- **Description** Retrieve a single user with the provided username from search parameters
- **Method** GET
- **URL** `/user/:username`
- **Response:**

  - `200 OK`: Returns a user data if he is authenticated. This is how I solved users intercepting others account even if they provide the correct username. _P.S, refer to `/auth/whoami` in Auth.md_
  - `401 Unauthorized`: If the user is not authenticated, OR is authnticated but not a super user
  - `301 REDIRECT`: If the user is authentiated but d but doesn't pass the correct username, they get redirected to the correct username route`

  ## `GET /user/:username/profile`

- **Description** Retrieve the profile information for a single user with the provided username from search parameters
- **Method** GET
- **URL** `/user/:username/profile`
- **Response:**

  - `200 OK`: Returns a user data if he is authenticated. _P.S, refer to `/auth/whoami` in Auth.md_
  - `401 Unauthorized`: If the user is not authenticated, OR is authnticated but not a super user
  - `301 REDIRECT`: If the user is authentiated but d but doesn't pass the correct username, they get redirected to the correct username route`

## `PATCH /user/:username`

- **Description** Update a user's information with data sent from `body`
- **Method** PATCH
- **URL** `/user/:username`
- **Response:**

  - `200 OK`: Returns the updated user object
  - `401 Unauthorized`: If the user is not authenticated.


## `DELETE /user/:username`

- **Description** Remove a user from the database
- **Method** DELETE
- **URL** `/user/:username`
- **Response:**

  - `200 OK`: Returns the updated user object
  - `401 Unauthorized`: If the user is not authenticated.
