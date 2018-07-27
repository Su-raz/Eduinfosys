import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-accountant-add',
  templateUrl: './accountant-add.component.html',
  styleUrls: ['./accountant-add.component.css']
})
export class AccountantAddComponent implements OnInit {
 accountant = {user:{}};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  
   }

   saveAccountant() {
    this.http.post('http://192.168.1.77/accountant/', this.accountant)
      .subscribe(res => {
          let id = res['id'];
          this.router.navigate(['/accountant-add', id]);
        }, (err) => {
          console.log(err);
        }

      );
  }
}
