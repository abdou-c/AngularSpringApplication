import { Component, OnInit } from '@angular/core';
import {Detail} from '../entities/detail';
import {DetailService} from '../services/detail.service';

@Component({
  selector: 'app-transfer-detail',
  templateUrl: './transfer-detail.component.html',
  styleUrls: ['./transfer-detail.component.css']
})
export class transferDetailComponent implements OnInit {
  details: Detail[] = [];

  constructor(private detailService: DetailService) { }

  ngOnInit(): void {
    this.detailService.getDetailEnvoie().subscribe(
      data => this.details = data
    )
  }

}
