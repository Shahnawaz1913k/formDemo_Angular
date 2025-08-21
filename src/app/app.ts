import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
//import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //protected readonly title = signal('formDemo');
  name = new FormControl('Shah');
  password = new FormControl('Alma');

  displayValue(){
    console.log('Name:', this.name.value);
    console.log('Password', this.password.value);
  }
}
