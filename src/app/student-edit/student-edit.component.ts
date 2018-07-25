import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  student ={user:{}};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.getStudent(this.route.snapshot.params['id']);
  }

  getStudent(id) {
    this.http.get('http://192.168.1.77/student/'+id).subscribe(data => {
      this.student = data;
      //console.log(this.student);
    });
  }

  updateStudent() {
    var student = this.student;
  	console.log('updating..', student)
    this.http.put('http://192.168.1.77/student/'+student.id +'/', this.student)
      .subscribe(res => {
          alert('updated')
        }, (err) => {
          console.log(err);
        }
      );
  }

}
