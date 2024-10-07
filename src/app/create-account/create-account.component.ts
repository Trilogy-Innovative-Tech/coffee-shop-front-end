import {Component,AfterViewInit,OnInit} from '@angular/core';
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent /*implements AfterViewInit*/{
  name: string = "";
  email: string = "";
  contact: string = "";
  address: string = "";
  password: string = "";

  selectedOption = '';

  options = [
    {value: 'Admin', label: 'Admin'},
    {value: 'Manager', label: 'Manager'},
    {value: 'Cashier', label: 'Cashier'}
  ];

  // ngAfterViewInit(): void {
  //   this.options = [
  //     {value: 'Admin', label: 'Admin'},
  //     {value: 'Manager', label: 'Manager'},
  //     {value: 'Cashier', label: 'Cashier'}
  //   ];
  // }


  validate(ngModel: NgModel) {
    ngModel.control.markAsDirty(); /* make the control dirty when validate button
    is clicked */
    if (ngModel.invalid) {
      alert("Invalid");
    } else {
      alert("Valid");
    }
  }
}
