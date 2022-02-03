import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit 
{
  page : number =1;
  filter : string;
  constructor(public postService : PostService) { }

  ngOnInit(): void {
    //LifeCycle Hook      --initialize
    console.log("Welcome to lifecycle hook");
   this.postService.bindListPosts();  //2
  }
  getPosts()
  {
    //call service method
    this.postService.GetPostsAll().subscribe(
    response => {
      console.log('Retreiving from list');
      console.log(response);
    },
    error=>{
      console.log('Error Occured!');
    }
    );
  }

   //edit employee
   UpdatePost(postId : number)
   {
     console.log(postId);
     //navigate to edit form with selected employee details
 
   }
 
 
   //delete employee
   DeletePost(postId : number)
   {
     if(confirm('Are you sure to DELETE the record ?'))
     {
         this.postService.DeletePost(postId).subscribe(
           response =>
           {
             this.postService.bindListPosts();
           },
           error=>
           {
             console.log(error);
           }
         );
     }
   }




}
