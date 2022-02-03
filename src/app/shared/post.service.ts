import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
    //retrieve all data from get method  --http
    posts: Post[];   //stores all post detail
    formData: Post = new Post(); 

  constructor(private httpClient: HttpClient) { }

  GetPostsAll(): Observable<any>
  {
    //https://localhost:44396/api/posts  --put in environment
    return this.httpClient.get(environment.apiUrl + '/api/posts');
  }
  //2  or can use this 
  bindListPosts()
  {
    this.httpClient.get(environment.apiUrl + '/api/posts')
    .toPromise().then(
      response=>{
        console.log("from service");
        console.log(response);
        this.posts = response as Post[];
      }
    );
  }

  //delete post
  DeletePost(Id : number)
  {
    return this.httpClient.delete(environment.apiUrl + "/api/posts/" +Id);
  }

}
