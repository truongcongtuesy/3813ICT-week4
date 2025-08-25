# 3813ICT Week 4 Tutorial - Angular Application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 20.1.4.

## Commands Used

### 1. Create the app
```bash
ng new week4 --routing=true --style=css --ssr=false
```

### 2. Install dependencies

#### Frontend Dependencies
```bash
cd week4
npm install bootstrap --save
```

#### Backend Dependencies
```bash
cd server
npm install express cors nodemon
```

### 3. Generate Angular services and components
```bash
ng generate component home
ng generate component login
ng generate component profile
ng generate service services/auth
```

### 4. Serve the application
```bash
ng serve
```

## Development server

### Frontend (Angular)
To start the Angular development server, run:

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Backend (Node.js)
To start the backend server, run:

```bash
cd server
npm start
# or
node server.js
```

The backend server will run on `http://localhost:3000/` with API endpoint at `/api/auth`.

### Running Both Servers
1. Start backend server first:
   ```bash
   cd server
   npm start
   ```

2. In a new terminal, start frontend:
   ```bash
   ng serve
   ```

3. Open browser to `http://localhost:4200/`

## Features

### Week 4 Features
- **Navigation**: Bootstrap navbar with routing between Home, Login, and Account pages
- **Home Page**: Welcome page with Bootstrap styling
- **Login Page**: Login form with email/password inputs, two-way data binding, and authentication
- **Profile Page**: User profile page with image and information cards
- **Authentication**: Hardcoded user validation with error handling and redirection

### Week 5 Features (Fullstack)
- **Backend Server**: Node.js Express server with authentication API
- **Server-side Authentication**: RESTful API endpoint `/api/auth` for user login
- **CORS Support**: Cross-origin resource sharing for frontend-backend communication
- **Profile Management**: Editable user profile with save/reset functionality
- **Session Management**: localStorage integration for persistent login state
- **Logout Functionality**: Complete logout with session cleanup
- **Error Handling**: Comprehensive error handling for server communication

## Architecture

- **Frontend**: Angular (TypeScript) with Bootstrap styling
- **Backend**: Node.js with Express.js framework
- **API**: RESTful API with JSON data exchange
- **Authentication**: Server-side validation with client-side session storage

## Test Accounts

- user1@example.com / password1
- user2@example.com / password2  
- admin@example.com / admin123

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Git Commands Used

### Setup Git repository
```bash
git remote add origin https://github.com/truongcongtuesy/3813ICT-week4.git
git add .
git commit -m "Week 4 Tutorial"
git push -u origin master
```

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
