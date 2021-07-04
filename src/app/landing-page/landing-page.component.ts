import { Component, OnInit } from '@angular/core';
import { DataFetchService } from '../services/fetchData.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { element } from 'protractor';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  domainData : Array<any> = [];
  public isVisible: boolean = false;
  registerForm: FormGroup;
  submitted = false;
  SHOW_FORM : boolean = false;


  constructor(
    private dataFetchService : DataFetchService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.dataFetchService.getAllproducts().subscribe(
      data => {
        console.log(data);
        data.map(element => {
          element['totalStorage'] = +element['storage'].toString().slice(0, -2);
          element['leftStorage'] = +element['usedStorage'].toString().slice(0, -2);
        });
        this.domainData =  data;
      },

      error => {
        console.error(error);
      }
    );
    this.activateForm();
  }


  openModal() : void {
    this.SHOW_FORM = true;
    if (this.isVisible) { 
      return;
    } 
    this.isVisible = true;
  }

  activateForm(){
    this.registerForm = this.formBuilder.group({            
      domain: ['', Validators.required],
      storage: ['', Validators.required],
      subdomainName: [''],
      montlyVisitor: ['', Validators.required],
      availableDomains: ['', Validators.required],
    },);
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    let obj = {
      "id":2,
      "domain":"xyz.com",
      "storage":"0gb",
      "usedStorage":"0gb",
      "domainTag":"Primary",
      "subdomain":[],
      "status":"Inactive",
      "availableDomains":10,
      "usedDomains":0,
      "monthlyVisitorCapacity":10000,
      "montlyVisitor":0
    };

    this.submitted = true;

      // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    obj['domain'] = this.registerForm.value['domain'];
    obj['storage'] = this.registerForm.value['storage'];
    obj['montlyVisitor'] = this.registerForm.value['montlyVisitor'];
    obj['availableDomains'] = this.registerForm.value['availableDomains'];

    this.domainData.push(obj);
    this.onReset();
  }

  onReset() {
    this.isVisible = false;
    this.SHOW_FORM = false;
    this.submitted = false;
    this.registerForm.reset();  
  }

}
