import React, { useEffect, useRef, useState } from 'react'

const OutSideClickTest = () => {
  const [showButton, setShowButton] = useState(true);
  const ref = useRef()

  const handler = () => setShowButton(true)

  const listener = (event) => {
    if (!ref.current || ref.current.contains(event.target)) {
      return;
    }
    handler()
  }

  useEffect(() => {
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    };
  }, [ref]);


  return (
    <div style={{ backgroundColor: 'red' }} >
      {showButton && <button onClick={() => setShowButton(false)}>show content</button>}
      {!showButton && (<div ref={ref}>
        <h1>
          out side click example
        </h1>
        <p>
          this is our text that must click out to close
        </p>
      </div>)}
    </div>

  )
}

export default OutSideClickTest