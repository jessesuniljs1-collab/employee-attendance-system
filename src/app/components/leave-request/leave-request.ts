import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-leave-request',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './leave-request.html',
  styleUrls: ['./leave-request.css']
})
export class LeaveRequestComponent {
  employees = ['Rahul', 'Anita', 'Karthik'];

  leave = {
    employee: '',
    fromDate: '',
    toDate: '',
    reason: ''
  };

  submitLeave() {
    alert('Leave Applied Successfully');
  }
}
