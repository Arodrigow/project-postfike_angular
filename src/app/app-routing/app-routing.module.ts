import { LoginComponent } from './../login/login.component';
import { PostListComponent } from './../post-list/post-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: PostListComponent, }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
