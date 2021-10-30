import { Injectable  } from "@angular/core";
import {Action } from "@ngrx/store";
import { Tutorial } from "./Model/tutorial.model";

export const Add_tutorial = '[TUTORIAL] Add';
export const Remove_tutorial = '[TUTORIAL] Remove';

export class Addtutorial implements Action {
    readonly type = Add_tutorial;
    constructor(public payload : Tutorial){}
}

export class Removetutorial implements Action{
    readonly type = Remove_tutorial;
    constructor(public payload : Tutorial){}
}

export type Actions = Addtutorial | Removetutorial ; 