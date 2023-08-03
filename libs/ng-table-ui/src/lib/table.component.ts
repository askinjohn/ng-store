import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'ng-table-ui',
  standalone: true,
  imports: [NgFor],
  template: `<div class="w-full bg-blue-500 p-2 text-blue-400">
    <table>
      <thead>
        <tr>
          <th *ngFor="let header of tableHeaders">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td *ngFor="let data of tableData">{{ data }}</td>
        </tr>
      </tbody>
    </table>
  </div>`,
  styleUrls: ['./table.styles.scss'],
})
export class TableComponent {
  tableHeaders = ['Title', 'Title', 'Title', 'Title', 'Title'];
  tableData = ['one', 'two', 'three', 'four', 'five'];
}
