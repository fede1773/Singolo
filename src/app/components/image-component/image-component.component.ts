import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-component',
  templateUrl: './image-component.component.html',
  styleUrls: ['./image-component.component.scss']
})
export class ImageComponentComponent implements OnInit {

  images= [
    "assets/images/phone-image.png",
    "assets/images/phone-image2.png"
  ];

  num= 0;

  constructor() {}

  ngOnInit(): void {
  }

  next(){
    let slider:any = document.getElementById('slider');
    this.num++;

    if(this.num >= this.images.length){
      this.num=0;
    }
    slider.src= this.images[this.num]

  }


  previous(){
    let slider:any = document.getElementById('slider');
    this.num--;

    if(this.num < 0){
      this.num= this.images.length-1;
    }
    slider.src= this.images[this.num]

  }
}
