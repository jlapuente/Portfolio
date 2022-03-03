import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../properties/characterService';
import { CONSTANTS, Sheet } from '../properties/constants';
import userData from '../properties/userData.json';
@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss']
})
export class SheetComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  user: any = userData;

  ngOnInit() {
    console.log(this.user);
  }

}
