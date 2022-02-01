import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";
import {Music} from "../../model/Music";


@Injectable({
  providedIn: 'root'
})
export class ListPersonnelService {

  private employees = new BehaviorSubject<number>(-1);

  private urlServer:any = {};

  constructor(private readonly http: HttpClient) {

    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls

    Object.keys(environment.backend.endpoints).forEach(
      // @ts-ignore
      k => (this.urlServer[k] = `${baseUrl}${environment.backend.endpoints[k]}`)
    );
    console.log(this.urlServer);

  }

  get employees$(): Observable<number> {
    return this.employees.asObservable();
  }

  updatedEmployeeList(data: number){
    this.employees.next(data);
  }

  fetch(): Observable<Music[]> {
    return this.http.get<Music[]>(this.urlServer.toutesLesMusiques);
  }

  search(title: number): Observable<Music[]> {
    return this.http.get<Music[]>(this.urlServer.filterByTitle.replace(':title', title));
  }

  fetchRandom(): Observable<Music> {
    return this.http.get<Music>(this.urlServer.musiqueAleatoire);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.urlServer.uneMusique.replace(':id', id));
  }

  create(employe: Music): Observable<Music> {
    return this.http.post<Music>(this.urlServer.toutesLesMusiques, employe);
  }

  fetchOne(id: string): Observable<Music> {
    return this.http.get<Music>(this.urlServer.uneMusique.replace(':id', id));
  }

  update(employe: Music): Observable<Music> {
    return this.http.put<Music>(this.urlServer.uneMusique.replace(':id', employe.id), employe);
  }
}
