import { Directive, Input, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, ComponentRef } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ValidationMessageComponent } from './validation-message.component';

@Directive({
  selector: '[dynamicValidationMessage]'
})
export class DynamicValidationMessageDirective {

  @Input('dynamicValidationMessage') control: AbstractControl;

  componentFactory: ComponentFactory<ValidationMessageComponent>
  componentRef: ComponentRef<ValidationMessageComponent>;
  componentInstance: ValidationMessageComponent

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) {
    this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(ValidationMessageComponent);
  }
}
