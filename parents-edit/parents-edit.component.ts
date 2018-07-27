import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-parents-edit',
  templateUrl: './parents-edit.component.html',
  styleUrls: ['./parents-edit.component.css']
})
export class ParentsEditComponent implements OnInit {
parents={user:{}};

   constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }


  ngOnInit() {
  	this.getParents(this.route.snapshot.parms['id']);

  }

getParents(id){
    this.http.get('http://192.168.1.77/parents/'+id).subscribe(data => {
    	this.parents= data;

    	 });
 }
 
updateParents() {
    var parents = this.parents;
  	console.log('updating..', parents)
    this.http.put('http://192.168.1.77/parents/'+parents.id +'/', this.parents)
      .subscribe(res => {
          alert('updated')
        }, (err) => {
          console.log(err);
        }
      );
     }
	}