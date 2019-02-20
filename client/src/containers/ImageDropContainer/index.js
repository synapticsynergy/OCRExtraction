import React from 'react';
import Dropzone from 'react-dropzone';
import DropInput from './DropInput';
import './ImageDropContainer.css';

class ImageDropContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
    };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(acceptedFiles) {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const fileAsBinaryString = reader.result;
        this.setState({ file: fileAsBinaryString });
        console.log('should have loaded', this.state.file);
        // do whatever you want with the file content
      };
      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');

      reader.readAsBinaryString(file);
    });
  }

  render() {
    return (
      <div className="dropContainer">
        <p>Drop Image Here:</p>
        <div className="dropInput">
          <Dropzone
            accept="image/*"
            className="dropZone"
            onDrop={this.onDrop}
          >
            {DropInput}
          </Dropzone>
        </div>
      </div>
    );
  }
}

export default ImageDropContainer;
