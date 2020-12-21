import React from 'react'
import './DropZone.css'
import Dropzone from 'react-dropzone'

export default function DropZone(props){
    return (
        <Dropzone
         onDrop={files => {
                props.addFileToDropzone(files);
                 }
                }
        >
                {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()} className="dropZone">
                    <input {...getInputProps()} />
                    <div className="dropZone__container">
                      <p>Нажмите на область или перетащите изображение чтобы добавить</p>
                    </div>
                </div>
              )}
        </Dropzone>
    )
}