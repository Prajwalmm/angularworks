import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { AddEmpComponent } from './Components/add-emp/add-emp.component';
import { EditEmpComponent } from './Components/edit-emp/edit-emp.component';
import { DeleteEmpComponent } from './Components/delete-emp/delete-emp.component';
import { ListEmpComponent } from './Components/list-emp/list-emp.component';

export const routes: Routes = [
{
    path:'',redirectTo:'login',pathMatch:'full'
},
{
    path:'login', component:LoginComponent
},
{
    path:'layout',component:LayoutComponent,
    children:[
        {
            path:'add-emp',component:AddEmpComponent
        },
        {
            path:'edit-emp',component:EditEmpComponent
        },
        {
            path:'delelte-emp',component:DeleteEmpComponent
        },
        {
            path:'list',component:ListEmpComponent
        }
    ]
}

];
