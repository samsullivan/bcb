import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, FormBuilder } from '@angular/forms';
import { BrowserModule  } from '@angular/platform-browser';
import { LayoutHeaderCmp }   from './bcb/components/layout-header';

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
    ],
   declarations: [
      LayoutHeaderCmp,
    ],
    bootstrap: [
      LayoutHeaderCmp,
    ],
})
export class AppModule {}
