import React from 'react'
import './LeftMenu.css'

export default function LeftMenu(props){
    return(
        props.imageArea.preview?
        <aside className="leftMenu">
           <h2>Заметки:</h2>
           {
           props.tagsWithMarkers.map((elem,i) => {
           return elem.tag?
           <p onClick={()=>props.onHighlightingTagAndMark(i)} key={i} className={elem.tag.excretion ?"leftMenuTag__allocated":"leftMenuTag__unselected"} >
               <span>{i+1}. &nbsp;</span>{elem.tag.name}</p>:null
           })
           }
        </aside>:null
    )
}