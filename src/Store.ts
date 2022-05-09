import { makeAutoObservable } from 'mobx';
import { createContext } from 'react';

export default class Store {
  public givenName = '';
  public surname = '';
  public email = '';
  public phone = '';

  public houseNumber = '';
  public street = '';
  public suburb = '';
  public state = '';
  public postcode = '';
  public country = '';

  public file: any;
  public fileImage: any;

  constructor() {
    makeAutoObservable(this);
    window['Store'] = this;
  }
  public onChange = (field: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    this[field] = value;
  };

  public onFileUploadClick = (e: React.MouseEvent<HTMLInputElement>) => {
    document.getElementById('avatarUpload')?.click();
  };

  public onFileUploadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    this.file = file;

    if (this.file) {
      this.fileImage = URL.createObjectURL(this.file);
    }
  };
}

const store = new Store();
export const StoreContext = createContext<Store>(store);
