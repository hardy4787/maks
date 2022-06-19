import { Component } from '@angular/core';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.less']
})
export class LoadMoreComponent {
  loadMoreLog() {
    console.log('All items loaded :)')
  }
}
