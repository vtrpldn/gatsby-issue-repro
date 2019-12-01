import React, { useState } from "react"

const Hooks = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2 onClick={() => setCount(count => count + 1)}>Click to increment</h2>
      <h2>This count will update normally:
          <div>
          {count}
        </div>
      </h2>
      <h2>This count will stop updating if you click really fast: <br /> {count}</h2>
    </>
  )
}

export default Hooks
