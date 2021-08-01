import React from 'react'

import { bg_img_path, preview_img_path } from './diary_image_path';

const ImageList = (props) => {

  return (
    <ul className="diary-bg-img-list">
      {preview_img_path.map( (file, index) => {
          return (
            <li
              key={file}
              // className="diary-bg-img"
            >
              <img
                className="diary-bg-img"
                src={file}
                alt=""
                onClick={() => props.bgChose(bg_img_path[index])}
              />
            </li>
          )
        })
      }
    </ul>
  )
}

export default ImageList;