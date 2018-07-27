import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-single-add',
  templateUrl: './single-add.component.html',
  styleUrls: ['./single-add.component.css']
})
export class SingleAddComponent implements OnInit {
payment={user:{}};
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  	

  	}
  	savePayment(){

  		this.http.post('http://192.168.1.77/payment/', this.payment).subscribe(res =>{
  			let id =res['id'];
  			this.router.navigate(['/single-add', id]);
  	 }, (err) => {
          console.log(err);
        }

      );

  }

}