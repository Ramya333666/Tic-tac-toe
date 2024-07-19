import React, { useState,useRef } from 'react'
import x from './x.png'
import o from './o.png'
import './App.css'

let data=["","","","","","","","",""]

const Game = () => {
    let [count,setCount]=useState(0);
    let [istrue,setIstrue]=useState(false);
    let refuse= useRef(null);
    const handleclick = (e,num) =>
    {
        if(istrue)
        {
            return 0;
        }
        if(count%2===0)
        {
            e.target.innerHTML ="X"
            data[num]="X";
            setCount(++count)
        }
        else{
            e.target.innerHTML ="O"
            data[num]="O";
            setCount(++count)
        }
        winner();
    }

    const winner = () =>
    {
        if(data[0]===data[1] && data[1]===data[2] && data[2]!=="")
            {
               won(data[2]);
            }
        else if(data[3]===data[4] && data[4]===data[5] && data[5]!=="")
            {
                won(data[5]);
            }
        else if(data[6]===data[7] && data[7]===data[8] && data[8]!=="")
            {
                won(data[8]);
            }    
       else if(data[0]===data[3] && data[3]===data[6] && data[6]!=="")
           {
                won(data[6]);
           }  
        else if(data[1]===data[4] && data[4]===data[7] && data[7]!=="")
        {
            won(data[7]);
        } 
        else if(data[2]===data[5] && data[5]===data[8] && data[8]!=="")
        {
            won(data[8]);
        }   
        else if(data[0]===data[4] && data[4]===data[8] && data[8]!=="")
        {
            won(data[8]);
        }
        else if(data[2]===data[4] && data[4]===data[6] && data[6]!=="")
        {
            won(data[6]);
        }   
    }
    const won = (dummy) =>
    {
        setIstrue(true);
        if(dummy==='X')
        {
            refuse.current.innerHTML=`Congrats <img src=${x}>`
        }
        else
        {
            refuse.current.innerHTML=`Congrats <img src=${o}>`
        }
    }
  return (
    <div className='whole'>
        <div className='title'ref={refuse}>Tic Tac Toe</div>
        <div className='board'>
        <div>
            <button onClick={(e)=>handleclick(e,0)}></button>
            <button onClick={(e)=>handleclick(e,1)}></button>
            <button onClick={(e)=>handleclick(e,2)}></button>
        </div>
        <div>
            <button onClick={(e)=>handleclick(e,3)}></button>
            <button onClick={(e)=>handleclick(e,4)}></button>
            <button onClick={(e)=>handleclick(e,5)}></button>
        </div>
        <div>
            <button onClick={(e)=>handleclick(e,6)}></button>
            <button onClick={(e)=>handleclick(e,7)}></button>
            <button onClick={(e)=>handleclick(e,8)}></button>
        </div>
        </div>
    </div>
  )
}

export default Game
