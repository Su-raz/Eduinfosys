import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-parents-list',
  templateUrl: './parents-list.component.html',
  styleUrls: ['./parents-list.component.css']
})
export class ParentsListComponent implements OnInit {

  parents: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  this.http.get('http://192.168.1.77/parents').subscribe(data => {
  		console.log('data ::')
  		console.log(data)
	    this.parents = data;
	  });
	}

}
