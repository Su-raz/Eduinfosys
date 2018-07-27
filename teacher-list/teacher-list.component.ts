import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
 teachers: any ;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  	 this.http.get('http://192.168.1.77/teacher').subscribe(data => {
  		console.log('data ::')
  		console.log(data)
	    this.teachers = data;
	  });
  }

}
