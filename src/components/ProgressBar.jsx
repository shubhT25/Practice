import React, {useEffect} from 'react'

const ProgressBar = ({width}) => {
    useEffect(() => {
    console.log(width);
    }, [width]);
    
  return (
    <div>
        <h3 style={{marginTop: '10px'}}>Progress Bar</h3>
        <div className='pcontainer'>
        {width >= 0 && width <=100 ? (
            <div className='innerContainer' style={{ width: `${width ? width : 0}%` }}>
                {width ? width : 0}%
            </div>
        ):(
            alert("Enter correct Number")
        )}
        </div>
    </div>
  )
}

export default ProgressBar
