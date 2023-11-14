import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NormalOperationService {
    
    getMaxValue(a : number, b : number) {
        return Math.max(a, b);
    }
}