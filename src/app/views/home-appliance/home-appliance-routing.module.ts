import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeApplianceListComponent} from "./home-appliance-list/home-appliance-list.component";
import {HomeApplianceEditComponent} from "./home-appliance-edit/home-appliance-edit.component";


const routes: Routes = [
  {
    path: '', component: HomeApplianceListComponent, data: {
      title: "Lista de Eletro Domésticos"
    }
  },
  {
    path: 'create', component: HomeApplianceEditComponent,data: {
      title: "Criar Eletro Domésticos"
    },
  },
  {
    path: ':id', component: HomeApplianceEditComponent,data: {
      title: "Editar"
    },
  },
  {path: '**', redirectTo: 'home-appliances'}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeApplianceRoutingModule {
}
