import { bg_img_path, preview_img_path } from '../diaryImagePath';

const ImageList = (props) => {

	const bgChose = (bg_img) => {
		const diary_root = document.getElementById("diary-root");
		diary_root.style.backgroundImage = "url("+bg_img+")";
	}

  return (
    <ul className="diary-bg-img-list">
      {preview_img_path.map( (url, index) => {
          return (
            <li
              key={url}
              // className="diary-bg-img"
            >
              <img
                className="diary-bg-img"
                src={url}
                alt=""
                onClick={() => bgChose(bg_img_path[index])}
              />
            </li>
          )
        })
      }
    </ul>
  )
}

export default ImageList;