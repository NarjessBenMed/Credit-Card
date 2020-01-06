import React from 'react'
import './FormCard.js'

export default function Card(props) {
    return (
        
            





            <div className="Card">
         <h2>Campany Name </h2>
         <img className="SimCard" src="https://s4i6r5r7.stackpathcdn.com/wp/wp-content/themes/simoptions/assets/img/sim-card-bg-min.png"/>
          <label className="numCard"  maxLength="16"> {props.user.state.numCard}  </label>
          <label className="dTHru">   {props.user.state.ValidThru}  </label>

          <img className="MasterCard" src="https://i.pinimg.com/originals/28/99/08/289908a6bb2d5f2ab846f0606e72e0fe.png"/>
        
          <label className="UserName">   {props.user.state.UserName.toUpperCase()} </label>   
     













        </div>
    )
}
