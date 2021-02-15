import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {CommonAuthService} from '../../services/common.auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  appDescription: SafeHtml = '';

  constructor( private commonService: CommonAuthService,
               private domSanitizer: DomSanitizer ) {
    this.appDescription = domSanitizer.bypassSecurityTrustHtml(this.commonService.getAppDescriptionTemplate());
  }

  ngOnInit(): void { }
}
