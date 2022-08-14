import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface Calculator {
  enterLatersControl: number;
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  a: any = '';
  b: any = '';
  actions = '';
  inputValue: any = '0';

  
  writeInput(str: string) {
    this.inputValue;
    if (this.b == '' && this.actions == '') {
      this.a += str;
      this.inputValue = this.a
      console.log('a=',this.a)
    }else if(this.a !== '' && this.actions !== '') {
      this.b += str;
      this.inputValue = this.b;
      console.log('b=',this.b)
    }
  }
  
  action(str: string) {
    switch(str) {
      case '+':
      this.actions = str;
      break;
      case '-':
      this.actions = str;
      break;
      case '=':
      this.equals(str);
      break;
    }
  }
    

  equals(value: string) {
    if (this.actions == '+') {
      this.inputValue = +this.a + +this.b;
    }
    if(this.actions == '-') {
      this.inputValue = this.a - this.b;
    }
  }

  plus() {
    console.log(this.inputValue)
  }




    clearAll() {
      this.a = '',
      this.b = '',
      this.inputValue = '',
      this.actions = ''
    }
  }
  