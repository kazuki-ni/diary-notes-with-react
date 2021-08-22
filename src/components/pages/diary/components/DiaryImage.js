import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

import { addLi } from "../convertToBase64";
import {
  layoutDiaryImage,
  // showURLofImgs
} from '../diaryFunctions';

export default function DiaryImage() {
	//* State
	const { imgList } = useSelector( state => state.diaryReducer.diary );

  //* files => ()
  const previewImgs = () => {
    const imgFileField = document.getElementById("img-upload");
    const files = imgFileField.files;
    console.log(files);
    addLi(files);
    layoutDiaryImage();
    // showURLofImgs(gatherImgURLs());
  }

  //* DidMount & DidUpdate
  useEffect(() => layoutDiaryImage());

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
