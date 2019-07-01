import { Component, OnInit } from '@angular/core';
import { SubbuService } from 'src/app/service/subbu.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {

  constructor(private sss:SubbuService) { }

  ngOnInit() {
  }

  submit(mail:any,subject:any,text:any){
    
    this.sss.mailsubmit(mail.value,subject.value,text.value).subscribe((data)=>{
      alert('done')
    })
  }

}
