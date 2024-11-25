import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-batch-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batch-details.component.html',
  styleUrl: './batch-details.component.css'
})
export class BatchDetailsComponent {
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
