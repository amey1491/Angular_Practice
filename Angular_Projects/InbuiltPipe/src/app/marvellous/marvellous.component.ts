import {
  DecimalPipe,
  JsonPipe,
  LowerCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-marvellous',
  standalone: true,
  imports: [LowerCasePipe, UpperCasePipe, DecimalPipe, JsonPipe],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css',
})
export class MarvellousComponent {
  public Name: string = 'Marvellous Infosysteem';
  public Value: number = 12.3456789;
  public Book = {
    Name: 'Let us C',
    price: '520',
    Author: 'Kanetkar',
  };
}
