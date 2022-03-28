import { Component } from '@angular/core';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetTwo';

  constructor(private service:TaskService){

  }
  ngOnInit(){
    this.service.getBackingData().subscribe((response) =>{
      alert(response);
    })
  }
}
