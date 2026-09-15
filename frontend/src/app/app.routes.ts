import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HistoireComponent } from './pages/histoire/histoire.component';
import { BatimentComponent } from './pages/batiment/batiment.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'batiment',
    component: BatimentComponent
  },
  {
    path: 'histoire',
    component: HistoireComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];