import { Component, Input, OnInit, NgModule } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'business-inquiry',
  templateUrl: './business-inquiry.component.html',
  styleUrls: ['./business-inquiry.component.scss']
})

export class BusinessInquiryComponent implements OnInit {
  public isModalVisible: boolean = true;
  private inquiryForm;
  private isSuccess: boolean = false;

  public onClose: Subject<boolean>;

  constructor(private _formBuilder: FormBuilder, private _bsModalRef: BsModalRef) { 
    this.inquiryForm = _formBuilder.group({
      name: '',
      email: '',
      bizNeed: ''
    });
  }

  ngOnInit(): void {
    this.onClose = new Subject();
  }

  onCancel(): void {
    this.onClose.next(false);
    this._bsModalRef.hide();
  }

  submitBizInquiry(): boolean {
    this._bsModalRef.hide();
    this.onClose.next(true);
    this.isSuccess = true;

    return this.isSuccess;
  }

}
