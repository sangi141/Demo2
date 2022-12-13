import React,{useState} from "react";
import Chart from 'react-apexcharts';


function Chart6(){
  const[state,setState] = useState({
    options:{
        chart:{
            toolbar:{
                show:false
            }
            },
        colors:["#8ad0e3","#0d58ba"],
        // chart:{
        //     id:'basic-bar',
        // },
        xaxis:{
            categories:['oct','Nov'],
        },
    },
    series:[
        {
            type:'column',
            data:[203,214],
        }
    ]
  });
    return(
     <Chart
     options={state.options}
     series={state.series}
     
     width='300'
     height='250'>

     </Chart>
    );

}

export default Chart6;