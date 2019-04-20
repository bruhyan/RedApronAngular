import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { CategoryService } from '../../service/category.service'
import { Category } from '../../models/Category'
import { SharingServiceService } from '../../service/sharing-service.service';

import {FormBuilder, FormGroup, FormArray, NgForm} from '@angular/forms'

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
  period
  range
  startTime: number
  endTime: number
  minCal: number
  maxCal: number
 
  
  @Output() messageEvent = new EventEmitter<string>()
  @Output() ratingFilter = new EventEmitter()
  @Output() durationFilter = new EventEmitter()
  @Output() calorieFilter = new EventEmitter()

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

  sendDurationMessage(message) {
    console.log("EMITTING DURATION : " + message)
    this.durationFilter.emit(message)
  }

  sendCalorieMessage(message) {
    console.log("EMITTING CALORIE RANGE : " + message)
    this.calorieFilter.emit(message)
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

  onSubmit(filterForm:NgForm) {

    console.log(this.startTime)
    console.log(this.endTime)
    if (this.startTime<=this.endTime && this.startTime > 0 && this.endTime > 0) {
    this.period = [this.startTime,this.endTime]
        this.sendDurationMessage(this.period)
    }
  }

  onSubmitCal(calForm:NgForm) {
    console.log(this.minCal)
    console.log(this.maxCal)
    console.log(calForm)
    if (this.minCal<=this.maxCal && this.minCal > 0 && this.maxCal > 0) {
      this.range = [this.minCal,this.maxCal]
      this.sendCalorieMessage(this.range)
    }
    
  }

  clearIngredientFilter() {
    this.selectedIngredientValues = []
    console.log("CLEARED INGREDIENT FILTER IN CHILD : " + this.selectedIngredientValues)
    this.sendMessage(this.selectedIngredientValues)
    this.nestedForm = this._fb.group({
      filterIngredients: this.addMainIngredientControls()
    })
  }

  clearRatingFilter() {
    this.ratingValue = []
    console.log("CLEARED RATING FILTER IN CHILD : " + this.ratingValue)
    this.sendRatingMessage(this.ratingValue)
  }

  clearDurationFilter(filterForm:NgForm) {
    this.period = []
    console.log("CLEARED DURATION FILTER IN CHILD : " + this.period)
    this.sendDurationMessage(this.period)
    filterForm.reset()
  }

  clearCalorieFilter(calForm:NgForm) {
    this.range = []
    console.log("CLEARED CALORIE FILTER IN CHILD : " + this.range)
    this.sendCalorieMessage(this.range)
    calForm.reset()
  }

}

