import { Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

export const routes: Routes = [
    {
        path: 'student-list',
        component:StudentListComponent
    },
    {
        path: 'add-student',
        component:AddStudentComponent
    },
    {
        path: 'student-details',
        component:StudentDetailsComponent
    },
    {
        path: 'delete-student',
        component:DeleteStudentComponent
    },
    {
        path:'update-student',
        component:UpdateStudentComponent
    },
];
