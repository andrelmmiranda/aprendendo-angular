import { Component, OnInit } from '@angular/core';
import { firstList, secondList, thirdList, } from './itens';

interface Item{
  item: string;
}

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  firstList:Item[] = firstList;

  secondList:Item[] = secondList;

  thirdList:Item[] = thirdList;

  constructor() { }

  ngOnInit(): void {
  }

}
