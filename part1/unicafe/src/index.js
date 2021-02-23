import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Estatistisc=({text})=><p>{text}</p>
    
const Button=({text,action})=><button onClick={action}>{text}</button>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const goodcounter=()=>{setGood(good+1)}
  const neutralcounter=()=>{setNeutral(neutral+1)}
  const badcounter=()=>{setBad(bad+1)}

  return (
    <div>
      <Button action={goodcounter} text="good"/>
      <Button action={neutralcounter} text="neutral"/>
      <Button action={badcounter} text="bad"/>

      {good===0&&neutral===0&&bad===0?<p>No feedback given</p>:( 
           <div>
             <h2>Statistisc</h2>
             <table>
               <tbody>
                   <tr>
                     <th><Estatistisc text="good" /></th>
                     <th>{good}</th>
                   </tr>
                   <tr>
                     <th><Estatistisc text="neutral" /></th>
                     <th>{neutral}</th>
                   </tr>
                   <tr>
                     <th><Estatistisc  text="bad"/ ></th>
                     <th>{bad}</th>
                   </tr>
                   <tr>
                     <th><Estatistisc text="all"/ ></th>
                     <th>{good+neutral+bad} </th>
                   </tr>
                   <tr>
                     <th><Estatistisc text="average"/ ></th>
                     <th>{good+neutral+bad/3}</th>
                   </tr>
                   <tr>
                     <th><Estatistisc  text="positive"/ ></th>
                     <th></th>
                   </tr>  
               </tbody>
             </table> 
           </div>
        )}
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)