import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SmartSettingService {


  add = {
    addButtonContent: '<i class="nb-plus"></i>',
    createButtonContent: '<i class="nb-checkmark"></i>',
    cancelButtonContent: '<i class="nb-close"></i>',
  };
  edit = {
    editButtonContent: '<i class="nb-edit"></i>',
    saveButtonContent: '<i class="nb-checkmark"></i>',
    cancelButtonContent: '<i class="nb-close"></i>',
  };
  delete = {
    deleteButtonContent: '<i class="nb-trash"></i>',
    confirmDelete: true,
  };

  columns = {
    id: {
      title: 'ID',
      type: 'number',
      editable: false,
    },
    firstName: {
      title: 'First Name',
      type: 'string',
    },
    lastName: {
      title: 'Last Name',
      type: 'string',
    },
    username: {
      title: 'Username',
      type: 'string',
    },
    email: {
      title: 'E-mail',
      type: 'string',
    },
    age: {
      title: 'Age',
      type: 'number',
    },
  };

  constructor() {
  }

  getSetting() {
    const smartSetting: SmartSetting = <any>{};
    smartSetting.add = this.add;
    smartSetting.edit = this.edit;
    smartSetting.delete = this.delete;
    smartSetting.columns = this.columns;

    return smartSetting;
  }

}

interface SmartSetting {
  add: any;
  edit: any;
  delete: any;
  columns: any;
}
