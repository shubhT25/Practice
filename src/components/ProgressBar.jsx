import React from 'react'

const ProgressBar = ({width}) => {
  return (
    <div>
        <h3>Progress Bar</h3>
        <div className='container'>
        {width >= 0 && width <=100 ? (
            <div className='innerContainer' style={{ width: `${width}%` }}>
                {width}%
            </div>
        ):(
            alert("Enter correct Number")
        )}
        </div>
    </div>
  )
}

export default ProgressBar
