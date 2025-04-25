
import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">About Us</h1>
      <div className="space-y-2">
        <p>
          <strong>Course Title:</strong> Advanced Topics in Software Engineering and Information Systems I
        </p>
        <p>
          <strong>Program Title:</strong> PROCC
        </p>
        <p>
          <strong>First Semester, Year:</strong> 2025
        </p>
        <p>
          <strong>University Name:</strong> UFS, Brazil
        </p>
        <p>
          <strong>Project Title:</strong> "Exploring Interests in Software Engineering and Information Systems Prompt: An Experimental Study with LLMs"
        </p>
      </div>
      <h2 className="text-xl font-semibold mt-4 mb-2">Work Team:</h2>
      <ul className="list-disc list-inside">
        <li>MOAATH ALSHAIKH, UFBA</li>
        <li>RICARDO VIEIRA, UFBA</li>
        <li>SAMUEL MERCÊS, UEFS</li>
        <li>CLÉLIO XAVIER, UFBA</li>
        <li>LIDIANY CERQUEIRA, UFBA</li>
      </ul>
      <h2 className="text-xl font-semibold mt-4 mb-2">Supervised by:</h2>
      <ul className="list-disc list-inside">
        <li>Professor: Glauco Carneiro, UFS, Labes2</li>
        <li>Professor: Manoel Mendonça, UFBA, Labes2</li>
      </ul>
    </div>
  );
};

export default AboutPage;

