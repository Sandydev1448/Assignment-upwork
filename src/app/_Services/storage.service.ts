/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable object-shorthand */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
 // eslint-disable-next-line @typescript-eslint/member-ordering
  asyncLocalStorage = {
    setItem: async function(key, value) {
      await null;
      return localStorage.setItem(key, value);
    },
    getItem: async function(key) {
      await null;
      return localStorage.getItem(key);
    },
    clearItem(key) {
      localStorage.removeItem(key);
    }
  };


}
