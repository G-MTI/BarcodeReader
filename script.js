const codeReader = new ZXing.BrowserBarcodeReader();
const videoElement = document.getElementById('video');
const resultElement = document.getElementById('result');

// Avvia il video
navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
    .then((stream) => {
        videoElement.srcObject = stream;
        videoElement.play();
    })
    .catch((err) => {
        console.error('Errore nell\'accesso alla fotocamera:', err);
    });

// Funzione per decodificare i codici a barre
codeReader.decodeFromVideoDevice(null, 'video', (result, err) => {
    if (result) {
        resultElement.textContent = `Risultato: ${result.text}`;
    }
    if (err && !(err instanceof ZXing.NotFoundException)) {
        console.error('Errore di decodifica:', err);
    }
});