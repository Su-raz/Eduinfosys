import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-teacher-edit',
  templateUrl: './teacher-edit.component.html',
  styleUrls: ['./teacher-edit.component.css']
})
export class TeacherEditComponent implements OnInit {

 
  teacher ={user:{}};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.getTeacher(this.route.snapshot.params['id']);
  }

  getTeacher(id) {
    this.http.get('http://192.168.1.77/teacher/'+id).subscribe(data => {
      this.teacher = data;
      //console.log(this.student);
    });
  }

  updateTeacher() {
    var teacher = this.student;
  	console.log('updating..', student)
    this.http.put('http://192.168.1.77/teacher/'+teacher.id +'/', this.teacher)
      .subscribe(res => {
          alert('updated')
        }, (err) => {
          console.log(err);
        }
      );
  }

}
