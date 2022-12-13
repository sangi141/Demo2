//import React, { useState } from "react";
import { useState } from 'react';
import Chart from 'react-apexcharts'
//import ApexCharts from 'apexcharts'

function Chart1(){
  const[state,setState] = useState({
    options:{
       
        chart:{
            type:'bar',
            
        },

        plotOptions:{
          bar:{
            horizontal:true
          }
        },
        // xaxis:{
        //     categories:['Nov1','Nov2','Nov3','Nov4','Nov5','Nov6','Nov7','Nov8','Nov9','Nov10','Nov11','Nov12','Nov13','Nov14'],
        // },
    },
    series:[
        {
            type:'column',
            data:[203,214,300,456,765,34,67,987,345,123,456,789,654,321],
        }
    ]
  });



    return (
      <div>
      <Chart
        options={state.options}
        series={state.series}
        type="bar"
        width="400"
        height='300'
      />
    </div>
    );
}

export default Chart1;