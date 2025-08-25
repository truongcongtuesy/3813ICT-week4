import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  username: string;
  birthdate: string;
  age: number;
  email: string;
  valid: boolean;
}

export interface LoginRequest {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private apiUrl = 'http://localhost:3000/api';
  private currentUser: User | null = null;

  constructor(private http: HttpClient) {
    this.loadUserFromStorage();
  }

  // Login method - calls server API
  login(email: string, password: string): Observable<User> {
    const loginData: LoginRequest = { email, password };
    return this.http.post<User>(`${this.apiUrl}/auth`, loginData);
  }

  // Save user to localStorage (without password)
  saveUserToStorage(user: User): void {
    if (user.valid) {
      // Convert object to string using JSON.stringify
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUser = user;
      console.log('User saved to localStorage:', user);
    }
  }

  // Load user from localStorage
  loadUserFromStorage(): User | null {
    const userString = localStorage.getItem('currentUser');
    if (userString) {
      try {
        // Convert string back to object using JSON.parse
        this.currentUser = JSON.parse(userString);
        console.log('User loaded from localStorage:', this.currentUser);
        return this.currentUser;
      } catch (error) {
        console.error('Error parsing user from localStorage:', error);
        localStorage.removeItem('currentUser');
      }
    }
    return null;
  }

  // Get current user
  getCurrentUser(): User | null {
    return this.currentUser;
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    return this.currentUser !== null && this.currentUser.valid === true;
  }

  // Logout - clear localStorage
  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUser = null;
    console.log('User logged out');
  }
}
