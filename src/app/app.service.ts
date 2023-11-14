import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class AppService {
    constructor(private http : HttpClient) {

    }

    public addElement(arr:any[], element:any) {
        arr.push(element);
    }
    public deleteElement(arr:any[]){
        arr.pop();

    }

    public getEmployees() : Observable<any> {
        return this.http.get("https://dummy.restapiexample.com/api/v1/employees");

    }
   

    getEmployeeById(id:number) : Observable<any>{
       const url = "https://dummy.restapiexample.com/api/v1/employee/" + id;

       return this.http.get(url);
    }

    createEmployee(employee : any):Observable<any> {
        return this.http.post("https://dummy.restapiexample.com/api/v1/create", employee);
    }

    createStudent(student:any) {
        return this.http.post("https://dummy.restapiexample.com/api/v1/create", student)
    }
    
    createUser(user:any){
        return this.http.post("http://localhost:8080/create",user)
    }

   public getUsers(){
    return this.http.get ("http://localhost:8080/users")
   }

   public getAllUsers(){
    return this.http.get("http://localhost:8080/users");
   }
   
       // return this.http.post("http://localhost:8080/create", data)
       //"http://localhost:8080/users"

}
