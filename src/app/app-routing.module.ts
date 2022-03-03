import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SheetComponent } from './sheet/sheet.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sheet', component: SheetComponent },
  { path: '', redirectTo: '/sheet', pathMatch: 'full' }

]; // sets up routes constant where you define your routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
