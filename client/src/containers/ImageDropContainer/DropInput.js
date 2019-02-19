import React from 'react';

export default function DropInput(dropActions) {
  const baseStyle = {
    width: '80vw',
    height: '80vw',
    borderWidth: 2,
    borderColor: '#666',
    borderStyle: 'dashed',
    borderRadius: 5,
  };
  const activeStyle = {
    borderStyle: 'solid',
    borderColor: '#6c6',
    backgroundColor: '#eee',
  };
  const rejectStyle = {
    borderStyle: 'solid',
    borderColor: '#c66',
    backgroundColor: '#eee',
  };
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    acceptedFiles,
    rejectedFiles,
  } = dropActions;

  let styles = { ...baseStyle };
  styles = isDragActive ? { ...styles, ...activeStyle } : styles;
  styles = isDragReject ? { ...styles, ...rejectStyle } : styles;

  return (
    <div
      {...getRootProps()}
      style={styles}
    >
      <input {...getInputProps()} />
      {isDragReject && <div>Unsupported file type...</div>}
    </div>
  );
}
