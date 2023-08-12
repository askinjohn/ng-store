import { Component } from '@angular/core';

@Component({
  selector: 'my-ng-store-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-table';

  data: any = {
    headers: [
      'User Info',
      'Address',
      'Net Spent',
      'Total Orders',
      'Latest Activity',
    ],
    values: [
      {
        id: 1,
        name: 'John Doe',
        age: 25,
        email: 'john@example.com',
        city: 'New York',
        country: 'USA',
        orders: 10,
        totalSpent: 1200,
        lastPurchase: '2023-07-15',
      },
      {
        id: 2,
        name: 'Jane Smith',
        age: 32,
        email: 'jane@example.com',
        city: 'Los Angeles',
        country: 'USA',
        orders: 24,
        totalSpent: 2800,
        lastPurchase: '2023-08-02',
      },
      {
        id: 3,
        name: 'Robert Johnson',
        age: 45,
        email: 'robert@example.com',
        city: 'Chicago',
        country: 'USA',
        orders: 16,
        totalSpent: 1900,
        lastPurchase: '2023-07-28',
      },
      {
        id: 4,
        name: 'Emily Brown',
        age: 28,
        email: 'emily@example.com',
        city: 'Houston',
        country: 'USA',
        orders: 7,
        totalSpent: 800,
        lastPurchase: '2023-07-10',
      },
      {
        id: 5,
        name: 'Michael Wilson',
        age: 22,
        email: 'michael@example.com',
        city: 'Miami',
        country: 'USA',
        orders: 12,
        totalSpent: 1500,
        lastPurchase: '2023-08-05',
      },
      // Add more objects as needed
    ],
    props: [
      [
        { header: '', key: 'name' },
        { header: '', key: 'email' },
      ],
      [
        { header: '', key: 'city' },
        { header: '', key: 'country' },
      ],
      [{ header: '', key: 'totalSpent' }],
      [{ header: '', key: 'orders' }],
      [{ header: 'Activity:', key: 'lastPurchase' }],
    ],
  };
}
