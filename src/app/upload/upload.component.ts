import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  imgSrc:string = '';
  constructor() { }

  ngOnInit() {
  }

  imageUpload(event){
    if (event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => { 
        this.imgSrc = event.target['result'];
      }
    }
  }

}
