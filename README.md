# 3813ICT Week 4 Tutorial - Angular Application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 20.1.4.

## Commands Used

### 1. Create the app
```bash
ng new week4 --routing=true --style=css --ssr=false
```

### 2. Install dependencies
```bash
cd week4
npm install bootstrap --save
```

### 3. Generate new components
```bash
ng generate component home
ng generate component login
ng generate component profile
```

### 4. Serve the application
```bash
ng serve
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Features

- **Navigation**: Bootstrap navbar with routing between Home, Login, and Account pages
- **Home Page**: Welcome page with Bootstrap styling
- **Login Page**: Login form with email/password inputs, two-way data binding, and authentication
- **Profile Page**: User profile page with image and information cards
- **Authentication**: Hardcoded user validation with error handling and redirection

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
