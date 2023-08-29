const qoute = document.getElementById('qoute')
console.log('first run')
const downloadImage = () => {
    console.log('inside download')
  html2canvas(qoute).then(canvas => {
    console.log('inside download2')
    const dataURL = canvas.toDataURL("image/png");
    const anchor = document.createElement("a");
    anchor.href = dataURL;
    anchor.download = "verses-of-sabr.png";
    anchor.click();
  });
};

document.getElementById('qoute').addEventListener("click", downloadImage);