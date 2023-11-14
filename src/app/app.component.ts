import { Component, OnInit } from '@angular/core';
import {AppService} from 'src/app/app.service';
import {NormalOperationService} from 'src/app/app.normalOperationService';
import { FormsModule } from '@angular/forms';



@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
	
 
   constructor(private appService : AppService, private normalOperation : NormalOperationService) {

   }


	
    books = [

		{
			title: "Love is beautiful.",
			author: "Masuma",
			img:"https://m.media-amazon.com/images/I/81t-IstQ+ZL._SY466_.jpg"
		},
		{
			title:"Pete the Cat: Pete at the Beach.",
			author:"James Dean ",
			img:"https://m.media-amazon.com/images/I/81hCIfZcnfL._SY466_.jpg",
			description: " this books for kids to read this book to increase their knowledge with fun. "
		},
		{
			title:"Clifford's Good Deeds.",
			author:" Norman Bridwell",
			img:"https://m.media-amazon.com/images/I/71RsFVNONuL._SY466_.jpg",
			description: " this books for kids to read this book to increase their knowledge with fun. "
		},
		
		{
           title:"I Love You More - Children's Padded Board Book.",
		   author:"Little Hippo Books",
		   img:"https://m.media-amazon.com/images/I/91Xv1gxxijL._SY466_.jpg",
		   description: " this books for kids to read this book to increase their knowledge with fun. "
		},

		
		{
			title:"If Animals Kissed Good Night Board book.",
			author:"Ann Whitford Paul",
			img:"https://m.media-amazon.com/images/I/81nzxODnaJL._SY466_.jpg",

		    description: " this books for kids to read this book to increase their knowledge with fun. "
		}

	];

   students=[
	{
		name:"joly",
		rollNumber:12345,
		school:"AT primary school",
		college:"ghost govt college."
	},
	{
		name:"pply",
		rollNumber:23456,
		school:"talent primary school",
		college:"Meritorious primary school",

	},
	{
		name:"Lily",
		rollNumber:189792,
		school:" Govt. laboratory school ",
		college:"cantonment school and college."
	}

   ];

   products=[
	{
	name:"yogart",
	price:"$2.01",
	production_country:"USA",
	ISBN:"123RT"
   },
   {
	name:"sugar",
	price:"$1.5",
	producction_country:"Brazil",
	ISBN:"345ft"
   },
   {
	name:"potato",
	price:"$3",
	production_country:"sweden",
	ISBN:"456cr"
   },
   {
	name:"rice",
	price:"$10.25",
	production_country:"Thailand",
	ISBN:"786st"
   }

   ]

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

   trees=[
	{
	 name:"rose",
	 height:40,
	 color:"red",
	 weight:2	
	},
	{
      name:"merigold",
	  height:20,
	  color:"yellow",
	  weight:1

	},
	{
      name:"cherry",
	  height:15,
	  color:"white",
	  weight:1.5
	}
   ]
   tree:any;
   findTree(ful:any){
	this.tree= ful;
   }
 fruit:any;
 getFruit(fall:any){
	this.fruit= fall;
 }
   product:any;
   findProduct(food:any){
	this.product=food;
   }
  student:any;
  findStudent(student :any){
	this.student=student;
	console.log(student);
  }



	addBook(data:any) {
		//this.books.push(data);
		this.appService.addElement(this.books, data);
	}

	deleteBook(data:any) {
		let n = this.books.indexOf(data);
		this.books.slice(n, 1);
		this.appService.deleteElement(this.books );
	}
	


ngOnInit(){
	//this.addBook();
	
	//this.getEmployees();
	//this.getUsers();
	//this.getNameOfEmployees();
	this.getEmployee(5);
	this.getUsers();

}

employees:any;
names:any;
users:any;
allUsers:any;
getEmployees() {
	this.appService.getEmployees().subscribe(res => {
		console.log(res.data[0]);
        this.employees = res.data;
	});
 
}
/*getNameOfEmployees() {
	this.appService.getNameOfEmployees().subscribe(nam => {
		console.log(nam.data);
		this.names = nam.data;
	});

}*/


employee : any;

getEmployee(id:any) {
	this.appService.getEmployeeById(id).subscribe(emp => {
		this.employee = emp.data;
	})
}


createEmployee(data : any) {

	/*const employee = {
        name : "nuru",
		salary : "1200",
		age: "39"
	};*/
  this.appService.createEmployee(data).subscribe(emp  =>{
	console.log(emp);
  });

}


createStudent(){
	const student = {
		name:"Essam",
		Grade:"1",
		age:"6"
	};
	this.appService.createStudent(student).subscribe(stu =>{

   console.log(stu);
	});

}

createUser(user:any){
	this.appService.createUser(user).subscribe(dog=>{
        console.log(dog);
	})
}

getUsers(){
	this.appService.getUsers().subscribe(info=>{
		this.users=info;
	})
}

getAllUsers(){
	this.appService.getAllUsers().subscribe(data=>{
		this.allUsers=data;
	})
}
maxNumber : any; 

getMaxNumber(x:any) {
	this.maxNumber = x;
}

minNumber:any;
getMinNumber(x:any,y:any){
	this.minNumber = Math.min(x,y);
}

onButtonClick(name :any){
	alert("you are here Mr. "+ name );
	console.log("you are here Mr. "+ name )
}

onButtonMouseOver(){
	alert('mouse over')
}
public greeting =""
onClickButton(){
this.greeting="i am masusma";
}

xy:any="nayan";
title='employee detail'

currentUser!:any;

getCurrentUser(data : any) {
	this.currentUser = data;
}
sum:any;
doSum(s:number,t:number){
	this.sum = s+t;
}

substract:any;
doSubstract(c:number,d:number){
	this.substract = c-d;
}

multiply:any;
doMultiply(u:number,v:number){
	this.multiply = u*v;

}
divide:any;
doDivide(i:number,j:number){
	this.divide=i/j;
}

combined:any;
findSum(a:number,b:number,e:number){
	this.combined =a+b+e;
}

multiple:any;
getMultiple(f:number,g:number,h:number){
	this.multiple=f*g*h;
}

maxNum:any;
getMaxNum(data:any){
	console.log("data is:>>>>>>>>>"+data.isChecked);
	console.log("data is:>>>>>>>>>"+data.fruit);

	this.maxNum=Math.max(data.n,data.m)
}
firstName:any = "Aakifah";
secondName:any="jahan";
fullName:any = this.firstName +" "+ this.secondName;

total:any;
getSUm(arr:any) {
	let sum = 0;
 for (let i=0;i<arr.length;i++){
	sum= sum+arr[i];
 }

this.total = sum;

}

evenNumbers:any;

getEven(arr1:any){
 let evenArr=[];

	for(let i=0;i<arr1.length; i++){
	{
		arr1[i]=arr1[i]*5;
		evenArr.push(arr1[i]);
	}
}

this.evenNumbers=evenArr;
}

}



