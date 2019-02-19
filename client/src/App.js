import React from 'react';
import ImageDropContainer from './containers/ImageDropContainer';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Text Image Extraction to CSV
        </p>
      </header>
      <ImageDropContainer className="ImageDropContainer" />
      <footer className="App-footer" />
    </div>
  );
}
