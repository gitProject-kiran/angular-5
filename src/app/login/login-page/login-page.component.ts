import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';
import { HttpClient } from '@angular/common/http';

export class Hero {

  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) { }

}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  constructor(public toastr: ToastsManager, private httpClient: HttpClient) { }

  ngOnInit() {
    this.toastr.success('You are awesome lazy loading!', 'Success!');
  }

  method1Call(): void {
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(
      success => {
        console.log('Successfully Completed');
        console.log(success);
      }
    );
  }

  method2Call(): void {
    this.httpClient.get('https://jsonplaceholder.typicode.com/user12').subscribe(
      success => {
        console.log('Successfully Completed');
        console.log(success);
      },
      error => {
        console.log('error Completed');
        console.log(error.message);
        this.toastr.error(error.message, 'Error!');
      }
    );
  }

}
