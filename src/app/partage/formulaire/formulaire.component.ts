import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatChipInputEvent} from "@angular/material/chips";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Music} from "../../model/Music";

@Component({
  selector: 'formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {
  form: FormGroup;
  @Input() employeModel: Music;
  @ViewChild("fileInput") fileInput!: ElementRef;

  @Output('cancel') cancelEvent$: EventEmitter<any>;
  @Output('submit') submitEvent$: EventEmitter<any>;

  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor() {
    this.submitEvent$ = new EventEmitter();
    this.cancelEvent$ = new EventEmitter();
    this.form = FormulaireComponent.buildForm();
    this.employeModel = {
      style: []
    };
  }

  ngOnInit() {
    debugger;
    this.form.patchValue({
      id: this.employeModel.id,
      title: this.employeModel.title,
      description: this.employeModel.description,
      album: this.employeModel.album,
      style: this.employeModel.style || [],
      artist: this.employeModel.artist,
      duration: this.employeModel.duration,
      date: this.employeModel.date
    });
  }

  cancel() {
    this.cancelEvent$.emit();
  }

  submit(employe: Music) { //Formulaire
    employe.picture = this.employeModel.picture;
    this.submitEvent$.emit(employe);
  }


  addChipset(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.employeModel.style!.push(value);
    }
    event.chipInput!.clear();
  }

  removeChipset(titre: any): void {
    const index = this.employeModel.style!.indexOf(titre);
    this.employeModel.style!.splice(index, 1);
  }

  onFileSelected(event:Event | null) {
    const files = (<HTMLInputElement>event?.currentTarget).files;
    const file:File | null = files!.item(0);

    if (file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (_event) => {
          this.employeModel.picture = reader.result;
        }
    }
  }

  /**
   * Fonction pour construire notre formulaire
   * @returns {FormGroup}
   *
   * @private
   */
  private static buildForm(): FormGroup {
    return new FormGroup({
      id: new FormControl(''),
      prenom: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
      nom: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
      email: new FormControl('', Validators.required),
      titres: new FormControl(''),
      sexe: new FormControl(''),
      telephone: new FormControl('', Validators.compose([Validators.required, Validators.pattern('\\d{10}')])),
    });
  }



}
