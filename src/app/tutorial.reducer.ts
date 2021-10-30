import { Injectable  } from "@angular/core";
import {Action } from "@ngrx/store";
import { Tutorial } from "./Model/tutorial.model";
import * as TutorialAction from "../app/tutorial.action"


const initialState : Tutorial = {
    name : 'Initial_State',
    url: 'http://google.com'
}


export function reducer(state : Tutorial[] = [initialState],action: TutorialAction.Actions  ){

switch(action.type){
    case TutorialAction.Add_tutorial:
        return [...state,action.payload];
        default: 
        return state;
}

}