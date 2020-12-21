import './App.css';
import React from 'react'
import Header from './Components/Header/Header'
import LeftMenu from './Components/LeftMenu/LeftMenu'
import ImageArea from './Components/ImageArea/ImageArea'
import ModalWindow from './Components/ModalWindow/ModalWindow'
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       imageArea: {},
       modalWindow: false,
       tagsWithMarkers:[],
    }
    this.tagValue = React.createRef()
  }
 
   addFileToDropzone = files => {
      let currentFile = files.find(elem=>{
      if (elem.name.endsWith('jpg') || elem.name.endsWith('jpeg') || 
         elem.name.endsWith('.png') || elem.name.endsWith('.gif') || elem.name.endsWith('.bmp')) {
         return true
        }
        return false
      })
      try {
         currentFile.preview = URL.createObjectURL(currentFile)
          this.setState({
            imageArea: currentFile,
            tagsWithMarkers: []
          })
      } catch (err) {
        console.log("Был добавлен документ",err.name);
      }
   }
   


   onPutMarkAndOpenModalWindow = event => {
      const coordinateX = event.nativeEvent.offsetX-15.5;
      const coordinateY = event.nativeEvent.offsetY-30;
      let currentArrayTagsWithMarkers = [...this.state.tagsWithMarkers];
      let mark = {coordinateX, coordinateY, excretion: true}
      currentArrayTagsWithMarkers.push({mark})
      this.setState({
        tagsWithMarkers: currentArrayTagsWithMarkers,
        modalWindow: true
      })
   }
   
   closeModalWindowAndClearLastMark =()=>{
     let currentArrayTagsWithMarkers = [...this.state.tagsWithMarkers];
     currentArrayTagsWithMarkers.splice(currentArrayTagsWithMarkers.length-1,1);
     this.setState({
        modalWindow: false,
        tagsWithMarkers: currentArrayTagsWithMarkers
     })
   }

   onPutTagAndCloseModalWindow = (node) =>{
     let elem = node.current.value.replace(/ +/g, ' ').trim();
     let currentArrayTagsWithMarkers = [...this.state.tagsWithMarkers];
     if (elem.length > 1 && currentArrayTagsWithMarkers.length === 1) {
       let objectTag = {
         name: elem,
         excretion : true
       }
       currentArrayTagsWithMarkers[currentArrayTagsWithMarkers.length - 1].tag = objectTag;
       this.setState({
         modalWindow: false,
         tagsWithMarkers: currentArrayTagsWithMarkers
       })
     }
     else if (elem.length > 1 && currentArrayTagsWithMarkers.length > 1) {
      let trueElement = currentArrayTagsWithMarkers.find(elem=>elem.mark.excretion === true);
      trueElement.mark.excretion = false;
      trueElement.tag.excretion = false;
      let objectTag = {
        name: elem,
        excretion: true
      }
      currentArrayTagsWithMarkers[currentArrayTagsWithMarkers.length - 1].tag = objectTag;
      this.setState({
        modalWindow: false,
        tagsWithMarkers: currentArrayTagsWithMarkers
      })
     }
   }

   onHighlightingTagAndMark = i =>{
     let currentArrayTagsWithMarkers = [...this.state.tagsWithMarkers];
     let trueElement = currentArrayTagsWithMarkers.find(elem=>elem.tag.excretion === true);
     trueElement.mark.excretion = false;
     trueElement.tag.excretion = false;
     currentArrayTagsWithMarkers[i].mark.excretion = true;
     currentArrayTagsWithMarkers[i].tag.excretion = true;
     this.setState({
       tagsWithMarkers: currentArrayTagsWithMarkers
     })
   }
 
  render(){
    return (
      <div className="App">
         <Header 
          addFileToDropzone = {this.addFileToDropzone}
         />
         <div className="main">
           <LeftMenu 
           imageArea={this.state.imageArea}
           tagsWithMarkers={this.state.tagsWithMarkers}
           onHighlightingTagAndMark = {this.onHighlightingTagAndMark}
           />

           <ImageArea 
           imageArea={this.state.imageArea}
           onPutMarkAndOpenModalWindow={this.onPutMarkAndOpenModalWindow}
           tagsWithMarkers={this.state.tagsWithMarkers}
           onHighlightingTagAndMark = {this.onHighlightingTagAndMark}
          />
         </div>
         <ModalWindow 
         closeModalWindowAndClearLastMark = {this.closeModalWindowAndClearLastMark}
         modalWindow={this.state.modalWindow}
         onPutTagAndCloseModalWindow = {this.onPutTagAndCloseModalWindow}
         tagValue = {this.tagValue}
         />
      </div>
    );
  }
}

export default App;
