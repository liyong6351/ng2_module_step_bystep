import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TitleComponent }  from './title.component';
import { HighlightDirective } from './highlightDirective'
import { UserService } from './user.service';


@NgModule({
  imports: [ BrowserModule ],
  declarations: [
       AppComponent,
       TitleComponent,
       HighlightDirective
   ],
   providers:[ 
       UserService
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
