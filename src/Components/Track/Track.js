
import React from "react"
import "./track.css"

function Track (){

    function renderAction(){
      return <button className="Track-action">{isRemoval?"-":"+"}</button>  
    }
    return(<div className="Track">
    <div className="Track-information">
      <h3><!-- track name will go here --></h3>
      <p><!-- track artist will go here--> | <!-- track album will go here --></p>
    </div>
{renderAction()}
  </div>)
}
export default Track