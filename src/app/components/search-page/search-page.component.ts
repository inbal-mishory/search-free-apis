import { Component, OnInit } from '@angular/core';
import {GetApisService} from '../../services/get-apis.service';
import {IApiModel} from '../../models/api.model';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  public apisList: IApiModel[];

  constructor(private apiGet: GetApisService) { }

  ngOnInit(): void {
    this.apiGet.getApisList().subscribe((res) => {
      this.apisList = res.entries;
    });
  }

}
