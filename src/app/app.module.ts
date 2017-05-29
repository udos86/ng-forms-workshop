import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NG_VALIDATORS } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DynamicFormsCoreModule } from '@ng2-dynamic-forms/core';
import { DynamicFormsBootstrapUIModule } from '@ng2-dynamic-forms/ui-bootstrap';

import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

import { ValidationMessageComponent } from './validation/validation-message/validation-message.component';
import { CustomForbiddenValidatorDirective, customForbiddenValidator } from './validation/custom-forbidden-validator.directive';
import { DynamicValidationMessageDirective } from './validation/dynamic-validation-message.directive';
import { customAsyncFormGroupValidator } from "app/validation/custom-async-form-group-validator";

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    DynamicFormComponent,
    ValidationMessageComponent,
    CustomForbiddenValidatorDirective,
    DynamicValidationMessageDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    DynamicFormsCoreModule.forRoot(),
    DynamicFormsBootstrapUIModule,
    AppRoutingModule
  ],
  entryComponents: [ValidationMessageComponent],
  providers: [
    { provide: NG_VALIDATORS, useValue: customForbiddenValidator, multi: true },
    { provide: NG_VALIDATORS, useValue: customAsyncFormGroupValidator, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
