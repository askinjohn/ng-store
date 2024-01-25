# ngx-dynamic-table

**Build dynamic tables with buttons and images in Angular!**

## Features

- Create tables with flexible structures based on user-defined data.
- Include buttons and images within table cells for enhanced interactivity.
- Customize table content and presentation using a clear interface.

## Installation

```bash
npm install @my-ng-store/ngx-dynamic-table
```

## Usage

**1. Import the Component:**

This is a standalone component and so it can be imported directly to the component where it is needed or to the module

```typescript
import { TableComponent } from '@my-ng-store/ngx-dynamic-table';

@NgModule({
  imports: [
    // ...
    TableComponent,
  ],
  // ...
})
export class AppModule {}
```

```typescript
import { TableComponent } from '@my-ng-store/ngx-dynamic-table';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  imports: [TableComponent],
})
export class MyAppComponent {}
```

**2. Use the component in your template:**

```html
<ngx-dynamic-table [tableData]="myTableData"></ngx-dynamic-table>
```

## Input

The component takes in a input [tableData] of type ITableData which can be imported from the library.

**3. Provide the table data:**

```typescript
import { ITableData, ITableProps, ITableValues } from '@my-ng-store/ngx-dynamic-table';

// ...

myTableData: ITableData = {
  // ... (your table data here)
};
```

## Output Events

- (onButtonClick): Emits the value of the clicked button's key property.
- (onImageClick): Emits the value of the clicked image's key property.

```html
<ngx-dynamic-table [tableData]="myTableData" (onButtonClick)="handleButtonClick($event)" (onImageClick)="handleImageClick($event)"></ngx-dynamic-table>
```

```typeScript
handleButtonClick(value: string) {
  console.log('Button clicked with value:', value);
}

handleImageClick(value: string) {
  console.log('Image clicked with value:', value);
}
```

## Example Usage

**Here's a more detailed example showcasing various features:**

```typescript
myTableData: ITableData = {
  headers: ['User Info', 'Address', 'Net Spent', 'Total Orders', 'Latest Activity', 'Download'],
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
  ],
  props: [
    {
      values: [{ title: '', key: 'name' }],
    },
    {
      values: [
        { title: '', key: 'city' },
        { title: '', key: 'country' },
      ],
    },
    {
      values: [{ title: 'Spent Amount', key: 'totalSpent' }],
    },
    {
      values: [{ title: 'Activity', key: 'lastPurchase' }],
    },
    { values: [{ title: '', key: 'orders' }] },
    {
      values: [{ key: '', imageSource: '/assets/download.svg', type: 'IMAGE' }],
    },
  ],
};
```

**This data will generate a table with:**

- Columns for user info, address, net spent, total orders, latest activity, and a download button.
- User info column displaying only the name.
- Address column displaying city and country.
- Net spent column with a custom title "Spent Amount".
- Latest activity column with a custom title "Activity".
- Download column with an image button using the provided image source.

## Input data Interfaces

```typescript
ITableData {
headers: Array<string>;
values: Array<Record<string, string | boolean | number>>;
props: Array<ITableProps>;
}

ITableProps {
values: Array<ITableValues>;
}

ITableValues {
title?: string;
key: string;
type?: 'IMAGE' | 'BUTTON';
buttonText?: string;
imageSource?: string;
}
```

**ITableData Interface**

- headers: Array of strings representing table headers.
- values: Array of objects containing row values.
- props: Array of ITableProps defining additional properties for each row.

**ITableProps Interface**

- values: Array of ITableValues defining values for a single row.

**ITableValues Interface**

- title: Optional title for a specific cell value.
- key: Key from the object given in values in ITableData.
- type: Type of content to display in the cell ('IMAGE' or 'BUTTON').
- buttonText: Text for the button if type is 'BUTTON'.
- imageSource: Source file if type is 'IMAGE'.

## Demo
