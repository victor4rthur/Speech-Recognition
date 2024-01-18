Test Here: https://victor4rthur.github.io/Speech-Recognition/

# Speech Recognition Web App

## Overview

This web application utilizes the SpeechRecognition API to capture and display speech input in a real-time manner on a web page. The application creates a new SpeechRecognition instance, sets it to provide interim results, and dynamically updates the displayed text as the speech is recognized.

## Features

- **Real-time Speech Recognition:** The application captures and displays speech input as it is recognized, providing a seamless and interactive experience.

- **Interim Results:** Interim results are displayed in real-time, allowing users to see partial transcriptions while speaking.

## How to Use

1. Open the web application in a supported browser.

2. Start speaking, and the recognized speech will be displayed on the page in real-time.

3. The displayed text is updated dynamically as speech is recognized, providing a continuous transcription.

## Code Explanation

The main components of the code include:

- **SpeechRecognition Initialization:** Checks for SpeechRecognition API support, creates a new instance, and sets it up for interim results.

- **DOM Manipulation:** Creates a paragraph element to display transcriptions and appends it to the HTML element with the class 'words'.

- **Event Listeners:** Listens for the 'result' event to update the displayed text in real-time and for the 'end' event to restart the recognition.

## Dependencies

- This application relies on the SpeechRecognition API, which is available in modern browsers. It automatically falls back to the webkitSpeechRecognition API in browsers that do not support the standard SpeechRecognition API.

## Getting Started

Clone the repository and open the HTML file in a web browser to start using the speech recognition web app.

```bash
git clone <repository-url>
cd <repository-directory>
open index.html
