import {Component} from '@angular/core';


@Component({
	selector: 'deer-root',
	templateUrl: './deer.component.html',
	styleUrls: ['./app.component.css']
})



export class DeerComponent{
    value:any;
    date:any;
    mm:any;


    fruits=[
        {
          name:"apple",
          weight:"2lb",
          price:"$5"	
        },
        {
            name:"grape",
            weight:"1lb",
            price:"$2.32"
        },
        {
            name:"berry",
            weight:"1lb",
            price:"$1.36"
        }
       ]
    
     

}