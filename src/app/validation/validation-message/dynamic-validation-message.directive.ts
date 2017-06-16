import { Directive, Input, ViewContainerRef, HostListener, ComponentFactoryResolver, ComponentFactory, ComponentRef } from '@angular/core';
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

  @HostListener('blur') onHostBlur() {

    this.componentRef = this.viewContainerRef.createComponent(this.componentFactory);
    this.componentInstance = this.componentRef.instance as ValidationMessageComponent;
    this.componentInstance.control = this.control;
  }

  @HostListener('focus') onHostFocus() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver, public viewContainerRef: ViewContainerRef) {
    this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(ValidationMessageComponent);
  }
}
