import { Component, OnInit } from '@angular/core';

import { PlanetModelService } from 'src/app/services/planet-model.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  constructor(private model: PlanetModelService) {}

  ngOnInit(): void {}
}
