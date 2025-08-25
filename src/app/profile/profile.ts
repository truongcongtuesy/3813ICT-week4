import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth, User } from '../services/auth';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnInit {
  currentUser: User | null = null;
  originalUser: User | null = null; // Store original data for reset
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private authService: Auth, private router: Router) {}

  ngOnInit() {
    // Load user from localStorage
    this.currentUser = this.authService.getCurrentUser();
    
    if (this.currentUser && this.currentUser.valid) {
      // Store a copy of original data for reset functionality
      this.originalUser = JSON.parse(JSON.stringify(this.currentUser));
      console.log('Profile loaded for user:', this.currentUser.username);
    } else {
      // If no user is logged in, redirect to login
      console.log('No valid user found, redirecting to login');
      this.router.navigate(['/login']);
    }
  }

  saveProfile() {
    if (this.currentUser) {
      try {
        // Save updated user data to localStorage
        this.authService.saveUserToStorage(this.currentUser);
        
        // Update original user data
        this.originalUser = JSON.parse(JSON.stringify(this.currentUser));
        
        this.successMessage = 'Profile updated successfully!';
        this.errorMessage = '';
        console.log('Profile saved:', this.currentUser);

        // Clear success message after 3 seconds
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
      } catch (error) {
        this.errorMessage = 'Error saving profile. Please try again.';
        this.successMessage = '';
        console.error('Error saving profile:', error);
      }
    }
  }

  resetForm() {
    if (this.originalUser) {
      // Reset form to original values
      this.currentUser = JSON.parse(JSON.stringify(this.originalUser));
      this.successMessage = '';
      this.errorMessage = '';
      console.log('Form reset to original values');
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
