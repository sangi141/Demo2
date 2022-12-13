import './Main.css';
import Sidebar from '../Sidebar/Sidebar';
import Grid from '../Grid/Grid';
import Chart1 from '../Chart/First_chart';
import Chart3 from '../Chart/Third_chart' ;
import Chart4 from '../Chart/Fourth_chart' ;
import Chart5 from '../Chart/Fifth_chart' ;

const Main = () =>{
    return(
      
        <div className="container1">
          <Sidebar></Sidebar>
          {/* <div className='main-div'> */}
           <div className='container'> 
          <div className="row row-cols-2">
            <div className="col">
              <Grid title="DCU'S & NIC'S">
                <Chart1></Chart1>
              </Grid>
            </div>
            <div className="col">
              <Grid title="Firmware versions">
               <Chart3></Chart3>
              </Grid>
            </div>
            <div className="col">
              <Grid title=" Signal Quality">
                <Chart4></Chart4>
              </Grid>
            </div>
            <div className="col">
              <Grid title="Wan quality">
              <Chart5></Chart5>
              </Grid>
            </div>
            </div> 
          </div>

        </div>
    );
}

export default Main;