import { Component, OnInit, NgModule  } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BusinessInquiryComponent } from '../business-inquiry/business-inquiry.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public bsModalRef: BsModalRef;

  constructor(private _bsModalService: BsModalService) { 
  }

  ngOnInit(): void {
  }

  
  expandMenu(): void {
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

  showBizInquiry(): void {
    this.expandMenu();
    this.bsModalRef = this._bsModalService.show(BusinessInquiryComponent);
    this.bsModalRef.content.onClose.subscribe(result => {
      console.log("results", result);
    });
  }
}
