import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchLivePage } from './search-live';

@NgModule({
  declarations: [
    SearchLivePage
  ],
  imports: [
    IonicPageModule.forChild(SearchLivePage),
  ],
})
export class SearchLivePageModule {}
