import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { CategoryService } from '../../service/category.service'
import { Category } from '../../models/Category'
import { SharingServiceService } from '../../service/sharing-service.service';



@Component({
  selector: 'app-category-side-bar',
  templateUrl: './category-side-bar.component.html',
  styleUrls: ['./category-side-bar.component.css']
})
export class CategorySideBarComponent implements OnInit {

  categories: Category[] = [];
  category: Category
  healthy: Category[] = [];
  quick: Category[] = [];
  vegetarian: Category[] =[];
  baking: Category[] =[];
  signature: Category[] = [];
  seasonal: Category[] = [];

 
  @Output() messageEvent = new EventEmitter<string>()

  constructor(private categoryService: CategoryService,public sharingService: SharingServiceService) { }

  ngOnInit() {
    this.retrieveAllCategories();

  }

  retrieveAllCategories() {
    this.categoryService.getCategories().subscribe(res => {
      console.log(res);
      this.categories = res.categoryEntities
      this.filterCategories();

    },
      error => {
        console.log("****** category side bar " + error);
      }
    ) 
  }

  filterCategories(){
    for(let cat of this.categories) {
      if (cat.name.split(" ")[0] == "Healthy") {
        this.healthy.push(cat)
      } else if (cat.name.split(" ")[0] == "Quick") {
        this.quick.push(cat)
      }else if (cat.name.split(" ")[0] == "Vegetarian") {
        this.vegetarian.push(cat)
      }else if (cat.name.split(" ")[0] == "Baking") {
        this.baking.push(cat)
      }else if (cat.name.split(" ")[0] == "Signature") {
        this.signature.push(cat)
      }else if (cat.name.split(" ")[0] == "Seasonal") {
        this.seasonal.push(cat)
      }
    }

  }

  setCategory(categoryId:number) {
    console.log("HERE")
    this.retrieveCategory(categoryId)
    console.log("SIDEBAR CHILD : " + categoryId)
    this.sharingService.setData({"isGeneral": false, "categories": this.category});

}


retrieveCategory(categoryId:number) {
  this.categoryService.getCategoryByCategoryId(categoryId).subscribe(res => {
    console.log(res);
    this.category = res.category
    this.filterCategories();

  },
    error => {
      console.log("****** category side bar " + error);
    }
  ) 
}

  sendMessage(message) {
    console.log("EMITTING " + message)
    this.messageEvent.emit(message)
  }
}
