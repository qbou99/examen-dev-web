import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {ListPersonnelComponent} from "./list-personnel/list-personnel.component";
import {EditionComponent} from "./list-personnel/edition/edition.component";
import {EmployeDetailResolverResolver} from "./partage/employe-detail-resolver/employe-detail-resolver.resolver";

const routes: Routes = [
  { path: '', redirectTo: 'listMusics', pathMatch: 'full' },
  {path:'random', component: AccueilComponent},
  {path:'listMusics', component: ListPersonnelComponent},
  { path: 'edit/:id', component: EditionComponent, resolve: { employe: EmployeDetailResolverResolver } }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
