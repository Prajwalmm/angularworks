import { Routes } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { ListComponent } from './components/list/list.component';
import { AddNewComponent } from './components/add-new/add-new.component';
import { DetailsComponent } from './components/details/details.component';
import { DeleteComponent } from './components/delete/delete.component';
import { UpdateComponent } from './components/update/update.component';

export const routes: Routes = [
    {path:'',redirectTo:'/Student',pathMatch:'full'},
    {path:'Student',component:StudentsComponent},
    {path:'List',component:ListComponent},
    {path:'AddNew',component:AddNewComponent},
    {path:'Details',component:DetailsComponent},
    {path:'Update',component:UpdateComponent},
    {path:'Delete',component:DeleteComponent},
    
];
