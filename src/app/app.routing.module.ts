import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

const APP_ROUTES: Routes = [
    {
        path: "",
        redirectTo: "/template-form",
        pathMatch: "full"
    },
    {
        path: "template-form",
        component: TemplateFormComponent,
    },
    {
        path: "reactive-form",
        component: ReactiveFormComponent,
    }, {
        path: "dynamic-form",
        component: DynamicFormComponent,
    }
];

@NgModule({
    
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}