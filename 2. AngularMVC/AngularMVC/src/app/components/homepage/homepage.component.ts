import { Component, OnInit } from '@angular/core';

import { PlanetModelService } from 'src/app/services/planet-model.service';

import planets from 'src/assets/planetData.json';
import { Planets } from 'src/app/types/planets';

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

  totalPlanets: number = 8;

  constructor(private model: PlanetModelService) {
    this.selection = 'Select One';
  }

  ngOnInit(): void {}

  selected() {
    console.log(this.selection);
    // this.views.push('test');
  }

  addMyPlanet() {
    this.data.push({
      name: this.formPlanetName,
      color: 'gray',
      radius: 1186,
      satellites: 5,
    });

    console.log(this.data);
  }

  getTotalPlanets() {
    this.totalPlanets = this.data.length;
    return this.data.length;
  }
}
