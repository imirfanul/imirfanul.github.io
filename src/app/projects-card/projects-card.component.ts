import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProjects } from '../utils/iprojects';

@Component({
  selector: 'app-project-card',
  templateUrl: './projects-card.component.html',
  styleUrls: ['./projects-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input('project') project!: IProjects;
  @Output('select') select = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onCardClick(project: IProjects) {
    this.select.emit({ project });
  }

}
