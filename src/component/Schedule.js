import React, {useState, useEffect, useRef } from 'react';
import Chartjs from 'chart.js';
import { Bar } from "react-chartjs-2";

import '../style/Chart.css';

require ('./RoundedBars.js')

export default function Schedule() {
    const [chartData, setChartData] = useState({});
    
    const options = {
        cornerRadius: 45,
        responsive: true,
        tooltips: {
          mode: 'label'
        },
        elements: {
          line: {
            fill: false
          }
        },
        legend:{
          display: true,
          align: 'end',
          labels: {
            usePointStyle: true,
          }
        },
        scales: {
          xAxes: [
            {
              display: true,
              gridLines: {
                display: false
              },
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
            }
          ],
          yAxes: [
            {
              type: 'linear',
              display: true,
              position: 'left',
              id: 'y-axis-1',
              gridLines: {
                display: false
              },
              labels: {
                show: true
              }
            },
            {
              type: 'linear',
              display: true,
              position: 'right',
              id: 'y-axis-2',
              gridLines: {
                display: false
              },
              labels: {
                show: true
              }
            }
          ]
        }
    };

    const plugins = [{
        afterDraw: (chartInstance, easing) => {
            const ctx = chartInstance.chart.ctx;
            ctx.fillText("Team OutPut", 50, 20);
        }
    }];

    const chart = () => {
      setChartData({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Sales',
            type:'line',
            data: [51, 65, 40, 49, 60, 37, 40],
            fill: false,
            borderColor: '#2182eb',
            backgroundColor: '#2182eb',
            pointBorderColor: '#2182eb',
            pointBackgroundColor: '#2182eb',
            pointHoverBackgroundColor: '#2182eb',
            pointHoverBorderColor: '#2182eb',
            yAxisID: 'y-axis-2'
          },{
            type: 'bar',
            label: 'Visitor',
            data: [200, 185, 590, 621, 250, 400, 95],
            fill: false,
            backgroundColor: '#1026eb',
            borderColor: '#1026eb',
            borderRadius: "4px",
            hoverBackgroundColor: '#1026eb',
            hoverBorderColor: '#1026eb',
            yAxisID: 'y-axis-1'
          }],
      });
    };
  
    useEffect(() => {
      chart();
    }, []);
  
    return (
      <div className="App">
        <div>
          <Bar
            data={chartData}
            options={options}
            plugins={plugins}
          />
        </div>
      </div>
    );
  };
  