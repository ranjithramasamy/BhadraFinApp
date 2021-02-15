import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class CommonAuthService {
  constructor() { }

  getAppDescriptionTemplate(): string {
    return `
        <div>
          <span class="auth-page-logo">Bhadra FinApp</span><br><br>
          <span class="auth-page-description">Comes up with an intuitive design by using the next generation design principles and techniques...</span>
        </div>
        <div class="auth-page-work-chat-svg-background"></div>
    `;
  }
}
