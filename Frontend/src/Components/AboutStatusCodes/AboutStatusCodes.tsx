import './about-status-codes.css';

import { StatusCodesTypes } from './StatusCodesTypes';

export const AboutStatusCodes = () => {
  return <div className="about-status-container">
    <h4>What are status codes:</h4>
    <p>HTTP response status codes indicate whether a specific HTTP request has been successfully completed.</p>
    <p>Responses are grouped in five classes:</p>
    <StatusCodesTypes></StatusCodesTypes>
  </div>
}

