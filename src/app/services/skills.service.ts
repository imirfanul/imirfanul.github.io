import { Injectable } from '@angular/core';
import { Iskill } from '../utils/iskill';
import { SKILLS_DATA } from '../utils/data/skills.data';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  getSkills(): Iskill[] {
    return SKILLS_DATA;
  }
}
