import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ListPersonnelService} from "../../partage/service/list-personnel.service";
import {Music} from "../../model/Music";

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.scss']
})
export class EditionComponent implements OnInit {

  employe: Music;

  /**
   * Component constructor
   */
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly listPersonnelService: ListPersonnelService
  ) {
    this.employe = {};
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
    this.route.data.subscribe(( employe: any) => (this.employe = employe.employe));
  }

  submit(employe: any) {
    this.listPersonnelService.update(employe).subscribe(() => {
      this.router.navigate(['/listPersonnel']).then(r => null);
    });
  }

  cancel() {
    this.router.navigate(['/listPersonnel']).then(r => null);
  }

}
