import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { CategoryService } from '../../service/category.service'
import { Category } from '../../models/Category'
import { SharingServiceService } from '../../service/sharing-service.service';

import {FormBuilder, FormGroup, FormArray} from '@angular/forms'

@Component({
  selector: 'app-filter-main-ingredient-side-bar',
  templateUrl: './filter-main-ingredient-side-bar.component.html',
  styleUrls: ['./filter-main-ingredient-side-bar.component.css']
})
export class FilterMainIngredientSideBarComponent implements OnInit {

  categories: Category[] = [];
  category: Category
  healthy: Category[] = [];
  quick: Category[] = [];
  vegetarian: Category[] =[];
  baking: Category[] =[];
  signature: Category[] = [];
  seasonal: Category[] = [];
  nestedForm: FormGroup
  mainIngredients: Array<String> = [
    'Chicken', 'Fish', 'Beef', 'Pork', 'Shellfish', 'Lamb'
  ]
  selectedIngredientValues = []
  ratingValue 

 
  @Output() messageEvent = new EventEmitter<string>()
  @Output() ratingFilter = new EventEmitter()

  constructor(private _fb:FormBuilder,private categoryService: CategoryService,public sharingService: SharingServiceService) { }

  ngOnInit() {
    this.retrieveAllCategories();
    this.nestedForm = this._fb.group({
      filterIngredients: this.addMainIngredientControls()

    })
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
    // var temp : Category[] = []
    // this.sharingService.setData({"isGeneral": false, "categories": temp});

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

  sendRatingMessage(message) {
    console.log("EMITTING RATING : " + message)
    this.ratingFilter.emit(message)
  }

  addMainIngredientControls() {
    const arr = this.mainIngredients.map(element => {
      return this._fb.control(false)
    })
    return this._fb.array(arr)
  }

  get mainIngredientsArray() {
    return <FormArray>this.nestedForm.get('filterIngredients')
  }

  getselectedIngredientValues() {
    this.selectedIngredientValues = [];
    this.mainIngredientsArray.controls.forEach((control, i) => {
      if (control.value) {
        this.selectedIngredientValues.push(this.mainIngredients[i])
      }
    })
    console.log(this.selectedIngredientValues)
    this.sendMessage(this.selectedIngredientValues)
  }

  getRatingFilter() {
    console.log(this.ratingValue)
    this.sendRatingMessage(this.ratingValue)
  }

}

