import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { TitleComponent }  from './title.component';
import { HighlightDirective } from './highlightDirective'
import { UserService } from './user.service';

import { AwesomePipe } from './contact/awesome.pipe';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './contact/contact.service';
import { HighlightDirective as ContactHighlightDirective } from './contact/hightlight.directive'

@NgModule({
  imports: [ 
      BrowserModule,
      FormsModule
   ],
  declarations: [
       AppComponent,
       TitleComponent,
       HighlightDirective,
       
       AwesomePipe,
       ContactComponent,
       HighlightDirective
   ],
   providers:[ 
       UserService,
       ContactService
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
