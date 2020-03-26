import { Component, OnInit, NgModule  } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor() { 

  }

  expandMenu() {
    //var hamburgerBtn = document.getElementById('hamburgerBtn');
    var condiments = document.getElementsByClassName('condiments');
    for(let i = 0; i < condiments.length; i++){
      if(condiments[i].classList.contains('expand')){
        condiments[i].classList.remove('expand');
      }
      else{
        condiments[i].classList.add('expand');
      }
    }
  }
  ngOnInit(): void {
  }
}
