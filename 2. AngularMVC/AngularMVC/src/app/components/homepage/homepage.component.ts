import { Component, OnInit } from '@angular/core';

import { PlanetModelService } from 'src/app/services/planet-model.service';

import planets from '../../../assets/planetData.json';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  selection;
  formPlanetName;

  views = ['Select One', 'list', 'table', 'system', 'all'];

  data: Array<Planets> = planets;

  constructor(private model: PlanetModelService) {}

  ngOnInit(): void {}

  selected() {
    console.log(this.selection);
    // this.views.push('test');
  }
}
