import { Component, OnInit } from '@angular/core';
import { StackoverflowService } from '../../../stackoverflow.service'
@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss']
})
export class CertificationComponent implements OnInit {

  public me: any;

  constructor(private stackoverflowService: StackoverflowService) { }

  ngOnInit() {
    this.me = {};
  }

  ngAfterViewInit() {
    this.stackoverflowService.getBadges().subscribe((data) => this.process(data));
  }

  process(data) {
    // console.log(data);
    this.me.reputation = data.items[0].reputation;
    // this.me.badge = data.items[0].badge_counts;
    this.me.gold = data.items[0].badge_counts.gold;
    this.me.silver = data.items[0].badge_counts.silver;
    this.me.bronze = data.items[0].badge_counts.bronze;
    // console.log(this.me);
  }

}
