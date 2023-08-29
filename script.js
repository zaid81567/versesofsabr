const container = document.querySelector(".container");
const html2canvas = require("html2canvas");

const downloadImage = () => {
    console.log('inside download')
  html2canvas(container).then(canvas => {
    console.log('inside download2')
    const dataURL = canvas.toDataURL("image/png");
    const anchor = document.createElement("a");
    anchor.href = dataURL;
    anchor.download = "verses-of-sabr.png";
    anchor.click();
  });
};

document.querySelector(".container").addEventListener("click", downloadImage);