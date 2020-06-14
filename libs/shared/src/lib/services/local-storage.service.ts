import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  constructor() {}

  get(key: string) {
    const item = localStorage.getItem(key);
    if (item) {
      return 'Bearer ' + item;
    } else {
      console.warn(`Item for key - ${key} not available in local storage`);
      return null;
    }
  }

  set(key: string, val: any) {
    localStorage.setItem(key, val);
  }

  remove(key: string) {
    const item = localStorage.getItem(key);
    if (item) {
      localStorage.removeItem(key);
    } else {
      console.warn(
        `Item for key - ${key} not available in local storage to be removed`
      );
      return null;
    }
  }

  clear() {
    localStorage.clear();
  }
}
