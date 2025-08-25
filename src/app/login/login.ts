import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Auth, User } from '../services/auth';

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
  isLoading: boolean = false;

  constructor(private router: Router, private authService: Auth) {}

  onLogin() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Please enter both email and password.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    // Call server API through auth service
    this.authService.login(this.email, this.password).subscribe({
      next: (response: User) => {
        this.isLoading = false;
        
        if (response.valid) {
          // Save user to localStorage
          this.authService.saveUserToStorage(response);
          
          console.log('Login successful, user data:', response);
          console.log('User saved to localStorage');
          
          // Redirect to account page
          this.router.navigate(['/account']);
        } else {
          this.errorMessage = 'Invalid email or password. Please try again.';
          console.log('Login failed - invalid credentials');
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = 'Server error. Please try again later.';
        console.error('Login error:', error);
      }
    });
  }
}
