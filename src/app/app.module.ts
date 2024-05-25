import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { RouterModule, RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ColorDirective } from "./color.directive";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { UcasePipe } from "./ucase.pipe";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        ColorDirective,
        UcasePipe
    ],
    imports: [
        BrowserModule,
        CommonModule,
        RouterOutlet,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: SignupComponent
            }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }