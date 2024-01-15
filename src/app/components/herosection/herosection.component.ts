import { Component } from '@angular/core';

@Component({
  selector: 'app-herosection',
  templateUrl: './herosection.component.html',
  styleUrls: ['./herosection.component.scss']
})
export class HerosectionComponent {
  images = [
    {
      imgSrc: 'https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&w=600',
      imgAlt: 'image',
    },
    {
      imgSrc: 'https://images.pexels.com/photos/1451040/pexels-photo-1451040.jpeg?auto=compress&cs=tinysrgb&w=600',
      imgAlt: 'image2',
    },
    {
      imgSrc: 'https://images.pexels.com/photos/887353/pexels-photo-887353.jpeg?auto=compress&cs=tinysrgb&w=600',
      imgAlt: 'image3',
    },
    {
      imgSrc: 'https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg?auto=compress&cs=tinysrgb&w=600',
      imgAlt: 'image4',
    },
    {
      imgSrc: 'https://images.pexels.com/photos/1337382/pexels-photo-1337382.jpeg?auto=compress&cs=tinysrgb&w=600',
      imgAlt: 'image5',
    },
  ]


}
