import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero'

@Component({
  selector: 'heroSelector',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 hero: Hero ={
   id: 1,
   name: 'Link'
 }
  constructor() { }

  ngOnInit(): void {
  }

}
