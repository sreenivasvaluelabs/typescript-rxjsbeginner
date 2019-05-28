// Import stylesheets
import './style.css';
import { Observable, of, from, fromEvent, concat, interval , throwError,Subject} from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { allBooks, allReaders } from './book';
import { map, mergeMap, filter, tap, catchError, take, takeUntil } from 'rxjs/operators';


  
// let allBooksObservable$ = Observable.create(subscriber => {

//   if (document.title !== 'RxBookTracker') {
//     subscriber.error('Incorrect page title.');
//   }

//   for (let book of allBooks) {
//     subscriber.next(book);
//   }

//   setTimeout(() => {
//     subscriber.complete();
//   }, 2000);

//   return () => console.log('Executing teardown code.');
  
// });
//   allBooksObservable$.subscribe(book => console.log(book.title));




  //let source1$ = of('hello', 10, true, allReaders[0].name);

//source1$.subscribe(value => console.log(value));

//let source2$ = from(allBooks);

//source2$.subscribe(book => console.log(book.title));

//concat(source1$, source2$)
  //.subscribe(value => console.log(value));

// let button = document.getElementById('readersButton');

// fromEvent(button, 'click')
//   .subscribe(event => {
//     console.log(event);
//     let readersDiv = document.getElementById('readers');

//     for (let reader of allReaders) {
//       readersDiv.innerHTML += reader.name + '<br>';
//     }
//   });

// let button = document.getElementById('readersButton');

// fromEvent(button, 'click')
//   .subscribe(event => {
//     ajax('https://jsonplaceholder.typicode.com/todos')
//       .subscribe(ajaxResponse => {
//         console.log(ajaxResponse);
//         let readers = ajaxResponse.response;

//         let readersDiv = document.getElementById('readers');

//         for (let reader of readers) {
//           readersDiv.innerHTML += reader.title+ '<br>';
//         }

//       });
//   });


// let myObserver = {
//   next: value => console.log(`Title: ${value}`),
//   error: err => console.log(`ERROR: ${err}`),
//   complete: () => console.log(`All done!`)
// };

// let source1$ = of(1,2,3);
// source1$.subscribe(myObserver);


// let source1$ = of(1,2,3);
// source1$.subscribe(
//     value => console.log(`Title: ${value}`),
//    err => console.log(`ERROR: ${err}`),
//    () => console.log(`All done!`)
// );


// let books$ = from(allBooks);

// let booksObserver = {
//   next: book => console.log(`Title: ${book.title}`),
//   error: err => console.log(`ERROR: ${err}`),
//   complete: () => console.log(`All done!`)
// };
// books$.subscribe(booksObserver);
// books$.subscribe(
//   book => console.log(`Title: ${book.title}`),
//   err => console.log(`ERROR: ${err}`),
//   () => console.log(`All done!`)
// );

// let currentTime$ = new Observable(subscriber => {
//   const timeString = new Date().toLocaleTimeString();
//   subscriber.next(timeString);
//   subscriber.complete();
// });

// currentTime$.subscribe(
//   currentTime => console.log(`Observer 1: ${currentTime}`)
// );

// setTimeout(() => {
//   currentTime$.subscribe(
//     currentTime => console.log(`Observer 2: ${currentTime}`)
//   );
// }, 1000);

// setTimeout(() => {
//   currentTime$.subscribe(
//     currentTime => console.log(`Observer 3: ${currentTime}`)
//   );
// }, 2000);

// let timesDiv = document.getElementById('times');
// let button = document.getElementById('timerButton');

// //let timer$ = interval(1000);
// let timer$ = new Observable(subscriber => {
//   let i = 0;
//   let intervalID = setInterval(() => {
//     subscriber.next(i++);
//   }, 1000);

//    return () => {
//     console.log('Executing teardown code.');
//     clearInterval(intervalID);
//   }
  
// });

// let timerSubscription = timer$.subscribe(
//   value => timesDiv.innerHTML += `${new Date().toLocaleTimeString()} (${value}) <br>`,
//   null,
//   () => console.log('All done!')
// );


// fromEvent(button, 'click')
//   .subscribe(
//     event => timerSubscription.unsubscribe()
//   );


// let source$= of(1,2,3,4,5);
// source$.pipe(
//   map(value => value*2),
//   filter(mappedValue => mappedValue > 5)
// ).subscribe(
//   finalValue=>console.log(finalValue)
// );

//  ajax('https://jsonplaceholder.typicode.com/todos') // correct URL is '/api/books'
//   .pipe(
//     mergeMap(ajaxResponse => ajaxResponse.response),
//     filter(user => user.userId < 3),
//     tap(oldUser => console.log(`User id: ${oldUser.id}`)),
//     //catchError(err => of({title: 'Corduroy', author: 'Don Freeman'}))
//     //catchError((err, caught) => caught)
//     //catchError(err => throw `Something bad happened - ${err.message}`)
//     //catchError(err => return throwError(err.message))
//   )
//   .subscribe(
//     finalUser => console.log(`final userID: ${finalUser.userId}`),
//     error => console.log(`ERROR: ${error}`)
    
//   );


// let source$= of(1,2,3,4,5);
// function doubleOperator(){
// return map(value => value *2);
// }
// source$.pipe(
//   doubleOperator()
// ).subscribe(
//   doubleValue => console.log(doubleValue)
// );


let subject$ = new Subject();

subject$.subscribe(
  value => console.log(`Observer 1: ${value}`)
);

subject$.subscribe(
  value => console.log(`Observer 2: ${value}`)
);

subject$.next('Hello!');

let source$ = new Observable(subscriber => {
  subscriber.next('Greetings!');
});

source$.subscribe(subject$);