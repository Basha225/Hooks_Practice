import React, { useMemo, useState } from 'react'


//useMemo(fn, [])
//it is used to memoize functions results
//150000
const arr = []
const UseMemo = () => {
  const [count, setCount] = useState(0) //1
  const [name, setName] = useState("Anil")
  function sumOfNumbers(){
    console.log("am i re-rendering??")
    let sum = 0 
    for(let i = 0; i <= 100; i++){
      sum += i
    }
    return sum;
  }
  const num = useMemo(()=> sumOfNumbers(), [name])
  // const num = sumOfNumbers()
  arr.push(num)
//   console.log(arr)
//   console.log(arr[1])
  console.log(arr[0] == arr[1]) 
  //1st render -> [f] -> 0x100 -> f == undefined
  //2nd render -> [f, f] -> 0x200 -> f == f -> false
  return (
    <div>
      <h3>Sum of numbers value : {num}</h3>
      <h1>Counter : {count} - {name}</h1>
      <button onClick={()=> setCount(count + 1)}>+</button>
      <button onClick={()=> setName("Sandy")}>Change Name</button>
      

    </div>
  )
}

export default UseMemo;