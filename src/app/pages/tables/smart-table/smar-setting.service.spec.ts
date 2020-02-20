import { TestBed } from '@angular/core/testing';

import { SmartSettingService } from './smart-setting.service';

describe('SmarSettingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmartSettingService = TestBed.get(SmartSettingService);
    expect(service).toBeTruthy();
  });
});
