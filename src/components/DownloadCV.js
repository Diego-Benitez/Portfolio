// src/components/DownloadCV.js
import React from 'react';
import './DownloadCV.css';

const DownloadCV = () => (
  <div className="download-cv">
    <h2>Descargar Mi CV</h2>
    <a href="/assets/Diego-Benitez-CV.pdf" download className="download-button">
      Descargar CV
    </a>
  </div>
);

export default DownloadCV;
