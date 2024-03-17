import React, {useState} from 'react'

const Show = () => {
    const [show, setShow] = useState(false);
  return (
    <div style={{marginTop:10}}>
      <button onClick = {() => setShow(!show)} style={{display: 'inline', width: 'auto'}}>
          Show/Hide
      </button>
      {show && <p>Press the button to hide or show.</p>}
    </div>
  )
}

export default Show
