import { Injectable } from '@angular/core';
import { GitSearch } from './git-search';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {

  constructor(private http: HttpClient) { }

  getUser = (user: string) => {
   return this.http.get('https://api.github.com/users/'+ user);
}

/*
gitSearch = (query: string) => {
  let promise = new Promise((resolve, reject) => {
      if (this.cachedValues[query]) {
          resolve(this.cachedValues[query])
      }
      else {
          resolve("Placeholder");
      }
  })
  return promise;
}
*/

}