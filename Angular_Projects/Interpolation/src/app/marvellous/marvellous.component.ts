import { Component } from '@angular/core';

@Component({
  selector: 'app-marvellous',
  standalone: true,
  imports: [],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css',
})
export class MarvellousComponent {
  public BatchName = 'Python ML';
  DemoFun() {
    return 'Inside Demo Fun Function';
  }
  display() {
    console.log('Inside display function');
  }
}
