import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as TutorialActions from '../tutorial.action';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store : Store<AppState>) { }

addTutorial( name,url){
  this.store.dispatch(new TutorialActions.Addtutorial({name : name , url : url}))
}

  ngOnInit(): void {
  }

}
