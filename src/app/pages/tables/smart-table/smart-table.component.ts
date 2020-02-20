import {Component, OnChanges} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';

import {SmartTableData} from '../../../@core/data/smart-table';
import {SmartSettingService} from './smart-setting.service';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent implements OnChanges {
  settings: any;
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData, private smartTableSeting: SmartSettingService) {
    this.settings = smartTableSeting.getSetting();
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  ngOnChanges(): void {

  }


}
