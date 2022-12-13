import React,{useState} from 'react';
import image from '../Image/logo.png'; 
import './Sidebar.css';
import Dashboard from './Dashboard';
import Fota from './Fota';
import Nodes from './Nodes'
import Network from './Network';

const Sidebar = () =>{
    const[dropdown,setDropdown] = useState({
        0:false,
        1:false,
        2:false,
        3:false,
        4:false,
    })
  return(

    <div className="side-bar">
        <header>
            <img src={image} alt=''></img>
        </header>
        <div className='menu '> 
        <ul>
            <div className='div1'>
            <li className='nav-item :: after' onClick={()=>setDropdown({...dropdown,0:!dropdown[0]})}>
            <a to='/' className='nav-links' >
            
                <i className='bi-three-dots'>Dashboard</i>
                 
                <i className={dropdown[0] === true ? 'bi-chevron-down':'bi-chevron-left'}></i>
                </a>
                {dropdown[0] === true && <Dashboard/>}
            </li>
            </div>

            <div className='div1' >
            <li className='nav-item :: after' onClick={()=>setDropdown({...dropdown,1:!dropdown[1]})}>
            <a to='/' className='nav-links' >
            
                <i className='bi-three-dots'>Node</i>
                 
                <i className={dropdown[1] === true ? 'bi-chevron-down':'bi-chevron-left'}></i>
                </a>
                {dropdown[1] === true && <Nodes/>}
            </li>
            </div>

            <div className='div1'>
            <li className='nav-item' onClick={()=>setDropdown({...dropdown,2:!dropdown[2]})}>
            <a to='/' className='nav-links' >
            
                <i className='bi-three-dots'>Fota</i>
               
                <i className={dropdown[2] === true ? 'bi-chevron-down':'bi-chevron-left'}></i>
                </a>
                {dropdown[2] === true && <Fota />}
            </li>
            </div>

            <div className='div1'>
            <li className='nav-item' onClick={()=>setDropdown({...dropdown,3:!dropdown[3]})}>
            <a to='/' className='nav-links' >
            
                <i className='bi-three-dots'>Network</i>
               
                <i className={dropdown[3] === true ? 'bi-chevron-down':'bi-chevron-left'}></i>
                </a>
                {dropdown[3] === true && <Network />}
            </li>
            </div>
            
            {/* <li className='nav-item'>
                <i className='bi-three-dots'>Node</i>
                <i className='bi-chevron-right'></i>
            </li>
            <li className='nav-item'>
                <i className='bi-three-dots'>Map Topology</i>
                <i className='bi-chevron-right'></i>
            </li>
            <li className='nav-item'>
                <i className='bi-three-dots'>Fota</i>
                <i className='bi-chevron-right'></i>
            </li>
            <li className='nav-item'>
                <i className='bi-three-dots'>Admin</i>
                <i className='bi-chevron-right'></i>
            </li> */}
        </ul>
           
        </div>
    </div>

  );
}

export default Sidebar;