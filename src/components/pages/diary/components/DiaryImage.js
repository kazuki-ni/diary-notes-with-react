import { addLi } from "../convertToBase64";

export const DiaryImage = (props) => {

  const imgList = props.imgList;

  //* files => ()
  const previewImgs = () => {
    const imgFileField = document.getElementById("img-upload");
    const files = imgFileField.files;
    console.log(files)
    addLi(files)
    props.setDiaryImage();
    // props.addURLofImgs(gatherImgURLs());
  }

  return (
    <ul id="diary-img-list">
      {Array.from(imgList).map( (url) => {
        return (
          <li
            key={url}
            className="diary-img"
          >
            <img
              src={url}
              alt=""
            />
          </li>
        )
      })}

      {( imgList.length < 4 ) && (
        <li className="diary-img">
          <label
              id="img-upload-label"
          >
            <i
              id="add-btn"
              className="bx bx-image-add"
            />
            <input
              id="img-upload"
              type="file"
              name="img-upload"
              accept="image/jpeg, image/gif, image/png"
              onChange={previewImgs}
              multiple
            />
          </label>
        </li>
      )}

    </ul>
  )
}
