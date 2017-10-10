import { Component, OnInit, ViewChild } from '@angular/core';
import { UploadedService } from '../service/uploaded.service';
import { Uploadresult } from '../result/Uploadresult'
import { Errresult } from '../result/errresult'


@Component({
  selector: 'app-uploadinfo',
  templateUrl: './uploadinfo.component.html',
  styleUrls: ['./uploadinfo.component.css'],
  providers: [UploadedService]
})

export class UploadinfoComponent implements OnInit {


  title: string;
  selectedRow: Number;
  setClickedRow: Function;
  uploadlist: Uploadresult[]

  errlist: Errresult[]

  constructor(private uploadeService: UploadedService) {
    this.setClickedRow = function (item) {
      console.log(item.uploaded)
      this.getErr(item.uploaded)
    }
  }

  ngOnInit(): void {
    this.uploadeService.getuploadelist()
      .subscribe((uploadlists) => {
        this.uploadlist = uploadlists
      })
    //throw new Error("Method not implemented.");
  }

  getErr(ref): void {
    this.uploadeService.errList(ref)
      .subscribe(errlists => {
        this.errlist = errlists
      })
  }


}
