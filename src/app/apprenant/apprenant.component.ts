import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
export class Apprenant {
  constructor(
    public idApprenant: number,
    public codeApprenant: number,
    public nomApprenant: string,
    public prenomApprenant: string,
    public sexeApprenant: string,
    public dateNaissanceApprenant: Date,
    public emailApprenant: string,
    public telApprenant: number,
    public adresseApprenant: string,
    public archiveApprenant: boolean,
  ) {
  }
}
@Component({
  selector: 'app-apprenant',
  templateUrl: './apprenant.component.html',
  styleUrls: ['./apprenant.component.css']
})
export class ApprenantComponent implements OnInit {
  [x: string]: any;
  public modalRef!: BsModalRef;
  public apprenants!: Apprenant[];
  public apprenant!: Apprenant;
  public editForm!: FormGroup;
  public editForm2!: FormGroup;
  private deleteId !: number;
  public message!: string;
  public ajoutForm!:FormGroup   //variable peut etre null on ajoute !


  constructor(private modalService: BsModalService, private httpClient: HttpClient, private fb: FormBuilder) { }

  ngOnInit(): void {
    apprenant: Apprenant
    this.getApprenants();

    this.editForm = this.fb.group({
      idApprenant: [''],
      codeApprenant: [''],
      nomApprenant: [''],
      prenomApprenant: [''],
      /* sexeApprenant: [''], */
      dateNaissanceApprenant: [''],
      emailApprenant: [''],
      telApprenant: [''],
      adresseApprenant: [''],
      archiveApprenant: ['']


    })

    this.editForm2 = this.fb.group({
      idApprenant: [''],
      codeApprenant: [''],
      nomApprenant: [''],
      prenomApprenant: [''],
      /* sexeApprenant: [''], */
      dateNaissanceApprenant: [''],
      emailApprenant: [''],
      telApprenant: [''],
      adresseApprenant: [''],
      archiveApprenant: [''],


    })
  }
  /*  patchApprenants(apprenant:Apprenant){
    this.httpClient.patch('http://localhost:8080/apprenant/rest/'+this.deleteId ,apprenant);
   this.modalService.hide();
   this.ngOnInit();
 
   } */

  getApprenants() {
    this.httpClient.get<any>('http://localhost:8080/apprenant/api/all').subscribe(
      response => {
        console.log(response);
        this.apprenants = response;
      }
    );
  }

  openModal(modalTemplate: TemplateRef<any>) {
    this.modalRef = this.modalService.show(modalTemplate,
      {
        class: 'modal-dialogue-centered modal-md',
        backdrop: 'static',
        keyboard: true
      }
    );
  }
  onSubmit(f: NgForm) {
    const url = 'http://localhost:8080/apprenant/api/add';
    this.httpClient.post(url, f.value)
      .subscribe((result) => {
        this.ngOnInit(); //reload the table

      });
    this.modalService.hide(); //dismiss the modal
  }

  openDetails(modalTemplate: TemplateRef<any>, apprenant: Apprenant) {
    this.modalRef = this.modalService.show(modalTemplate,
      {

        class: 'modal-dialogue-centered modal-md',
        backdrop: 'static',
        keyboard: true
      }
    );
    /*   document.getElementById('codeApprenant')?.setAttribute('value', (apprenant.codeApprenant).toString());
      document.getElementById('nomApprenant')?.setAttribute('value', apprenant.nomApprenant);
      document.getElementById('prenomApprenant')?.setAttribute('value', apprenant.prenomApprenant);
      
      document.getElementById('sexeApprenant')?.setAttribute('value', apprenant.sexeApprenant);
      document.getElementById('dateNaissanceApprenant')?.setAttribute('value', (apprenant.dateNaissanceApprenant).toString());
      document.getElementById('emailApprenant')?.setAttribute('value', apprenant.emailApprenant);
      document.getElementById('telApprenant')?.setAttribute('value', (apprenant.telApprenant).toString());
      document.getElementById('adresseApprenant')?.setAttribute('value', apprenant.adresseApprenant);
      document.getElementById('archiveApprenant')?.setAttribute('value', (apprenant.archiveApprenant).toString()); */


    this.editForm.patchValue({
      idApprenant: apprenant.idApprenant,
      codeApprenant: apprenant.codeApprenant,
      nomApprenant: apprenant.nomApprenant,
      prenomApprenant: apprenant.prenomApprenant,
      sexeApprenant: apprenant.sexeApprenant,
      dateNaissanceApprenant: apprenant.dateNaissanceApprenant,
      emailApprenant: apprenant.emailApprenant,
      telApprenant: apprenant.telApprenant,
      adresseApprenant: apprenant.adresseApprenant,
      archiveApprenant: apprenant.archiveApprenant


    });


  }

  onSave() {
    const editURL = 'http://localhost:8080/apprenant/api/' + this.editForm.value.idApprenant + '/edit';
    console.log(this.editForm.value);
    this.httpClient.put(editURL, this.editForm.value)
      .subscribe((results) => {
        this.ngOnInit();

      });
    this.modalService.hide();
  }

  onPatch() {
    const editURL = 'http://localhost:8080/apprenant/api/' + this.editForm2.value.idApprenant + '/patch';
    console.log(this.editForm2.value);
    this.httpClient.put(editURL, this.editForm2.value)
      .subscribe((results) => {
        this.ngOnInit();

      });
    this.modalService.hide();
  }


  openDelete(modalTemplate: TemplateRef<any>, apprenant: Apprenant) {

    this.modalRef = this.modalService.show(modalTemplate,
      {
        class: 'modal-dialogue-centered modal-md',
        backdrop: 'static',
        keyboard: true
      }
    );

    this.editForm2.patchValue({
      idApprenant: apprenant.idApprenant,
      codeApprenant: apprenant.codeApprenant,
      nomApprenant: apprenant.nomApprenant,
      prenomApprenant: apprenant.prenomApprenant,
      sexeApprenant: apprenant.sexeApprenant,
      dateNaissanceApprenant: apprenant.dateNaissanceApprenant,
      emailApprenant: apprenant.emailApprenant,
      telApprenant: apprenant.telApprenant,
      adresseApprenant: apprenant.adresseApprenant,
      archiveApprenant: apprenant.archiveApprenant


    });


  }

  /* onDelete() {
    const deleteURL = 'http://localhost:8080/apprenant/api/' + this.deleteId + '/delete';
    this.httpClient.delete(deleteURL)
      .subscribe((results) => {
        this.ngOnInit();
        
      });
      this.modalService.hide();
  } */

  /************************************ les controllers **************************************************/

  onControl(f: NgForm) {
    if (f.valid) {
      this.message = 'Apprenant bien ajouté !';
    }
    if (f.invalid) {
      this.message = 'Apprenant non ajoué ! Verifier votre formulaire !';
    }
  }
}
