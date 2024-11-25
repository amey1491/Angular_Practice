import { Routes } from '@angular/router';
import { BatchDetailsComponent } from './batch-details/batch-details.component';
import { BatchListComponent } from './batch-list/batch-list.component';
import { InvalidComponent } from './invalid/invalid.component';
import { WelcomeComponent } from './welcome/welcome.component';
export const routes: Routes = [

    {
        path:"", // default route
        component:WelcomeComponent
    },
    {
        path:'batchdetails',  //specific route
        component:BatchDetailsComponent
    },
    {
        path:'batchlist', //specific route
        component:BatchListComponent
    },

    {
        path:'**',
        component:InvalidComponent   //wild card route
    },    

];
