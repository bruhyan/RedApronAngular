import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../../../service/recipe.service';
import { StepService } from '../../../service/step.service';

import { Recipe } from 'src/app/models/Recipe';
import { Step } from 'src/app/models/Step';

@Component({
  selector: 'app-recipe-instructions',
  templateUrl: './recipe-instructions.component.html',
  styleUrls: ['./recipe-instructions.component.css']
})
export class RecipeInstructionsComponent implements OnInit {
  @Input() num: number
  recipe
  steps
  mainInstruction
  instruction
  orderNum

  constructor(private recipeService: RecipeService, private stepService: StepService) { }

  ngOnInit() {
    this.retrieveSteps();

  }

  retrieveSteps() {
    console.log("RECIPE INSTRUCTIONS retrieving steps ")
    this.stepService.getStepsByRecipeId(this.num).subscribe(res => {
      this.steps = res.stepEntities
      console.log("RECEIVED : " + this.steps);
      // for (let step of steps) {
      //   this.mainInstruction = step.instruction.split(":")[0]
      //   this.instruction = step.instruction.split(":")[1]
      // }
    },
      error => {
        console.log("****** recipe main content recipe retrieval " + error);
      }
    ) 
  }

}
