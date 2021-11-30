import './about-status-codes.css';

import { StatusCodesTypes } from './StatusCodesTypes';

export const AboutStatusCodes = () => {
  return <div className="about-status-container">
    <h2>What are status codes:</h2>
    <p>HTTP response status codes indicate whether a specific HTTP request has been successfully completed.</p>
    <h3>Responses are grouped in five classes:</h3>
    <StatusCodesTypes></StatusCodesTypes>
  </div>
}

