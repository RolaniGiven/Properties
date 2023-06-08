import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: any = {
    username: null,
    email: null,
    password: null
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, email, password } = this.form;
    
    // Create an object with the user details
    const user = {
      username,
      email,
      password
    };

    // Send the user details to the backend API
    this.http.post('', user)
      .subscribe(
        response => {
          // Handle the success response from the backend
          console.log('Registration successful:', response);
          // Reset the form
          this.form = {
            username: null,
            email: null,
            password: null
          };
        },
        error => {
          // Handle the error response from the backend
          console.error('Registration failed:', error);
        }
      );
  }
}

