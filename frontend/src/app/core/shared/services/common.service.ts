import { Injectable } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})

export class CommonService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) { }

  getWorkChatSvgIcon(): SafeResourceUrl {
    return this.matIconRegistry.addSvgIcon(
      'work_chat',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/work-chat.svg')
    );
  }
}
