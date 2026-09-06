import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map, tap, delay } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User, LoginRequest, RegisterRequest, AuthResponse } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl + '/auth';
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  // Mock user database
  private mockUsers: User[] = [
    {
      id: 1,
      name: 'Test NGO',
      email: 'ngo@test.com',
      role: 'NGO',
      created_at: new Date().toISOString()
    },
    {
      id: 2,
      name: 'Test Donor',
      email: 'donor@test.com',
      role: 'Donor',
      created_at: new Date().toISOString()
    },
    {
      id: 3,
      name: 'Test Admin',
      email: 'admin@test.com',
      role: 'Admin',
      created_at: new Date().toISOString()
    }
  ];

  constructor(private http: HttpClient) {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUserSubject.next(JSON.parse(storedUser));
    }
  }

  login(credentials: LoginRequest): Observable<AuthResponse> {
    // Mock authentication - check against mock users
    const mockUser = this.mockUsers.find(user => 
      user.email === credentials.email
    );

    return of(mockUser).pipe(
      delay(1000), // Simulate network delay
      map(user => {
        if (!user) {
          throw new Error('Invalid credentials');
        }
        
        // Generate mock token
        const token = 'mock-jwt-token-' + Date.now();
        
        const response: AuthResponse = {
          message: 'Login successful',
          token: token,
          user: user
        };
        
        return response;
      }),
      tap(response => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('currentUser', JSON.stringify(response.user));
        this.currentUserSubject.next(response.user);
      })
    );
  }

  register(userData: RegisterRequest): Observable<AuthResponse> {
    // Mock registration - check if user already exists
    const existingUser = this.mockUsers.find(user => 
      user.email === userData.email
    );

    return of(existingUser).pipe(
      delay(1000), // Simulate network delay
      map(existing => {
        if (existing) {
          throw new Error('User already exists');
        }
        
        // Create new user
        const newUser: User = {
          id: this.mockUsers.length + 1,
          name: userData.name,
          email: userData.email,
          role: userData.role,
          created_at: new Date().toISOString()
        };
        
        // Add to mock database
        this.mockUsers.push(newUser);
        
        // Generate mock token
        const token = 'mock-jwt-token-' + Date.now();
        
        const response: AuthResponse = {
          message: 'Registration successful',
          token: token,
          user: newUser
        };
        
        return response;
      }),
      tap(response => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('currentUser', JSON.stringify(response.user));
        this.currentUserSubject.next(response.user);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  hasRole(role: string): boolean {
    const currentUser = this.getCurrentUser();
    return currentUser ? currentUser.role === role : false;
  }
}
