import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'contactinfo-bottomsheet-component',
  templateUrl: './contactinfo-bottomsheet.component.html',
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

  copyContact(input: any): void {
    this._bottomSheetRef.dismiss();

    // input.select();
    // document.execCommand('copy');
    // input.setSelectionRange(0,0);
    // alert(input.val() + ' copied to clipboard.');
    // //event.preventDefault();
  }
}