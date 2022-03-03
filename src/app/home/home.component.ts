import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterService } from '../properties/characterService';
import { CONSTANTS, Sheet } from '../properties/constants';
import userData from '../properties/userData.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  characters: Sheet[];
  user: any = userData;
  ngOnInit(){

  }

  navigate(idChar: number){
    this.router.navigate(['/sheet'] , { queryParams: { id: idChar } });
  }
}
