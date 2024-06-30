import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';

const SigningBoard = () => {
  const sigCanvas = useRef({});  

  const clear = () => {
    sigCanvas.current.clear();
  };

  const save = () => {
    if (sigCanvas.current.isEmpty()) {
      alert('Please provide a signature first.');
    } else {
      const dataURL = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
      console.log(dataURL); 
      alert('Signature saved!');
    }
  };

  const download = () => {
    if (sigCanvas.current.isEmpty()) {
      alert('Please provide a signature first.');
    } else {
      const dataURL = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataURL;
      link.download = 'signature.png';
      link.click();
    }
  };

  return (
    <div className="container">
      <SignatureCanvas
        ref={sigCanvas}
        penColor="black"
        canvasProps={{ className: 'signature-canvas' }}
      />
      <div className="buttons d-flex align-items-center justify-content-center">
        <button className='btn btn-danger' onClick={clear}>Clear</button>
        <button className='btn btn-primary' onClick={save}>Save</button>
        <button className='btn btn-secondary' onClick={download}>Download</button>
      </div>
    </div>
  );
};

export default SigningBoard;
