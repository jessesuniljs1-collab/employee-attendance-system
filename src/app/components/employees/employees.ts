import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [NgFor],
  templateUrl: './employees.html',
  styleUrls: ['./employees.css']
})
export class EmployeesComponent {
  employees = [
    { name: 'Rahul', department: 'IT' },
    { name: 'Anita', department: 'HR' },
    { name: 'Karthik', department: 'Finance' }
  ];
}
