import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import * as d3 from 'd3';
import data from './data.json';
import data1 from './data1.json'

import { ChartComponent } from '../shared/chart/chart.component';

export class DeliveryMetric {
  state: string;
  stateDisplayValue: string;
  mean: number;
  stdDev: number;

  constructor(stateIn, stateDisplayValueIn, meanIn, stdDevIn) {
    this.state = stateIn;
    this.stateDisplayValue = stateDisplayValueIn;
    this.mean = meanIn;
    this.stdDev = stdDevIn;
  }
}


@Component({
  selector: 'orders-dashboard',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent{
  @ViewChild('areaChart', { static: true }) chart: ChartComponent;

  chartData = [] as any;
  
  chartData1 = [] as any;
  chartA = 'chartA';
  chartB = 'chartB';
  
  displayedColumns = ['legend', 'stateDisplayValue', 'mean', 'stdDev'];

  constructor( ) {
    
   }

  ngOnInit() {
  }

  initialize() {
    this.generateData();
  }
  
    ngAfterContentInit() {
      this.initialize();
    }
  
    generateData() {
      this.chartData = [];
      this.chartData1 = [];
      this.chartData.push(data);
      this.chartData1.push(data1);
    }
}

