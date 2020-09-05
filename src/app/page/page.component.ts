import { Component, OnInit} from '@angular/core';
import { JsonParserService } from '../json-parser.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

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
