import React from 'react' 
import { Metronome } from '@uiball/loaders'

function Loader() {

  let loeaderStyle= {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: "200px"
  }

  return (
    <div style={loeaderStyle}>
    <Metronome 
    size={100}
    speed={1.6} 
    color="#CD83A4" 
    />
</div>
  )
}
export default Loader