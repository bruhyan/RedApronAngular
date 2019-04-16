import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../../service/category.service'
import { Category } from '../../models/Category'


@Component({
  selector: 'app-category-side-bar',
  templateUrl: './category-side-bar.component.html',
  styleUrls: ['./category-side-bar.component.css']
})
export class CategorySideBarComponent implements OnInit {

  categories: Category[] = [];
  
  healthy: Category[] = [];
  quick: Category[] = [];
  vegetarian: Category[] =[];
  baking: Category[] =[];
  signature: Category[] = [];
  seasonal: Category[] = [];

  constructor(private categoryService: CategoryService) { }

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


}
