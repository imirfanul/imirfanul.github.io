import { Router } from '@angular/router';
import { Iskill } from './../utils/iskill';
import { SkillsService } from './../services/skills.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  skills: Iskill[] =[];
  constructor(
    private skillsService: SkillsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.skills = this.skillsService.getSkills();
  }

  onBackClick() {
    this.router.navigateByUrl('/');
  }

}
