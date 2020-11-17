import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'content',
    loadChildren:() => import('./content/content.module').then(m => m.ContentModule)
    
  },
  {
    path:'**',
    redirectTo:'content'
  }

];
@NgModule({
 imports:[RouterModule.forRoot(routes,{enableTracing:true})],
 exports:[RouterModule]
})

export class AppRoutingModule { }