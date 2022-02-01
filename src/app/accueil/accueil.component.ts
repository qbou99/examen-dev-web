import {Component} from '@angular/core';
import {Music} from "../model/Music";
import {ListPersonnelService} from "../partage/service/list-personnel.service";

@Component({
  selector: 'accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {

  music: Music = {};


  constructor(private readonly listPersonnelService:ListPersonnelService) {
    this.random();
  }


  /**
   * Returns random people
   */
  random() {
    this.listPersonnelService.fetchRandom().subscribe(music => {
      this.music = music;
    });
  }

  delete(person: Music){
    this.listPersonnelService.delete(person.id!).subscribe(() => {
      this.random();
    });
  }



}
