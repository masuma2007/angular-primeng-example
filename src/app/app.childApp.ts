import { Component, OnInit, Input, numberAttribute, booleanAttribute } from '@angular/core';
import {AppService} from 'src/app/app.service';
import {NormalOperationService} from 'src/app/app.normalOperationService';
import { FormsModule } from '@angular/forms';
import { University } from './university';



@Component({
	selector: 'child-app-root',
	templateUrl: './app.childApp.html',
	//styleUrls: ['./app.component.css']
})
export class ChildAppComponent  implements OnInit {
	@Input() name!:string;  
    @Input() nationality!:string;
    @Input({transform:numberAttribute}) phoneNumber!:number;
    @Input({transform:numberAttribute}) zipCode!:number;
    @Input({transform:numberAttribute}) homeNo!:number;
    @Input({transform:numberAttribute}) numberOfFamilyMember!:number;

    @Input() univ!:any;


constructor() {}
ngOnInit(){}




}