import React from 'react'
import './ModalWindow.css'

export default function ModalWindow(props) {
  return (
            props.modalWindow?
            <div div className = "modal" onClick = {() => props.closeModalWindowAndClearLastMark()}>
              <div  className="modal__content" onClick={e => e.stopPropagation()}>
                  <div  className="modal__heading">
                     <h2>Оставьте заметку на данное изображение</h2>
                  </div>
                  <div className="modal__comments">
                     <textarea ref={props.tagValue} placeholder="Введите заметку"></textarea>
                  </div>
                  <div className='modal__buttons'>
                     <input type="button" value="Ок"
                     onClick={()=>props.onPutTagAndCloseModalWindow(props.tagValue)} />
                     <input type="button" value="Отмена" 
                     onClick = {() => props.closeModalWindowAndClearLastMark()}/>
                  </div>
              </div>
            </div>:null
  )
}