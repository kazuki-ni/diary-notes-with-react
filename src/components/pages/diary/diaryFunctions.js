const toggleImageFunc = (action) => {
  switch (action) {
    case "OPEN":
      document.getElementById("diary").classList.replace("diary-without-img", "diary");
      document.getElementById("diary-title").classList.replace("diary-title-without-img", "diary-title");
      document.getElementById("diary-content").classList.replace("diary-content-without-img", "diary-content");
      break;
    case "CLOSE":
      document.getElementById("diary").classList.replace("diary", "diary-without-img");
      document.getElementById("diary-title").classList.replace("diary-title", "diary-title-without-img");
      document.getElementById("diary-content").classList.replace("diary-content", "diary-content-without-img");
      break;
    default:
      ;
  }
}

const setDiaryImage =  (bool = true ) => {
  if (!bool) {return}

  let img_area_w, img_area_h
  if (window.innerWidth > 1024) {
    img_area_w = (window.innerWidth-78)/2-30;
    img_area_h = 733;
  } else {
    img_area_w = window.innerWidth-78-60;
    img_area_h = 200;
  }

  const imgs = Array.from(document.getElementsByClassName("diary-img"));
  const nums = imgs.length;
  const col = (nums > 2) ? 2 : 1;
  const row = (nums > 1) ? 2 : 1;

  if ( window.innerWidth > 1024 ) {
    imgs.forEach(img=>{
      img.style.width = img_area_w/col - 6 + "px";
      img.style.height = img_area_h/row + 3 + "px";
    })
  } else {
    imgs.forEach(img=>{
      img.style.width = img_area_w/nums - 5 + "px";
      img.style.height = "200px";
    })
  }
}

const gatherImgURLs = () => {
  const urls = [];
  const li = document.getElementsByClassName("diary-img");
  Array.from(li).forEach(elem => {
    try {
      urls.push(elem.getElementsByTagName("img")[0].src);
    } catch {
      console.log("No images have not yet been uploaded");
    }
  })
  return urls;
}

const showURLofImgs = (newImgList) => {
  console.log("These images are to be inputted with diary:");
  newImgList.map((url, i)=>console.log(`${i+1}: ${url.slice(0, 30)}`))
};

export { toggleImageFunc, setDiaryImage, gatherImgURLs, showURLofImgs };