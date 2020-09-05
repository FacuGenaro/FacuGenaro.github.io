import { Component, OnInit } from '@angular/core';
import { JsonParserService } from '../json-parser.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  constructor(protected jsonParser : JsonParserService) { 
    
  }

  jsonData : any;

  ngOnInit() {
    this.jsonParser.getData().subscribe((data) => {
      this.jsonData = data;
    },
      (error) => {
        console.error(error);
      })
  }

}