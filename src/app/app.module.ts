import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DynamicFormsCoreModule } from '@ng2-dynamic-forms/core';
import { DynamicFormsBootstrapUIModule } from '@ng2-dynamic-forms/ui-bootstrap';

import { AppComponent } from './app.component';
import { SampleFormsComponent } from './sample-forms/sample-forms.component';
import { SampleReactiveFormsComponent } from './sample-reactive-forms/sample-reactive-forms.component';
import { SampleDynamicFormsComponent } from './sample-dynamic-forms/sample-dynamic-forms.component';

import { ValidationMessageComponent } from './validation/validation-message/validation-message.component';
import { CustomEqualsValidatorDirective } from './validation/custom-equals-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    SampleFormsComponent,
    SampleReactiveFormsComponent,
    SampleDynamicFormsComponent,
    CustomEqualsValidatorDirective,
    ValidationMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    DynamicFormsCoreModule.forRoot(),
    DynamicFormsBootstrapUIModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
