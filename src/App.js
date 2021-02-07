import { useState } from 'react'

function App() {
  //下面是是解構賦值
  const [total, setTotal] = useState(666)
  return (
    <h1
      onClick={() => {
        setTotal(total + 1)
      }}
    >
      {total}
    </h1>
  )
}

export default App
