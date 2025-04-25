
import React from 'react';

const TutorialPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Tutorial Guide</h1>
      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Uploading Text or Pasting Text</h2>
          <p>
            You can input text into the application in one of two ways:
          </p>
          <ol className="list-decimal list-inside">
            <li>
              <strong>Uploading a .txt File:</strong>
              <ul>
                <li>Click on the "Upload .txt File" button.</li>
                <li>A dialog box will appear, allowing you to select a .txt file from your computer.</li>
                <li>Once the file is selected, its content will be automatically loaded into the text input area.</li>
              </ul>
            </li>
            <li>
              <strong>Pasting Text:</strong>
              <ul>
                <li>Simply click on the text area labeled "Paste your text here..." and paste the text directly.</li>
              </ul>
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. Clearing the Text Area</h2>
          <p>
            To clear the text area, simply click on the "Clear" button. This will remove any text currently in the input area,
            allowing you to start fresh.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. Extracting Requirements</h2>
          <p>
            Once you have entered your text, click on the "Extract Requirements" button. The application will process the text
            and attempt to extract both functional and non-functional requirements.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Viewing Extracted Requirements</h2>
          <p>
            After the extraction process is complete, the extracted requirements will be displayed below the input area.
            Each requirement will be listed with its type (functional or non-functional) and a brief description.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. Selecting a Language</h2>
          <p>
            To change the language of the application:
          </p>
          <ol className="list-decimal list-inside">
            <li>Click on the language dropdown menu located in the upper right corner of the page.</li>
            <li>Select your desired language from the list of available options (English, Brazilian Portuguese, Arabic).</li>
            <li>The application will update to reflect your language selection.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">6. Navigating "About Us" and "Tutorial Guide"</h2>
          <p>
            Links to "About Us" and "Tutorial Guide" are located in the footer of the page. Click on these links to learn more
            about the project team and to access this tutorial, respectively.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TutorialPage;
