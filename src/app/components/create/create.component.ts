import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  recipe = {
    id:'',
    title: '',
    description: '',
    ingredients:'',
    method:'',
    cookingTime:'',
    imageInput:''
  };

}
