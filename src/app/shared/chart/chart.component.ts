import { Component, ElementRef, ViewEncapsulation, Input, SimpleChanges, OnChanges } from '@angular/core';

import * as d3 from 'd3';

@Component({
    selector: 'app-area-chart',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements  OnChanges {
    @Input() data: { value: number, value1: number, date: string, minutesPerOrder: number }[];
    @Input() type;
    hostElement; 
    svg; 
    g; 
    private margin = 50;
    // public margin = {top: 20, right: 20, bottom: 30, left: 40};
    public width= 900 - 2*this.margin;
    public height = 300 - 2*this.margin;
    public  svgHeight = this.height - 2 * this.margin;
    public  svgWidth = this.width - 2 * this.margin;
    // private width = 600;
    // private height = 300;
    // private margin = 50;
    public svgInner;
    public yScale;
    public xScale;
    public yScale1;
    public xAxis;
    public yAxis;
    public yAxis1;
    public lineGroup;
    public lineGroup1;
    public barGroup;

    public formatTime = d3.timeFormat("%I %p");
    public formatTime1 = d3.timeFormat("%m/%d/%Y");
    constructor(private elRef: ElementRef) {
        this.hostElement = this.elRef.nativeElement;
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.data) {
            this.updateChart(changes.data.currentValue);
        }
    }

    private createChart(data: { value: number, value1: number, date: string, minutesPerOrder: number }[]) {

        this.removeExistingChartFromParent();

        this.svg = d3.select(this.hostElement).append('svg')
            .attr('width', this.width  )
            .attr('height', this.height +this.margin )
 
        this.svgInner = this.svg
            .append('g')
            .style('transform', 'translate(0px, 0px)');
       
      this.addAxisConfig();
  
      this.addGridLines();

      this.addLineChart()

      this.addTooltip();

      this.addBarGraph();
  }
    
    public updateChart(data: { value: number,value1: number, date: string, minutesPerOrder: number }[]) {
        if (!this.svg) {
            this.createChart(data);
            return;
        }

    }

    public addAxisConfig(){
      this.yScale = d3
        .scaleLinear()
        .domain([d3.max(this.data, d => d.value) + 1, d3.min(this.data, d => d.value) - 1])
        .range([0, this.height]);

        this.yScale1 = d3
        .scaleLinear()
        .domain([d3.max(this.data, d => d.minutesPerOrder) + 1, d3.min(this.data, d => d.minutesPerOrder) - 1])
        .range([0, this.height]);

        this.yAxis = this.svgInner
        .append('g')
        .attr('id', 'y-axis')
        .style('transform', 'translate(' +this.margin+ 'px,  0)');

        this.yAxis1 = this.svgInner
        .append('g')
        .attr('id', 'y-axis1')
        .style('transform', 'translate(' +this.svgWidth+ 'px,  0)');
  
        this.xScale = d3.scaleTime().domain
        ([new Date("2021-10-20 09:00:00"), new Date("2021-10-20 23:00:00")])
        .range([0, (this.width - 3 * this.margin)]);
  
       this.xAxis = this.svgInner
        .append('g')
        .attr('id', 'x-axis')
        .style('transform', 'translate(0, ' +(this.height)+ 'px)')
        .style('font-size','10px');

        this.svgInner.append("text")
        .attr("class", "x label")
        .attr("text-anchor", "end")
        .attr("x", this.svgWidth/1.8)
        .attr("y", this.height + this.margin -10)
        .text("Time");

        this.svgInner.append("text")
        .attr("class", "y label")
        .attr("text-anchor", "end")
        .attr("x", -this.height/2)
        .attr("y", 5)
        .attr("dy", ".75em")
        .attr("transform", "rotate(-90)")
        .text("Orders");

        this.svgInner.append("text")
        .attr("class", "y label1")
        .attr("text-anchor", "end")
        .attr("x", -this.height/4)
        .attr("y", this.svgWidth+35)
        .attr("dy", ".75em")
        .attr("transform", "rotate(-90)")
        .text("Minutes Per Order");
    }

    public addGridLines(){
      this.svgInner.append("g")			
        .attr("class", "grid")
        .call(d3.axisLeft(this.yScale)
        	.tickSize(-(this.width - 3 * this.margin))
          .tickFormat(() => "")
        ).style('transform', 'translate(' +this.margin+ 'px,  0)')
        .style('opacity',0.2) 
        .style('stroke-dasharray',8);


        this.svgInner.append("g")			
        .attr("class", "yGrid")
        .call(d3.axisBottom(this.xScale)
        	.tickSize(- (this.height))
          .tickFormat(() => "")
          .ticks(12)
        ).style('transform', 'translate('+ this.margin+'px,'  + (this.height ) + 'px)')
        .style('opacity',0.2) 
        .style('stroke-dasharray',8);
    }

    public addLineChart(){
      this.lineGroup = this.svgInner
        .append('g')
        .append('path')
        .attr('id', 'line')
        .style('fill', 'none')
        .style('stroke', '#71b9f8')
        .style('stroke-width', '1px')
      this.lineGroup1 = this.svgInner
        .append('g')
        .append('path')
        .attr('id', 'line1')
        .style('fill', 'none')
        .style('stroke', '#47d086')
        .style('stroke-width', '1px')
        
        var x =  this.xScale.range([this.margin, this.svgWidth]);

        const xAxis = d3
        .axisBottom(this.xScale)
        .ticks(12)
        
        // .tickFormat(d3.timeFormat('%m / %Y'));

        this.xAxis.call(xAxis);

        const yAxis = d3
         .axisLeft(this.yScale)   
         .ticks(8);

        this.yAxis.call(yAxis);

        const yAxis1 = d3
         .axisRight(this.yScale1)   
         .ticks(6);

         this.yAxis1.call(yAxis1);

        const line = d3
        .line()
        .x(d => d[0])
        .y(d => d[1])
        .curve(d3.curveMonotoneX);
       

    const points: [number, number][] = this.data.map(d =>   [
      this.xScale(new Date(d.date)),
      this.yScale(d.value)
    ]);

    const points2: [number, number][] = this.data.map(d => [
        this.xScale(new Date(d.date)),
        this.yScale(d.value1)
      ]);

  
    this.lineGroup.attr('d', line(points));
    this.lineGroup1.attr('d', line(points2));
    }

    public addTooltip(){
      // Define the div for the tooltip
    const tooltip =d3.select(this.hostElement).append("div")	
    .attr("id", "tooltip")		
    .attr("class", "tooltip"+this.type)				
    .style("opacity", 0);
    const tooltip1 =d3.select(this.hostElement).append("div")	
    .attr("id", "tooltip1")
    .attr("class", "tooltip1"+this.type)				
    .style("opacity", 0);

   // Add the scatterplot
   this.svgInner.selectAll("dot")	
   .data(this.data)			
    .enter().append("circle")								
   .attr("r", 3)		
   .attr("cx", (d) => { return this.xScale(new Date(d.date)); })		 
   .attr("cy", (d) => {  return this.yScale(d.value); })
   .style("fill", '#71b9f8')
   .on("mouseover", (event,d) => {		
    const [x, y] = d3.pointer(event);
    d3.select('.tooltip'+this.type).transition()		
           .duration(200)		
           .style("opacity", 1)
           .style('transform', 'translate('+(x-30)+'px,'+(y-300)+'px)')
           tooltip.html( this.formatTime(new Date(d.date))+' <br/> '+d.value)	
           	
       })					
   .on("mouseout", (d)=> {		
    d3.select('.tooltip'+this.type).transition()		
           .duration(500)		
           .style("opacity",0);	
   });

   this.svgInner.selectAll("dot")	
   .data(this.data)			
    .enter().append("circle")								
   .attr("r", 3)		
   .attr("cx", (d) => { if (d.value1 !== undefined ){return this.xScale(new Date(d.date));} else {return -5000} })		 
   .attr("cy", (d) => { return this.yScale(d.value1); })
   .style("fill", '#47d086')
   .on("mouseover", (event,d) => {		
    const [x, y] = d3.pointer(event);
    d3.select('.tooltip1'+this.type).transition()		
           .duration(200)		
           .style("opacity", 1)
           .style('transform', 'translate('+(x-30)+'px,'+(y-300)+'px)')
           tooltip1.html( this.formatTime(new Date(d.date))+' <br/> '+d.value1)	
           	
       })					
   .on("mouseout", (d) => {		
    d3.select('.tooltip1'+this.type).transition()		
           .duration(500)		
           .style("opacity", 0);	
   });
   }
    public addBarGraph(){
   this.barGroup = this.svgInner.selectAll(".bar")
    .data(this.data)
    .enter()
    .append("rect")
    .attr("class", "bar")    
    .style('fill', '#f6ca84')
    .style('transform',(d) => { return 'translate(0, -'+((this.height) - this.yScale1(d.minutesPerOrder))+'px)'})
    .attr("x", (d) => { return this.xScale(new Date(d.date)); })
    .attr("y", this.height)
    .attr("width", 5)
    .attr("height", (d) => { return (this.height) - this.yScale1(d.minutesPerOrder)} )

    this.svgInner.selectAll("text.barText")
    .data(this.data)
    .enter().append("text")
    .attr("class", "barText")
    .attr("x", (d) => { return this.xScale(new Date(d.date)); })
    .attr("y", (d) => {return this.yScale1(d.minutesPerOrder)})
    .text((d) => { return d.minutesPerOrder; });
   }

    private removeExistingChartFromParent() {
        d3.select(this.hostElement).select('svg').remove();
    }
}
