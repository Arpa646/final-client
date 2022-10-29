
import img  from '../../assets/im/side.jpg'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
//import { format } from 'date-fns';
const AppBanner = ({selected,setDate}) => {

    
    return (
        <div class="hero min-h-screen p-3">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={img} class="max-w-sm rounded-lg shadow-2xl" />
    <div>
    <DayPicker
    mode="single"
      selected={selected}
      onSelect={setDate}
     />
      {/* <p>You have selected : {format(selected, 'PP')}</p> */}
    </div>
  </div>
</div>
    );
};

export default AppBanner;