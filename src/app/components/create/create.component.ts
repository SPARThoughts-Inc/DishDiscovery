import { Component } from '@angular/core';
import { CreateRecipeService } from 'src/app/service/create-recipe.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  recipe = {
    id:'',
    recipeTitle: '',
    recipeDesc: '',
    recipeIngridents:'',
    recipeMethod:'',
    recipeCookingTime:'',
    recipeImageUrl:'',
    likeCount:'',
    recipeComment:'',
    tags:''
  };
  constructor(private recipeService:CreateRecipeService ) {}

  createRecipe(): void {
    this.recipeService.createRecipe(this.recipe).subscribe(
      (response) => {
        console.log('Recipe created successfully:', response);
        alert('Recipe created successfully!');
        this.recipe = { id: '' , recipeTitle: '',
        recipeDesc: '',
        recipeIngridents:'',
        recipeMethod:'',
        recipeCookingTime:'',
        recipeImageUrl:'' ,
        likeCount:'',
        recipeComment:'',
        tags:''
      };
      },
      (error) => {
        console.error('Error creating recipe:', error);
        alert('Error creating recipe. Check the console for details.');
      }
    );
  }

}
