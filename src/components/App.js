import { useState } from "react";
import Tooltip from "./Tooltip";


function App() {
  const [hover,setHover] = useState(false);

  const [tooltipClass,setTooltipClass] = useState('top');

  const mouseEnter = () => {
    setHover(true);
  }

  const mouseLeave = () => {
    setHover(false);
  }

  return (
    <div className="App">
      <h1>Tooltip Example</h1>
      <div className="btn-group">
        <button onClick={() => setTooltipClass('top')} className={tooltipClass === 'top' ? `active` : ''}>Up</button>
        <button onClick={() => setTooltipClass('left')} className={tooltipClass === 'left' ? `active` : ''}>Left</button>
        <button onClick={() => setTooltipClass('right')} className={tooltipClass === 'right' ? `active` : ''}>Right</button>
        <button onClick={() => setTooltipClass('bottom')} className={tooltipClass === 'bottom' ? `active` : ''}>Bottom</button>
      </div>
      <div className="hover-container">
        {hover ? <Tooltip class={tooltipClass} /> : ''}
        <button className="hover-btn" onMouseEnter={mouseEnter}  onMouseLeave={mouseLeave}>
          Hover Over Me
        </button>
      </div>
    </div>
  );
}

export default App;
