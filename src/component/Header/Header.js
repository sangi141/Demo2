import Time from '../Time/Time';
import './Header.css';

const Header = () =>{
  return(

    <div className="head-div">
        <div className='head-div1'>
        <i className='bi-person-circle'></i>
        <i className='bi-bell'></i>
        </div>
        <div className='head-div2'>
        <Time></Time>
        </div>
    </div>

  );
}

export default Header;