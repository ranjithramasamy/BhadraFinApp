import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../shared/services/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private commonService: CommonService ) {
    this.commonService.getWorkChatSvgIcon();
  }

  ngOnInit(): void { }
}
