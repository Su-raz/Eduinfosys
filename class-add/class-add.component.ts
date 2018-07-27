import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-class-add',
  templateUrl: './class-add.component.html',
  styleUrls: ['./class-add.component.css']
})
export class ClassAddComponent implements OnInit {
	_class={user:{}};
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }
  saveClass(){
  	this.http.post('http://192.168.1.77/class/', this._class).subscribe(res =>{
  			let id =res['id'];
  			this.router.navigate(['/class-add', id]);
  	 }, (err) => {
          console.log(err);

  	 })
	}
}


