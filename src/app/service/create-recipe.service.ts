// create-recipe.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateRecipeService {

  constructor(private http: HttpClient) {}

  // You can forward declare the function here
  createRecipe(recipe: any): Observable<any> {
    return this.http.post<any>('https://cwwej52r1l.execute-api.ap-south-1.amazonaws.com/dev/recipe', recipe);
  }
}
