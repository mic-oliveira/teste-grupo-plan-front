import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeApplianceListComponent} from './home-appliance-list/home-appliance-list.component';
import {HomeApplianceEditComponent} from './home-appliance-edit/home-appliance-edit.component';
import {
  AvatarModule,
  CardModule, FormModule,
  GridModule,
  PaginationModule,
  ProgressModule,
  TableModule
} from "@coreui/angular";
import {IconModule} from "@coreui/icons-angular";
import {HomeAppliancesService} from "../../data-services/home-appliances.service";
import {HomeApplianceRoutingModule} from "./home-appliance-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {PaginationComponent} from "../../components/pagination/pagination.component";
import {FormsModule} from "@angular/forms";
import {ManufacturerService} from "../../data-services/manufacturer.service";


@NgModule({
  declarations: [
    HomeApplianceListComponent,
    HomeApplianceEditComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    ProgressModule,
    AvatarModule,
    TableModule,
    CardModule,
    GridModule,
    IconModule,
    HomeApplianceRoutingModule,
    HttpClientModule,
    FormModule,
    PaginationModule,
    FormsModule
  ],
  providers: [HomeAppliancesService, ManufacturerService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeApplianceModule { }
