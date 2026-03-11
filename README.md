# [Deployment](https://vaultbox-cloud.netlify.app/)


## set up

- `git clone https://github.com/TypeLuis/Vaultbox.git && cd Vaultbox`
- `npm i`
- `npm run initialize` (Sudo on Linux)
- `npm run dev` (Sudo on Mac && Linux)



## WORKSPACES
{
  "private": true,
  "workspaces": ["Backend", "Frontend"]
}

- This workspace setup lets you run npm install from the root project folder


## AUTH ROUTES
| Method | Route       | Protected | What it does                                                                                                                            |
| ------ | ----------- | --------: | --------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | `/api/auth` |        No | Logs in a user with `email` and `password`. Returns a JWT token if credentials are valid. Includes rate limiting for password attempts. |
| GET    | `/api/auth` |       Yes | Returns the currently logged-in user from the JWT token, excluding the password.                                                        |



## User Routes
| Method | Route        | Protected | What it does                                                                                                                              |
| ------ | ------------ | --------: | ----------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | `/api/users` |        No | Registers a new user with `name`, `email`, and `password`. Validates input, hashes the password, saves the user, and returns a JWT token. |


## DEVICE ROUTES
| Method | Route              | Protected | What it does                                                                                                                                                                             |
| ------ | ------------------ | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | `/api/devices`     |       Yes | Creates a new device for the logged-in user. Can either use real system info when `?q=yes` or create a test device when not using system info. Prevents duplicate device names per user. |
| GET    | `/api/devices`     |       Yes | Returns the logged-in user’s devices. Supports filtering by `status` and searching by device name with `q`. Populates user info (`name`, `email`).                                       |
| PUT    | `/api/devices/:id` |       Yes | Updates a device by ID. Only the owner of the device can update it.                                                                                                                      |
| DELETE | `/api/devices/:id` |       Yes | Deletes a device by ID. Only the owner of the device can delete it.                                                                                                                      |


## FILE ROUTES
| Method | Route                     | Protected | What it does                                                                                                                                          |
| ------ | ------------------------- | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | `/api/files`              |       Yes | Lists files for a device. Requires `deviceId`. Supports size filtering and filename search. Verifies the logged-in user owns the device first.        |
| POST   | `/api/files/upload`       |       Yes | Uploads a file to MinIO for a device. Requires `deviceId` query param and multipart form field named `file`. Stores metadata in MongoDB after upload. |
| GET    | `/api/files/:id/download` |       Yes | Downloads a file by file ID. Streams it from MinIO back to the client with the original filename.                                                     |
| DELETE | `/api/files/:id`          |       Yes | Deletes a file by ID. Removes the object from MinIO first, then deletes the MongoDB record.                                                           |

## APP ROUTES
| Method | Route           | Protected | What it does                                                                                                                        |
| ------ | --------------- | --------: | ----------------------------------------------------------------------------------------------------------------------------------- |
| POST   | `/api/apps`     |       Yes | Creates a new app record. Requires `deviceId`, `name`, `status`, and `port`.                                                        |
| GET    | `/api/apps`     |       Yes | Returns apps with optional filters for `deviceId`, `status`, `port`, and name search `q`. Populates device info (`name`, `status`). |
| PUT    | `/api/apps/:id` |       Yes | Updates an app by ID and returns the updated app.                                                                                   |
| DELETE | `/api/apps/:id` |       Yes | Deletes an app by ID.                                                                                                               |
