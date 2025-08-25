import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  // Hardcoded users array
  private users = [
    { email: 'user1@example.com', password: 'password1' },
    { email: 'user2@example.com', password: 'password2' },
    { email: 'admin@example.com', password: 'admin123' }
  ];

  constructor(private router: Router) {}

  onLogin() {
    // Clear previous error message
    this.errorMessage = '';

    // Check if user exists in hardcoded array
    const user = this.users.find(u => u.email === this.email && u.password === this.password);

    if (user) {
      // User found, redirect to account page
      console.log('Login successful for:', this.email);
      this.router.navigate(['/account']);
    } else {
      // User not found, show error message
      this.errorMessage = 'Invalid email or password. Please try again.';
      console.log('Login failed for:', this.email);
    }
  }
}
