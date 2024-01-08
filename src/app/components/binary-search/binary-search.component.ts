import { NONE_TYPE } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-binary-search',
  templateUrl: './binary-search.component.html',
  styleUrls: ['./binary-search.component.scss']
})
export class BinarySearchComponent implements OnInit {
  public list = [1, 3, 5, 7, 9];

  ngOnInit(): void {
  }

  showResult() {
    console.log(this.binarySearch(this.list, 3));
  }

  binarySearch(list: number[], item: number): number {
    //start and end of the list, according to the part that we are searching
    let start = 0;
    let end = list.length - 1;

    //while we cant't reach one element
    while(start <= end) {
      //sets the middle element
      let mid = Math.floor((start + end) / 2);
      // we start betting on the middle element of the list
      let bet = list[mid];

      // if our bet is correct, then we return it.
      if (bet == item) {
        return mid;
      }
      
      // if our bet is greater than the correct item, we decrease the end
      if (bet > item) {
        end = mid - 1; 
      } else {
        // if our bet is lower than the correct item, we increase the start
        start = mid + 1;
      }
    }
    // returns null if the item wasn't found.
    return null;
  }
}
