# **App Name**: ReqExtractor.AI

## Core Features:

- Input Text Handling: Enable users to upload a .txt file via a dialog box or paste text directly into a text box. Implement a clear button to reset the input area.
- Requirement Extraction: Employ the Gemini API with RAG (Retrieval-Augmented Generation) to extract functional and non-functional requirements from the input text. The LLM will use a tool to decide which parts of the input text are requirements.
- UI Elements and Navigation: Integrate a dropdown menu for language selection (English, Brazilian Portuguese, Arabic) and links to 'Tutorial Guide' and 'About Us' (pointing to README.md content).

## Style Guidelines:

- Primary color: Light gray (#F0F0F0) for a clean background.
- Secondary color: White (#FFFFFF) for content containers to provide contrast.
- Accent: Teal (#008080) for interactive elements and highlights.
- Simple, single-column layout optimized for readability.
- Minimalist icons for actions like upload, clear, and language selection.
- Subtle transitions for dialog boxes and text updates.

## Original User Request:
You are an expert in designing AI-powered software engineering applications.
Design a program that extracts functional and non-functional requirements by reading a txt text file using LLM + RAG. Note: Use the free Gemini API.
Rely on the following link for design:
https://firebase.google.com/docs/genkit/rag?hl=ar

For interfaces: Support text uploading via a dialog box to select a txt file or by pasting text into a text box.

Add a clear button.

Add a drop-down menu button in the upper right corner of the homepage that allows the user to select one of the following three languages ​​(English, Brazilian Portuguese, Arabic).

Add a link at the bottom right of the page called "Tutorial Guide" containing instructions for using the program.

Add a link at the bottom left of the home page called "About Us", containing information about the project team:
Course Title: Advanced Topics in Software Engineering and Information Systems I
Program Title: PROCC
First Semester, Year 2025
University Name: UFS, Brazil
Project Title: Exploring Interests in Software Engineering and Information Systems
Prompt: An Experimental Study with LLMs

Work Team:
MOAATH ALSHAIKH, UFBA

RICARDO VIEIRA, UFBA

SAMUEL MERCÊS, UEFS

CLÉLIO XAVIER, UFBA

LIDIANY CERQUEIRA, UFBA

Supervised by:
Professor: Manoel Mendonça, UFBA, Labes2
Professor: Glauco Carneiro, UFS, Labes2

Write all the information you provided in the "About Us" and "Tutorial Guide" links in an organized README.md file in English.

Important Note: Design the interfaces using simple HTML that can be opened through GitHub pages.

When finished, push the program to GitHub at the following link:
https://github.com/moaathalshaikh/ReqExtractor
  