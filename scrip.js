// Check for SpeechRecognition support and use the appropriate API
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// Create a new SpeechRecognition instance
const recognition = new SpeechRecognition();

// Enable interim results to get partial transcriptions
recognition.interimResults = true;

// Create a paragraph element to display the transcriptions
let p = document.createElement('p');

// Select the element with the class 'words' and append the paragraph element to it
const words = document.querySelector('.words');
words.appendChild(p);

// Event listener for the 'result' event, which is triggered when speech is recognized
recognition.addEventListener('result', e => {
    // Extract and concatenate the transcript from the recognition results
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    // Set the text content of the paragraph element to the transcript
    p.textContent = transcript;

    // Check if the current result is final and start a new paragraph if needed
    if (e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
    }

});

// Event listener for the 'end' event, which is triggered when the recognition ends
recognition.addEventListener('end', recognition.start);

// Start the recognition process
recognition.start();
