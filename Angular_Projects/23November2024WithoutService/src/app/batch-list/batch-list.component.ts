import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-batch-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batch-list.component.html',
  styleUrl: './batch-list.component.css'
})
export class BatchListComponent {
  public batches=[
    {
      "Name":"PPA",
      "Duration":"4months",
      "Fees":20000,
    },
    {
      "Name":"LB",
      "Duration":"3.5months",
      "Fees":21000,
    },
    {
      "Name":"Python",
      "Duration":"4months",
      "Fees":20000,
    }
  ]
}
