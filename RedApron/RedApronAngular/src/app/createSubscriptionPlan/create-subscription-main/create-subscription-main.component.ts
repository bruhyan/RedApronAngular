import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {SubscriptionPlan } from '../../models/SubscriptionPlan';
import {DeliveryDay} from '../../models/DeliveryDay';
import { NgForm } from '@angular/forms';
import { Category } from '../../models/Category';
import { CategoryService } from '../../service/category.service';
import { SubscriptionPlanStatus } from '../../models/SubscriptionPlanStatus';
import { SessionService } from '../../service/session.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { SharingServiceService } from '../../service/sharing-service.service';

@Component({
  selector: 'app-create-subscription-main',
  templateUrl: './create-subscription-main.component.html',
  styleUrls: ['./create-subscription-main.component.css']
})
export class CreateSubscriptionMainComponent implements OnInit {
  closeResult: string;
  newSubscriptionPlan : SubscriptionPlan;
  deliveryDay = DeliveryDay;
  planStatus = SubscriptionPlanStatus;
  keys = [];
  categories : Category[];
  done : boolean;
  selectedCategoryId : number;
  selectedCategory : Category;
  message : string = "init";

  @Output() messageEvent = new EventEmitter();

  constructor(private modalService: NgbModal, private categoryService: CategoryService, 
    public sessionService : SessionService, private toastr : ToastrService, private router : Router,
    private sharingService : SharingServiceService) {
    this.newSubscriptionPlan = new SubscriptionPlan();
    this.keys = Object.keys(this.deliveryDay);
   }

  ngOnInit() {
    
    this.categoryService.getCategories().subscribe(
      response => {
        this.categories = response.categoryEntities;
      },
      error => {
        console.log('create-subscription-main.component.ts '+error);
      }
    );
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: "lg", centered:true}).result.then((result) => {
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

  createPlan(planForm:NgForm) {
    // console.log(this.newSubscriptionPlan.startDate);
    // console.log(this.newSubscriptionPlan.deliveryDay);
    // console.log(this.newSubscriptionPlan.preference);
    // let startDate : Date = this.newSubscriptionPlan.startDate;

    
    let today = new Date();
    let startDate = new Date(this.newSubscriptionPlan.startDate);
    if(startDate < today) {
      console.log('hell naw');
      this.showFailure();
    }else {
      let startDate = new Date(this.newSubscriptionPlan.startDate);
      let endDate = new Date();
      endDate.setDate(startDate.getDate()+(this.newSubscriptionPlan.numOfWeeks*7));
      this.newSubscriptionPlan.endDate = endDate;
      this.newSubscriptionPlan.status = this.planStatus.ONGOING;

      console.log("see "+this.newSubscriptionPlan.endDate);
      
      console.log(this.newSubscriptionPlan);
      this.getCat();
      // this.sessionService.addPlanToCart(this.newSubscriptionPlan);
      // console.log(sessionStorage.cart);
      // this.done = true;
      // this.showSuccess();
      // this.newMessage();
      // this.load();

    
      // this.router.navigate(['/browse/categoryMain']);
      // console.log(this.selectedCategoryId);
      // this.getCat();
      // console.log(this.selectedCategory);
      // this.newSubscriptionPlan.category = this.selectedCategory;
      // console.log("a"+this.newSubscriptionPlan.category);
      // this.getCat();
      window.location.reload();

    }

  }

  getCat() {
    this.categoryService.getCategoryByCategoryId(this.selectedCategoryId).subscribe(
      response => { this.selectedCategory = response.category
      console.log("rec"+this.selectedCategory)
      this.newSubscriptionPlan.category = this.selectedCategory 
      this.sessionService.addPlanToCart(this.newSubscriptionPlan);
      console.log(sessionStorage.cart);
      this.done = true;
      this.showSuccess();
      document.getElementById('ninjaButton').click();

    },
      error => { console.log('damn')}
    )
  }

  load() {
    this.router.navigateByUrl('/browse');
  }

  showFailure() {
    this.toastr.error('Selected date is earlier than current date', 'Failed to add plan to cart')
  }

  showSuccess() {
    this.toastr.success('Plan added to cart');
  }

  test(planForm:NgForm) {
    console.log(this.deliveryDay);
  }

  newMessage() {
    this.sharingService.changeMessage("");
  }

}


//removed from button:
// (click)="modal.close('Save click')"