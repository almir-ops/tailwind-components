import { Component, OnInit } from '@angular/core';
import { SideMenuService } from '../../services/side-menu.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  menuItems: any[] = [];
  test: any = 'dasdasfas'
  collapseMenu: any = true;
  open: any = 'w-60'
  isOpen : any = true;
  constructor(private sideMenuService: SideMenuService) { }

  ngOnInit(): void {
    this.menuItems = this.sideMenuService.menuItems;

  }
  hiddenMenu(){
    //this.collapseMenu = !this.collapseMenu;
    if (this.isOpen){
      console.log(this.isOpen);
      this.open = 'w-16'
    }
    if(!this.isOpen){
      this.open = 'w-60'
    }
    this.isOpen = !this.isOpen
  }

}
