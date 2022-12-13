
import React,{useEffect, useState} from "react";
import Chart from 'react-apexcharts';
import axios from 'axios';



function Chart2(){
  const[state,setState] = useState({
    options:{
        chart:{
            toolbar:{
                show:false
            },
        },
        colors:["#8ad0e3","#0d58ba"],
        // chart:{
        //     id:'basic-bar',
        // },
        xaxis:{
            categories:[],
        },
        
    },
    series:[
        {
            type:'column',
            data:[],
        }
    ]
  });


//   useEffect(()=>{
//     // const age =[];
//     // const salary=[];
//     fetch('https://dummy.restapiexample.com/api/v1/employees')
//     .then((data)=>data.json())
//     .then((data)=>{
//         setState(data);
//         state.map(u=>{
//             {u.employee_age}{u.employee_salary}
//         })
//     });
    
//   },[]);

  
  useEffect(()=>{
    const age=[];
    const salary=[];

    axios.get("https://dummy.restapiexample.com/api/v1/employees").then(response=>{
        console.log('response',response)
        response.data.data.map(item=>{
            console.log('item',item)
            age.push(item.employee_age);
            salary.push(item.employee_salary)
        })
        setState({
            chart:{
                toolbar:{
                    show:false
                },
            },
            colors:["#8ad0e3","#0d58ba"],
            
            xaxis:{
                categories:salary
            },
            series:
                {
                    type:'column',
                    data:age
                }
            

        })
    })
},[])

    return(
     <Chart
     options={state.options}
     series={state.series}
     
     width='300'
     height='250'>

     </Chart>
    );

}

export default Chart2;