import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'contactinfo-bottomsheet-component',
  templateUrl: './contactinfo-bottomsheet-header-logo.component.html',
  styleUrls: ['./contactinfo-bottomsheet.component.scss']
})

export class ContactinfoBottomsheetComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
  }

  openBottomSheet(): void {
    if(this._bottomSheet._openedBottomSheetRef){
      this._bottomSheet.dismiss();
    }
    else{
      this._bottomSheet.open(ContactInfoBottomSheet);
    }
  }

}
 
@Component({
  selector:  'contactinfo-sheet',
  templateUrl: './contactinfo-bottomsheet.html',
  styleUrls: ['./contactinfo-bottomsheet.component.scss']
})
export class ContactInfoBottomSheet implements OnInit {
  constructor(private _bottomSheetRef: MatBottomSheetRef<ContactInfoBottomSheet>){}

  ngOnInit(): void {
  }

  copyContact(spanId: string): void {
    this._bottomSheetRef.dismiss();
     
    var span = document.getElementById(spanId);
    var textarea = document.createElement("textarea");
    textarea.value = span.textContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.setSelectionRange(0,0);
    textarea.remove();
    alert(span.textContent + ' copied to clipboard.');
  }
}