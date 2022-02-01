import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {Music} from "../../model/Music";

export type PopupAction = Music & {mode: string};

@Component({
  selector: 'app-ajout-popup',
  templateUrl: './ajout-popup.component.html',
  styleUrls: ['./ajout-popup.component.scss']
})
export class AjoutPopupComponent {

  constructor(public dialogRef: MatDialogRef<AjoutPopupComponent>) {}

  closeDialog(result: Music & {mode?: string} | null = null) {
    this.dialogRef.close(result);
  }

  onCancel() {
    this.closeDialog();
  }

  onCreate(person: Music) {
    this.closeDialog({...person, mode: 'create'});
  }

  onUpdate(person: Music) {
    this.closeDialog({...person, mode: 'update'});
  }

}
