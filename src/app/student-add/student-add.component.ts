import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  student = {user:{}};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

   saveStudent() {
    this.http.post('http://192.168.1.77/student/', this.student)
      .subscribe(res => {
          let id = res['id'];
          this.router.navigate(['/student-add', id]);
        }, (err) => {
          console.log(err);
        }

      );

  }

}