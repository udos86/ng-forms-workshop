import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleFormsComponent } from './sample-forms/sample-forms.component';
import { SampleReactiveFormsComponent } from './sample-reactive-forms/sample-reactive-forms.component';
import { SampleDynamicFormsComponent } from './sample-dynamic-forms/sample-dynamic-forms.component';

const APP_ROUTES: Routes = [
    {
        path: "",
        redirectTo: "/sample-forms",
        pathMatch: "full"
    },
    {
        path: "sample-forms",
        component: SampleFormsComponent,
    },
    {
        path: "sample-reactive-forms",
        component: SampleReactiveFormsComponent,
    }, {
        path: "sample-dynamic-forms",
        component: SampleDynamicFormsComponent,
    }
];

@NgModule({
    
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}