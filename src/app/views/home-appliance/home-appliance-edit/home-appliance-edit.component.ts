import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HomeAppliancesService} from "../../../data-services/home-appliances.service";
import {HomeAppliance} from "../../../models/home-appliance";
import {Manufacturer} from "../../../models/manufacturer";
import {ManufacturerService} from "../../../data-services/manufacturer.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home-appliance-edit',
  templateUrl: './home-appliance-edit.component.html',
  styleUrls: ['./home-appliance-edit.component.scss']
})
export class HomeApplianceEditComponent implements OnInit {
  homeAppliance: HomeAppliance = new HomeAppliance();
  manufacturers: Manufacturer[] = [];

  constructor(private activatedRouter: ActivatedRoute,
              private service: HomeAppliancesService,
              private manufacturerService: ManufacturerService,
              private router: Router) {
    const id = activatedRouter.snapshot.params['id'];
    if (id !== undefined){
      service.find(id).subscribe((homeAppliance: any) => {
        this.homeAppliance = homeAppliance.data;
      }, () => {
        this.router.navigate(['/home-appliances'])
      });
    }
    manufacturerService.get().subscribe((manufacturers: any) => {
      this.manufacturers = manufacturers.data;
    });
  }

  ngOnInit(): void {
  }

  submitForm() {
    this.service.createOrUpdate(this.homeAppliance).subscribe(() => {
      const message = this.homeAppliance.id === undefined ? 'Registro criado.' : 'Registro atualizado.'
      Swal.fire({
        text: message,
        icon: 'success',
      }).then(() => {
        this.router.navigate(['/home-appliances']).then()
      })
    });
  }
}
