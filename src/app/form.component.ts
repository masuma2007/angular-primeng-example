import { Component,NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {University} from './university';



@Component({
	selector: 'form-app',
	templateUrl: './form.component.html'
	//styleUrls: ['./form.component.css']
})

export class FormComponent {
   constructor(){}
   a=['gfg1', 'gfg2', 'gfg3', 'gfg4'] 

    universities:University[]=[
        {
           name:"university of texas ",
           students:340,
           teachers:40
        },
        {
            name:"university of pittsburg",
            students:400,
            teachers:60
        },
        {
            name:"university of iowa",
            students:500,
            teachers:100
        }
    ];


    university:University = {name:"Nuru",
students:0,
teachers:0};

    getUniversity(data:University) {
        this.university = data;
        console.log(this.university.name)
    }

}