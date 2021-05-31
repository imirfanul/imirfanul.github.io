import { Injectable } from '@angular/core';

import { IProjects } from './../utils/iprojects';
import { ALL_PROJECT_DATA } from '../utils/project-data';

@Injectable()
export class ProjectDataService {

  constructor() {}

  getProjects(): IProjects[] {
    return ALL_PROJECT_DATA;
  }
}
