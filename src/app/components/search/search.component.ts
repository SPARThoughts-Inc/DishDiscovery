import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchQuery: string = '';

  constructor(private router: Router) { }


  search() {
    // Implement your search logic here, e.g., fetch data based on the search query
    console.log('Search query:', this.searchQuery);
    // Update search results or perform other actions as needed
  }
  navigateToSearch() {
    // Navigate to the "/search" endpoint
    this.router.navigate(['/search']);
  }
}
