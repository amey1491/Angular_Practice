import { Component } from '@angular/core';

@Component({
  selector: 'app-marvellous',
  standalone: true,
  imports: [],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css'
})
export class MarvellousComponent {
  public information:string="";
  public marvellousEvent(){
    console.log('click me buton pressed');
  }
  public angularEvent(){
    this.information="Angular button pressed";
  }
  public pythonEvent(value:any){
    console.log(value);
  }

}
