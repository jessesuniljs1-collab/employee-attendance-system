import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './attendance.html',
  styleUrls: ['./attendance.css']
})
export class AttendanceComponent {
  employees = [
    { name: 'Rahul', status: '' },
    { name: 'Anita', status: '' },
    { name: 'Karthik', status: '' }
  ];

  markPresent(emp: any) {
    emp.status = 'Present';
  }

  markAbsent(emp: any) {
    emp.status = 'Absent';
  }
}
