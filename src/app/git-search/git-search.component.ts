import { Component, OnInit } from '@angular/core';
import { GitSearch } from '../git-search';
import { GitSearchService } from '../git-search.service';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {

user: Object;
search: string;
/*

searchResults: Object; //GitSearch
searchQuery: string;
title: string;

*/

  constructor(private GitSearchService: GitSearchService) { }

  ngOnInit() {

    /*
    this.GitSearchService.gitSearch().subscribe( GitSearchService => {
      this.searchResults = GitSearchService
      this.searchResultsArray.push(this.searchResults);
      console.log(this.searchResultsArray);
    })
  */

  /*

 this.GitSearchService.gitSearch('angular').then( (response) => {
  console.log(response)
  this.searchResults = response;
}, (error) => {
  alert("Error: " + error.statusText)
})

*/

/*
this.route.data.subscribe( (result) => {
  this.title = result.title
});
*/

this.GitSearchService.getUser(this.search).subscribe(data => {
 
})

  }

/*

  gitSearch = () => {
    this.GitSearchService.gitSearch(this.searchQuery).then( (response) => {
      this.searchResults = response;
      console.log(this.searchQuery)
    }, (error) => {
      alert("Error: " + error.statusText)
    })
  }

  */
 
 onClick = (search: string) => {
  this.GitSearchService.getUser(this.search).subscribe(data => {
    this.user = data
    console.log(data)
  })
  }


}
