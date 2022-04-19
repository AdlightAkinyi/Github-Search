

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { HighlightDirective } from './highlight.directive';
import { BoldenPipe } from './bolden.pipe';







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HighlightDirective,
    BoldenPipe,
    

         
      
    
    
    
  ],
  imports:[
    BrowserModule,
      FormsModule,
      HttpClientModule,
      

  ],
     
      
  
  
  
   
   bootstrap: [AppComponent]
})
export class AppModule { }
