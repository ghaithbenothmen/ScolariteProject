import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-apprenant',
  templateUrl: './apprenant.component.html',
  styleUrls: ['./apprenant.component.css']
})
export class ApprenantComponent {
[x: string]: any;
public modalRef!: BsModalRef;

constructor(private modalService: BsModalService) {}

openModal(modalTemplate: TemplateRef<any>) {
  this.modalRef = this.modalService.show(modalTemplate,
    {
      class: 'modal-dialogue-centered modal-md',
      backdrop: 'static',
      keyboard: true
    }
  );
}


}
