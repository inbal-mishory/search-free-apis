import {Component, Input, OnInit} from '@angular/core';
import {IApiModel} from '../../models/api.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() item: IApiModel;
  constructor() { }

  ngOnInit(): void {
  }

}
