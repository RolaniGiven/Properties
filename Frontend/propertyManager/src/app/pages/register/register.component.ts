import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PropownerService } from '../../services/propowner.service';

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

  constructor(private propownerService: PropownerService) { }

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

    // Call the service method to create the property owner
    this.propownerService.createPropOwner(user)
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

