const qoute = document.getElementById('qoute');

const downloadImage = () => {
  qoute.style.boxShadow = 'none';
  html2canvas(qoute).then(canvas => {
    const dataURL = canvas.toDataURL("image/png");
    const anchor = document.createElement("a");
    anchor.href = dataURL;
    anchor.download = "verses-of-sabr.png";
    anchor.click();
  });
  qoute.style.boxShadow = "0 0 5px 4px rgba(0,0,0,0.1)";
};

document.getElementById('qoute').addEventListener("click", downloadImage);