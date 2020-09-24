import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject } from "rxjs"
import { ThrowStmt } from '@angular/compiler';

@Injectable({providedIn: "root"})
export class PostsService {
  private posts : Post[] = []
  private postsUpdated = new Subject<Post[]>()

  getPosts() {
    return [...this.posts]
  }

  getPostUpdatedListener() {
    return this.postsUpdated.asObservable()
  }

  addPost(title: string, content: string) {
    const post: Post = {title: title, content: content}
    this.posts.push(post)
    this.postsUpdated.next([...this.posts])
  }
}
