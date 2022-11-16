import { Component, OnInit } from '@angular/core';
import {HomeAppliance} from "../../../models/home-appliance";
import {HomeAppliancesService} from "../../../data-services/home-appliances.service";
import {Router} from "@angular/router";
import {Observable, of, Subject} from "rxjs";
import {Paginate} from "../../../interfaces/paginate";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home-appliance-list',
  templateUrl: './home-appliance-list.component.html',
  styleUrls: ['./home-appliance-list.component.scss']
})
export class HomeApplianceListComponent implements OnInit {
  search = '';
  homeAppliances: Observable<HomeAppliance[]> = new Observable<HomeAppliance[]>();
  subject: Subject<string> = new Subject<string>();
  paginate: Paginate = {perPage: 15, current: 1, total: 1};

  constructor(private homeApplianceService: HomeAppliancesService, private router: Router) {
    this.subject.subscribe((search) => {
      this.homeApplianceService.get(this.paginate.current, 15, search).subscribe((homeAppliance: any) => {
        this.homeAppliances = of(homeAppliance.data);
        this.paginate.current = homeAppliance.meta.current_page;
        this.paginate.total = homeAppliance.meta.last_page;
        this.paginate.perPage = homeAppliance.meta.per_page;
      });
    })
  }

  ngOnInit(): void {
    this.subject.next(this.search);
  }

  searchQuery(search: string | null) {
    console.log(this.paginate.current);
    this.paginate.current = search != null ? 1 : this.paginate.current;
    this.subject.next(search ?? this.search);
  }

  changePage() {
    this.searchQuery(null);
  }

  delete(id: any){
    Swal.fire({
      text: 'Deseja realmente remover o eletro doméstico?',
      confirmButtonText: 'SIM',
      showCancelButton: true,
      cancelButtonText: 'NÃO',
      icon: "question"
    }).then((value) => {
      if (value.value == true) {
        this.homeApplianceService.delete(id).subscribe(() => {
          return Swal.fire({
            text: 'Eletro doméstico removido.',
            icon: 'success'
          }).then(() => this.searchQuery(null))

        })
      }
    })
  }

  edit(id: any) {
    this.router.navigate([`home-appliances/${id}`],).then(r => r);
  }

  create() {
    this.router.navigate([`home-appliances/create`],).then(r => r);
  }
}
