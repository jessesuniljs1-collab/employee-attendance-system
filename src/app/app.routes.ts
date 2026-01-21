import { Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard';
import { EmployeesComponent } from './components/employees/employees';
import { AttendanceComponent } from './components/attendance/attendance';
import { LeaveRequestComponent } from './components/leave-request/leave-request';
import { LeaveApprovalComponent } from './components/leave-approval/leave-approval';


export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'leave-request', component: LeaveRequestComponent },
  { path: 'leave-approval', component: LeaveApprovalComponent }
];
