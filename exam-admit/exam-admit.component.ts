import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-exam-admit',
  templateUrl: './exam-admit.component.html',
  styleUrls: ['./exam-admit.component.css']
})
export class ExamAdmitComponent implements OnInit {
exam={user:{}};
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
  }

saveExam(){
	this.http.post('http://192.168.1.77/exam/', this.exam).subscribe(res => {
		let id = res['id'];
		this.router.nagivate(['/exam-admit',id]);

	},
	 (err) =>{console.log(err);
	}
   );
  
  }
}


 