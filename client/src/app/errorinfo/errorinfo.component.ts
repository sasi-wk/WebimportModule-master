import { Component, OnInit, ViewChild } from '@angular/core';
import { Errresult } from '../result/errresult'
import { UploadedService } from '../service/uploaded.service';

@Component({
  selector: 'app-errorinfo',
  templateUrl: './errorinfo.component.html',
  styleUrls: ['./errorinfo.component.css']
})
export class ErrorinfoComponent implements OnInit {
  
  errlist:Errresult[]

  constructor(private uploadeService: UploadedService) {

  }

  ngOnInit(): void {

  }

  
}



