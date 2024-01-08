import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ng-store-table-ui',
  standalone: true,
  imports: [NgFor, NgIf],
  template: `<div class="parent">
    <table>
      <thead>
        <tr class="header-row">
          <th class="theader-text" *ngFor="let header of inputData.headers">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let value of inputData.values">
          <td class="tval-text" *ngFor="let prop of inputData.props">
            <ng-container *ngFor="let p of prop.values">
              @switch (p['type']) { @case ('IMAGE') {
              <div>
                <img src="" alt="" />
              </div>
              } @case ('BUTTON') {
              <div class="row-item">
                <button (click)="onButtonClick(value)" class="row-button">
                  {{ p['buttonText'] }}
                </button>
              </div>
              } @case ('DOWNLOAD') {
              <div>
                <button></button>
              </div>
              } @case ('COPY') {
              <div>
                <button></button>
              </div>
              }@default {
              <span class="row-item ">
                <p *ngIf="value[p['key']]" class="row-header">
                  {{ p['title'] }}
                </p>
                <p class="row-value">{{ value[p['key']] }}</p>
              </span>
              } }
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
  @Input() inputData!: ITableData;
  @Output() buttonClick = new EventEmitter();
  @Output() imageClick = new EventEmitter();
  @Output() copiedValue = new EventEmitter();

  onButtonClick(value: Record<string, string | boolean | number>) {
    this.buttonClick.emit(value);
  }

  onImageClick(value: Record<string, string | boolean | number>) {
    this.imageClick.emit(value);
  }

  onCopy(value: Record<string, string | boolean | number>) {
    this.copiedValue.emit(value);
  }

  onDownloadClick(url: string) {
    window.open(url);
  }
}

export interface ITableData {
  headers: Array<string>;
  values: Array<Record<string, string | boolean | number>>;
  props: Array<ITableProps>;
}

export interface ITableProps {
  values: Array<ITableValues>;
  config?: ITableConfig;
}

export interface ITableConfig {
  setImage?: string;
  setInitials?: {
    key: string;
  };
}

export interface ITableValues {
  title?: string;
  key: string;
  type?: 'IMAGE' | 'BUTTON' | 'DOWNLOAD' | 'COPY';
  allowClick?: boolean;
  buttonText?: string;
  supportingData?: string;
}
