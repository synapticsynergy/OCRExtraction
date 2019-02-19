import React from 'react';
import Dropzone from 'react-dropzone';
import DropInput from './DropInput';
import './ImageDropContainer.css';

export default function ImageDropContainer() {
  return (
    <div className="dropContainer">
      <p>Drop Image Here:</p>
      <div className="dropInput">
        <Dropzone accept="image/*" className="dropZone">
          {DropInput}
        </Dropzone>
      </div>
    </div>
  );
}
