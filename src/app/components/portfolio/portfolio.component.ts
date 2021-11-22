import { Component, OnInit } from '@angular/core';
interface IImagesArray {
  all: string[];
  web: string[];
  graphic: string[];
  artwork: string[];

}


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {



  images =[
    "/assets/images/portfolio-1.png",
    "/assets/images/portfolio-2.png",
    "/assets/images/portfolio-3.png",
    "/assets/images/portfolio-4.png",
    "/assets/images/portfolio-5.png",
    "/assets/images/portfolio-6.png",
    "/assets/images/portfolio-7.png",
    "/assets/images/portfolio-8.png",
    "/assets/images/portfolio-9.png",
    "/assets/images/portfolio-10.png",
    "/assets/images/portfolio-11.png",
    "/assets/images/portfolio-12.png",
  ];

  imagesArray: IImagesArray = {
      all:["/assets/images/portfolio-1.png",
      "/assets/images/portfolio-2.png",
      "/assets/images/portfolio-3.png",
      "/assets/images/portfolio-4.png",
      "/assets/images/portfolio-5.png",
      "/assets/images/portfolio-6.png",
      "/assets/images/portfolio-7.png",
      "/assets/images/portfolio-8.png",
      "/assets/images/portfolio-9.png",
      "/assets/images/portfolio-10.png",
      "/assets/images/portfolio-11.png",
      "/assets/images/portfolio-12.png",],
   
      web:["/assets/images/portfolio-1.png",
      "/assets/images/portfolio-2.png",
      "/assets/images/portfolio-3.png",
      "/assets/images/portfolio-4.png"],
  
      graphic:["/assets/images/portfolio-5.png",
      "/assets/images/portfolio-6.png",
      "/assets/images/portfolio-7.png",
      "/assets/images/portfolio-8.png"],
    
      artwork:["/assets/images/portfolio-9.png",
      "/assets/images/portfolio-10.png",
      "/assets/images/portfolio-11.png",
      "/assets/images/portfolio-12.png"]
    };

  showModal = false;

  filter = "all";

  constructor() { }

  ngOnInit(): void {
    this.updateImage("all")
  }

  imgClick(url: string){
    const image:any = document.querySelector("#img01");
    image.src = url;
    this.showModal = true;
  }

  closemodal(){
    this.showModal= false;
  }

  updateImage(filter: string){
    const container: any = document.querySelector(".image-container")
    container.innerHTML ="";
    this.imagesArray[filter as keyof IImagesArray].forEach(url => {
      const img: HTMLImageElement = document.createElement("img");
      img.src = url;
      img.classList.add("image-portfolio");
      img.addEventListener("click", ()=> this.imgClick(url))
      container.appendChild(img);
    });
    const all: any = document.querySelector("#all");
    const web: any = document.querySelector("#web");
    const graphic: any = document.querySelector("#graphic");
    const artwork: any = document.querySelector("#artwork");
    this.updateButtonsStatus(all, filter === "all");
    this.updateButtonsStatus(web, filter === "web");
    this.updateButtonsStatus(graphic, filter === "graphic");
    this.updateButtonsStatus(artwork, filter === "artwork");
  }

  updateButtonsStatus(element: any, selected: boolean){
    if (selected){
      element.classList.add("selected")
      }
    else {
      element.classList.remove("selected")
    }
  }
}
