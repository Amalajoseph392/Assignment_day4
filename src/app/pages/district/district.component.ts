import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent {

  constructor(private hero: HeroService,private router:Router){}
    database=this.hero.getData()

    gotoHere(id:string){
      localStorage.setItem('id',id)
      this.router.navigate(['/single'])
    }
  }



