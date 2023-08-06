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
      'Merchant Info',
      'MerchantId',
      'No. of Transactions',
      'Total Amount',
      'Latest Activity',
    ],
    values: [
      {
        merchantName: 'Askin',
        companyId: '2313212',
        email: 'as@sd.se',
        merchantId: '8432432224',
        acquirerId: 'ppfn93hh',
        totalNumberOfTransaction: '50',
        totalAmountOfTransaction: '502342',
        lastTransactionAt: '2023 4 April ',
      },
      {
        merchantName: 'Askin',
        companyId: '2313212',
        email: 'as@sd.se',
        merchantId: '8432432224',
        acquirerId: 'ppfn93hh',
        totalNumberOfTransaction: '50',
        totalAmountOfTransaction: '502342',
        lastTransactionAt: '2023 4 April ',
      },
      {
        merchantName: 'Askin',
        companyId: '2313212',
        email: 'as@sd.se',
        merchantId: '8432432224',
        acquirerId: 'ppfn93hh',
        totalNumberOfTransaction: '50',
        totalAmountOfTransaction: '502342',
        lastTransactionAt: '2023 4 April ',
      },
      {
        merchantName: 'Askin',
        companyId: '2313212',
        email: 'as@sd.se',
        merchantId: '8432432224',
        acquirerId: 'ppfn93hh',
        totalNumberOfTransaction: '50',
        totalAmountOfTransaction: '502342',
        lastTransactionAt: '2023 4 April ',
      },

      {
        merchantName: 'Askin',
        companyId: '2313212',
        email: 'as@sd.se',
        merchantId: '8432432224',
        acquirerId: 'ppfn93hh',
        totalNumberOfTransaction: '50',
        totalAmountOfTransaction: '502342',
        lastTransactionAt: '2023 4 April ',
      },
    ],
    props: [
      [
        { header: '', key: 'merchantName' },
        { header: 'Org No:', key: 'companyId' },
        { header: '', key: 'email' },
      ],
      [
        { header: '', key: 'merchantId' },
        { header: '', key: 'acquirerMID' },
      ],
      [{ header: '', key: 'totalNumberOfTransaction' }],
      [{ header: '', key: 'totalAmountOfTransaction' }],
      [{ header: 'Activity:', key: 'lastTransactionAt' }],
    ],
  };
}
