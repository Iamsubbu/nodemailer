import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailerRoutingModule } from './mailer-routing.module';
import { MailComponent } from './mail/mail.component';

@NgModule({
  declarations: [MailComponent],
  imports: [
    CommonModule,
    MailerRoutingModule
  ]
})
export class MailerModule { }
