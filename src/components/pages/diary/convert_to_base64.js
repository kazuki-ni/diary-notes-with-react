const image2base64 = (file, MAX_LENGTH) => {
  return new Promise((resolve, reject) => {

    const fileinput = document.getElementById("img-upload");
    if (fileinput === null)
        reject("Cannot find the expected element");

    const fileData = file
    if (fileData === undefined)
        reject("no file")

    if (!fileData.type.match('image.*'))
        reject("file type error");

    const image = new Image();
    const reader = new FileReader();
    image.crossOrigin = "Anonymous";

    reader.onload = (e) => {
      image.onload = () => {
        let width, height;
        [width, height] = getSize(image, MAX_LENGTH)
        const base64 = drawCanvas(image, width, height);
        resolve(base64)
      }
      image.src = e.target.result;
    }
    reader.readAsDataURL(fileData);
  })
}

const getSize = (image, MAX_LENGTH) => {
  let width, height;
  if(image.width > image.height){
    // 横長の画像は横のサイズを指定値にあわせる
    const ratio = image.height/image.width;
    width = MAX_LENGTH;
    height = MAX_LENGTH * ratio;
  } else {
    // 縦長の画像は縦のサイズを指定値にあわせる
    const ratio = image.width/image.height;
    width = MAX_LENGTH * ratio;
    height = MAX_LENGTH;
  }
  return [width, height]
}

const drawCanvas = (image, width, height) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, width, height);
  const base64 = canvas.toDataURL('image/jpeg');
  return base64
}

const addLi_each = async (file, index) => {
  const list = document.getElementById("diary-img-list");
  const li = document.createElement("li");
  const btnLi = list.lastChild;
  list.insertBefore(li, btnLi);
  li.key = index;
  li.className = "diary-img";

  const img = document.createElement("img");
  const nums = list.childElementCount;
  const MAX_LENGTH =  (nums === 1) ? 500
                    : (nums === 2) ? 500
                    : (nums === 3) ? 250
                    : 250;
  const b64 = await image2base64(file, MAX_LENGTH);
  // img.src = URL.createObjectURL(file);
  img.src = b64;
  img.alt = ""
  // img.onload = () => { URL.revokeObjectURL(img.src) };
  li.appendChild(img);
  if (list.childElementCount === 5) {
    // console.log("Images cannot be added more than 4.");
    btnLi.remove();
  }
}

const addLi = (files) => {
  Array.from(files).forEach( (file, index) => {
    console.log(`${index+1}: ${file.name}`);
    addLi_each(file, index);
  })
}

export { addLi };