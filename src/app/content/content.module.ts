import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContentRoutingModule } from './content.routing.module';
import { HomeComponent } from './home/home.component';
import { HomeService } from "./home/service/home.service";

@NgModule({
declarations:[
    HomeComponent
],
imports:[ContentRoutingModule,CommonModule],
providers:[HomeService]
}
)

export class ContentModule{}