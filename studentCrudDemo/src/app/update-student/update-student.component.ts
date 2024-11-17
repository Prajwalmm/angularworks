import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.css'
})
export class UpdateStudentComponent implements OnInit { 
  studentObj: any = { 
  "studentId": 0, 
  "studentName": "", 
  "studentGrade": "", 
  "studentRollNo": "", 
  "isActive": true, 
  "createdDate": "", 
  "modifiedDate": ""
  } 
  studentService = inject(StudentService) 
  studentList: any[] = []; 
  ngOnInit(): void { 
  this.loadStudents(); 
  } 
  loadStudents() { 
  this.studentService.getStudents().subscribe((res: any) => { 
  this.studentList = res; 
  }) 
  } 
  onEdit(data: any) { 
  debugger; 
  this.studentObj = data; 
  } 
  http = inject(HttpClient); 
  onUpdate() { 
    debugger; 
    this.http.put("https://localhost:7088/api/TblStudents/" + 
   this.studentObj.studentId, this.studentObj).subscribe((res: any) =>
   { 
    debugger; 
    if (res.result) 
    alert("Student Record Created!"); 
    else { 
    alert("Some Problem in Student Updation") 
    } 
    }) 
    } 
   }  


