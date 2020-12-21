import React from 'react'
import './Header.css'
import SeachInput from '../UI/SeachInput/SeachInput'
import LoginButton from '../UI/LoginButton/LoginButton'
import DropZone from '../DropZone/DropZone'
export default function Header(props){
    return (
    <div className="header">
        <header>
            <DropZone 
            addFileToDropzone= {props.addFileToDropzone}
            />
            <div className="heder__ui">
              <SeachInput />
              <LoginButton />
            </div>
        </header>
    </div>
    )
}