import React from 'react'
import './ImageArea.css'
import {AiTwotoneEnvironment} from 'react-icons/ai'
export default function ImageArea(props){
    return(
        <main>
          {props.imageArea.preview ?
          <div className="imageArea">
            {
            props.tagsWithMarkers.map((elem,i)=>{
              return <AiTwotoneEnvironment
              onClick={()=>props.onHighlightingTagAndMark(i)}
              key={i}
              size = "2em"
              color = {elem.mark.excretion?'red':'blue'}
              className = "imageArea__mark"
              style={{top: elem.mark.coordinateY, left: elem.mark.coordinateX}}
              / >
            })

            }
            <img className='imageArea__image' 
            alt="Картинка отсутствует" 
            src={props.imageArea.preview}
            onClick={event=>props.onPutMarkAndOpenModalWindow(event)} />
          </div>:null}
        </main>
    )
}