const qoute = document.getElementById('area_to_screenshot')

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

qoute.addEventListener("click", downloadImage);