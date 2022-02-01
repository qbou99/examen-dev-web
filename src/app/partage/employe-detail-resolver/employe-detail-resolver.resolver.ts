import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ListPersonnelService} from "../service/list-personnel.service";
import {Music} from "../../model/Music";

@Injectable({
  providedIn: 'root'
})
export class MusicDetailResolverResolver implements Resolve<Music> {

  constructor(private readonly peopleService: ListPersonnelService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Music> {
    const musicId: string | null = route.paramMap.get('id');
    if(musicId != null){
      return this.peopleService.fetchOne(musicId);
    }
    else
      return new Observable<Music>();
  }
}
