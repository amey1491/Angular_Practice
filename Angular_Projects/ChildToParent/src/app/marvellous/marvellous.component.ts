import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-marvellous',
  standalone: true,
  imports: [],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css',
})
export class MarvellousComponent {
  //create the object of event emmiter
  @Output() public Myevent = new EventEmitter();
  public SendMessage() {
    this.Myevent.emit('Hello Parent...........');
  }
}
