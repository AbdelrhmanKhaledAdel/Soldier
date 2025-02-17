import React, { useState, useEffect } from "react";

// Material Icons
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import StackedBarChartOutlinedIcon from '@mui/icons-material/StackedBarChartOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';

// Style
import "../../styles/counter.css"

function Counter() {

  const CounterItem = ({ iconClass, title, endValue }) => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      let startValue = 0;
      let duration = Math.floor(5000 / endValue);
  
      const counter = setInterval(() => {
        startValue += 1;
        setCount(startValue);
        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);
  
      return () => clearInterval(counter); // Clean up the interval on unmount
    }, [endValue]);
    // console.log(count);
    
    return (
      <div className="counting">
        <div className="icon-left">
          {iconClass}
        </div>
        <div className="desc">
          <h2 className="num">{count}</h2>
          <span>{title}</span>
        </div>
      </div>
    );
  };
  

  return (
    <div className="counter">
      <div className="container">
        <CounterItem
          iconClass={<PaymentsOutlinedIcon className="counting_icon"/>}
          title="The Sales"
          endValue={8565}
        />
        <CounterItem
          iconClass={<StackedBarChartOutlinedIcon className="counting_icon"/>}
          title="The Profits"
          endValue={11200}
        />
        <CounterItem
          iconClass={<VolunteerActivismOutlinedIcon className="counting_icon"/>}
          title="Positive Evaluations"
          endValue={40030}
        />
        <CounterItem
          iconClass={<SentimentDissatisfiedOutlinedIcon className="counting_icon"/>}
          title="Negative Evaluations"
          endValue={150}
        />
      </div>
  </div>
  )
}


export default Counter