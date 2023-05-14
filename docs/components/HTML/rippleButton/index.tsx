import React from "react";
import Styles from "./style.module.scss";


const RippleButton:React.FC = () => {
  const handleClick = (e) => {
    let elm = e.target;
    let layout = document.createElement('span');
    layout.className = Styles.layout;
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    layout.style.left = x + 'px';
    layout.style.top = y + 'px';

    elm.appendChild(layout);
    // 移除涟漪DOM
    setTimeout(() => {
      elm.removeChild(layout);
    }, 300);

    // 绑定click事件
    elm.onclick = handleClick;
  }
  return (
    <div className={Styles.btn} onClick={handleClick}>
        Click me
      </div>
    )
  };
export default RippleButton;