import React,{useState} from "react";
import Chart from 'react-apexcharts';

function Chart3() {
    const[state,setState] = useState({
        options:{
           
            chart:{
                toolbar:{
                    show:false
                  },
                },
                plotOptions: {
                    bar: {
                      horizontal: false,
                      columnWidth: '55%',
                      endingShape: 'rounded'
                    },
                  },
                  dataLabels: {
                    enabled: false
                  },
                  stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                  },
                  xaxis: {
                    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                  },
                  yaxis: {
                    title: {
                      text: '$ (thousands)'
                    }
                  },
                  fill: {
                    opacity: 1
                  },
        },
        series:[
            {
                type:'column',
                name:'Profit',
                data:[203,214,300,456,765,34,67,987,345,123,456,789,654,321],
            },

            {
                type:'column',
                name:'Revenue',
                data:[203,214,300,456,765,34,67,987,345,123,456,789,654,321],
            }
        ]
      });


    return(
        <Chart
        options={state.options}
        series={state.series}
        type='bar'
        width="400"
        height='300'
        >
   
        </Chart>
    );

}

export default Chart3;