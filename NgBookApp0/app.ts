/* Basic Angular App */
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'hello',
  template: '<div> Murugan Says Hi ..,  </div>'
})
class HelloWorld {}

@NgModule({
  declarations: [HelloWorld],
  imports: [BrowserModule],
  bootstrap: [HelloWorld],
})
class HelloWorldModuleApp{}

platformBrowserDynamic().bootstrapModule(HelloWorldModuleApp);