import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DefaultLayoutComponent} from "./containers";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home-appliances',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Eletro domésticos'
    },
    children: [{
      path: 'home-appliances',
        loadChildren: () => import('./views/home-appliance/home-appliance.module').then((m) => m.HomeApplianceModule),
      },
    ],
  },

  {
    path: 'dashboard',
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'widgets',
        loadChildren: () =>
          import('./views/widgets/widgets.module').then((m) => m.WidgetsModule)
      },
    ]
  },
  {path: '**', redirectTo: 'home-appliances'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
