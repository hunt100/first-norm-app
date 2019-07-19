import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import * as d3 from 'd3';
import { ItemService } from 'src/app/service/item.service';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-chart-pie',
  templateUrl: './chart-pie.component.html',
  styleUrls: ['./chart-pie.component.css']
})
export class ChartPieComponent implements OnInit, AfterViewInit {

  constructor() { }
  @Input()response: any;
  @Input()counter: number;
  ngOnInit() {

    // setTimeout(() => {
    //   this.generatePieChart();
    // }, 0);
    
    console.warn(this.response);
  }

  generatePieChart() {
    var width = 450,
        height = 450,
        margin = 40;

    var radius = Math.min(width, height) / 2 - margin;
    
    var svg = d3.select(`#parent-container${this.counter}`)
        .append("svg")
          .attr("width", width)
          .attr("height", height)
        .append("g")
          .attr("transform", "translate("+ width/2 + "," + height/2 + ")");
                


    //var data  = {a: 9, b: 12, c: 30, d:8, e:12}
    //var data = this.response;
    // [{a: qwe, b: asd, c: 12}, {a: asd, b:ewwe, c: 21}]
    // 
    var data = d3.nest()
        .key(function(d) {return d.itemName; })
        .rollup(function(v) {return d3.mean(v, function(d) { return d.itemPrice}); })
        .object(this.response);
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].key + " - " + data[i].value);
    }


    var color = d3.scaleOrdinal()
        .domain(data)
        .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"]);
    
        
    
    var pie = d3.pie()
        .value(function(d) {return d.value})

    var dataReady = pie(d3.entries(data));

    var arcGenerator = d3.arc()
        .innerRadius(0)
        .outerRadius(radius);

    svg
        .selectAll('whatever')
        .data(dataReady)
        .enter()
        .append("path")
        .attr("d", arcGenerator)
        .attr('fill', function(d) {return(color(d.data.key))});
    
    svg
        .selectAll("mySlices")
        .data(dataReady)
        .enter()
        .append("text")
        .text(function(d) {return d.data.key})
        .attr("transform",function(d) {return "translate(" + arcGenerator.centroid(d) + ")";})
        .style("text-anchor", "middle")
        .style("font-size", 12)
        .style("fill","white")
  }

  ngAfterViewInit() {
    this.generatePieChart();
    
  }
    
}
