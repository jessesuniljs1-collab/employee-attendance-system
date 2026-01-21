import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-leave-approval',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './leave-approval.html',
  styleUrls: ['./leave-approval.css']
})
export class LeaveApprovalComponent {
  leaveRequests = [
    { employee: 'Rahul', from: '2026-01-25', to: '2026-01-26', status: 'Pending' },
    { employee: 'Anita', from: '2026-01-28', to: '2026-01-29', status: 'Pending' }
  ];

  approve(req: any) {
    req.status = 'Approved';
  }

  reject(req: any) {
    req.status = 'Rejected';
  }
}
