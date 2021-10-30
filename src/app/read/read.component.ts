import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { Tutorial } from '../Model/tutorial.model';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  tutorial :Observable<Tutorial[]>;
  constructor(private store : Store<AppState>) {
    this.tutorial = store.select('tutorial');
   }

  ngOnInit(): void {
  }

}
