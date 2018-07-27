import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.css']
})
export class TeacherAddComponent implements OnInit {
 teacher={user:{}};
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveTeacher(){
  	 this.http.post('http://192.168.1.77/teacher/', this.teacher)
      .subscribe(res => {
          let id = res['id'];
          this.router.navigate(['/teacher-add', id]);
        },(err) => {
          console.log(err);
      }
      );
  }

}