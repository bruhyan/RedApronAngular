import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BmiCalculatorComponent implements OnInit {
  closeResult: string;
  age : number;
  gender : number;
  lifestyle: number;
  height: number;
  weight: number;
  bmi: number;
  calorieReq: number;
  physicalActivity: number;
  negativeNumberErr : boolean = false ;
  isUnderweight: boolean = false;
  isNormal: boolean = false;
  isOverweight: boolean = false;
  isObese: boolean = false;

  constructor(private modalService: NgbModal, private toastr : ToastrService) { }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  calc(form: NgForm) {
    console.log(this.age+" "+this.gender+" "+this.lifestyle+" "+this.height+" "+this.weight)
    if (this.age < 1 || this.weight < 1 || this.height < 0.1) {
      this.showFailure();
    }else {
      this.bmi = this.weight / (this.height * this.height)
      this.bmi = parseFloat(this.bmi.toFixed(1))
      if(this.bmi < 18.5) {
        this.isUnderweight = true;
        this.isNormal = false;
        this.isObese = false;
        this.isOverweight = false;
      }else if(this.bmi < 25.1) {
        this.isNormal = true;
        this.isUnderweight = false;
        this.isOverweight = false;
        this.isObese = false;
      }else if(this.bmi < 30.1) {
        this.isOverweight = true;
        this.isUnderweight = false;
        this.isNormal = false;
        this.isObese = false;
      }else {
        this.isObese = true;
        this.isUnderweight = false;
        this.isNormal = false;
        this.isOverweight = false;
      } 


      if (this.gender == 1) {
        if(this.lifestyle == 1) { this.physicalActivity = 1.00}
        else if(this.lifestyle == 2) {this.physicalActivity = 1.12}
        else if(this.lifestyle == 3) {this.physicalActivity = 1.27}
        else if(this.lifestyle == 4) {this.physicalActivity = 1.45}
  
        this.calorieReq = 354 - (6.91 * this.age) + (this.physicalActivity * 9.36 * this.weight) + (726 * this.height)
        this.calorieReq = parseFloat(this.calorieReq.toFixed(0))
      }else if(this.gender == 2) {
        if(this.lifestyle == 1) { this.physicalActivity = 1.00}
        else if(this.lifestyle == 2) {this.physicalActivity = 1.11}
        else if(this.lifestyle == 3) {this.physicalActivity = 1.26}
        else if(this.lifestyle == 4) {this.physicalActivity = 1.48}
  
        this.calorieReq = 662 - (9.53 * this.age) + (this.physicalActivity * 15.91 * this.weight) + (539.6 * this.height)
        this.calorieReq = parseFloat(this.calorieReq.toFixed(0))
        
      }
      document.getElementById('openButton').click()
    }
   

    // console.log(this.bmi)
    // console.log(this.calorieReq)
    // document.getElementById('openButton').click()

  }

  showFailure() {
    this.toastr.error('Age, Weight or Height values invalid', 'Failed to calculate results')
  }

  // showSuccess() {
  //   this.toastr.success('Plan added to cart');
  // }

}
