import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-table-ui',
  standalone: true,
  imports: [NgFor, NgIf],
  template: `<div class="w-full bg-blue-500 p-2 text-blue-400">
    <table>
      <thead>
        <tr>
          <th class="theader-text" *ngFor="let header of inputData.headers">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let value of inputData.values">
          <td class="tval-text" *ngFor="let prop of inputData.props">
            <ng-container *ngFor="let p of prop">
              <span class="row-item ">
                <p *ngIf="value[p['key']]" class="row-header">
                  {{ p['header'] }}
                </p>
                <p class="row-value">{{ value[p['key']] }}</p>
              </span>
            </ng-container>
          </td>
        </tr>
      </tbody>
    </table>
  </div>`,
  styleUrls: ['./table.styles.scss'],
})
export class TableComponent {
  clickable = false;
  @Input() inputData!: IInput;
}

export type IInput = {
  headers: Array<string>;
  values: Record<string, string | number | boolean>[];
  props: Array<
    Array<{
      key: string;
      header: string;
      type?: string;
    }>
  >;
};
