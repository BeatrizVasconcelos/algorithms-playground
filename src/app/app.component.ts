import { Component } from '@angular/core';
import { BehaviorSubject, Observable, Subject, catchError, combineLatest, concat, concatMap, delay, exhaustMap, flatMap, from, map, merge, mergeMap, of, switchMap } from 'rxjs';
export interface UserInterface {
  id: string;
  name: string;
  age: number;
}

export interface UserDetailsInterface {
  id: string;
  age: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'algorithms-playground';
}
