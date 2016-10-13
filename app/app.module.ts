import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

/** App Root */
import { AppComponent }  from './app.component';
import { TitleComponent }  from './title.component';
import { HighlightDirective } from './highlightDirective'
import { UserService } from './user.service';

/* Contact Imports */
import { ContactModule }      from './contact/contact.module';

@NgModule({
  imports: [ 
      BrowserModule,
      ContactModule
   ],
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
