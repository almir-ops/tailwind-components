import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {

  menuItems: any[] = [
    {
      title:'Dash2',
      icon:'',
      subMenu: [
        {
          subTitle: 'Usuario',
          url:'',
          icon:''
        }
      ]
    },
    {
      title:'Dash',
      icon:'',
      subMenu: [
        {
          subTitle: 'Usuario 2',
          url:'',
          icon:''
        }
      ]
    },
  ]
  constructor() { }
}
