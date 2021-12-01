import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IImagesArray } from './portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  public getData(): Observable<IImagesArray> {
    return of(
        {
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
        "/assets/images/portfolio-4.png",],
    
        graphic:["/assets/images/portfolio-5.png",
        "/assets/images/portfolio-6.png",
        "/assets/images/portfolio-7.png",
        "/assets/images/portfolio-8.png"],
      
        artwork:["/assets/images/portfolio-9.png",
        "/assets/images/portfolio-10.png",
        "/assets/images/portfolio-11.png",
        "/assets/images/portfolio-12.png"]
      }
    );
  }
}
