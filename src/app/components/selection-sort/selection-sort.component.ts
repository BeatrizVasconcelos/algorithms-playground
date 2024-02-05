import { Component } from '@angular/core';

@Component({
  selector: 'app-selection-sort',
  templateUrl: './selection-sort.component.html',
  styleUrls: ['./selection-sort.component.scss']
})
export class SelectionSortComponent {
  
  selectionSort(arr: number[]) {
    for (let i = 0, j = i + 1; i < arr.length, j < arr.length; i++, j++) {
      let min = i;

      if (arr[j] < arr[min]) {
        min = j;
      }

      const tmp = arr[min];
      arr[min] = arr[i];
      arr[i] = tmp;
    }
  }
}
