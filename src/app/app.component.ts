import { Component } from '@angular/core';
import { Location } from '@angular/common'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-company';
  constructor(private location: Location) {}
  onBack():void{
   
    this.location.back();
  
}
}
