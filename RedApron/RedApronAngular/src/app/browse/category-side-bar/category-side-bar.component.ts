import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../../service/category.service'
import { Category } from '../../models/Category'


@Component({
  selector: 'app-category-side-bar',
  templateUrl: './category-side-bar.component.html',
  styleUrls: ['./category-side-bar.component.css']
})
export class CategorySideBarComponent implements OnInit {

  categories: Category[];
  
  healthy: Category[];
  quick: Category[];
  vegetarian: Category[];
  baking: Category[];
  signature: Category[];
  seasonal: Category[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.retrieveAllCategories();
    this.filterCategories();

  }

  retrieveAllCategories() {
    this.categoryService.getCategories().subscribe(res => {
      console.log(res);
    },
      error => {
        console.log("****** category side bar " + error);
      }
    )
  }

  filterCategories(){
    for(var i in this.categories) {
      // if (cat.name.split(" ")[0] == "Healthy") {
      //   this.healthy.concat(cat)
      // } else if (cat.name.split(" ")[0] == "Quick") {
      //   this.quick.concat(cat)
      // }else if (cat.name.split(" ")[0] == "Vegetarian") {
      //   this.vegetarian.concat(cat)
      // }else if (cat.name.split(" ")[0] == "Baking") {
      //   this.baking.concat(cat)
      // }else if (cat.name.split(" ")[0] == "Signature") {
      //   this.signature.concat(cat)
      // }else if (cat.name.split(" ")[0] == "Seasonal") {
      //   this.seasonal.concat(cat)
      // }
      // console.log("HEALTHY " + this.healthy);
      console.log("filter");
    }

  }


}
