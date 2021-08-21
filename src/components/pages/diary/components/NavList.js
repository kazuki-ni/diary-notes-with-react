import React from 'react'
import { useSelector, useDispatch } from "react-redux"

import { inputDiary } from "src/actions/diaryActions";
import { activateImageFunc, deactivateImageFunc } from 'src/actions/diaryAction';

import { toggleImageFunc, setDiaryImage, gatherImgURLs, showURLofImgs } from "../diaryFunctions";

export default function NavList() {
  //* State
	const { date, mood } = useSelector( state => state.diaryInitiallySetReducer.diary );
	// date = date || today_date;
	// mood = mood || "Normal";
	const imageFuncActivated = useSelector( state => state.diaryEditReducer.imageFuncActivated )

	//* Dispatch
	const dispatch = useDispatch();
	const openImage = () => {
		dispatch(activateImageFunc());
		toggleImageFunc("OPEN");
	};
	const closeImage = () => {
		dispatch(deactivateImageFunc());
		toggleImageFunc("CLOSE");
	};

	//* Functions
	const inputBtnClicked = () => {
		const newImgList = gatherImgURLs();

		//* [Before sending] Record img URLs
		if (imageFuncActivated) showURLofImgs(newImgList);

		inputDiary({
			date		: date,
			mood		: mood,
			bg			: document.getElementById("diary-root").style.backgroundImage,
			imgList	: newImgList,
			title		: document.getElementById("diary-title").value,
			content	: document.getElementById("diary-content").value
		});
	}

	const imageBtnClicked = () => {
		const newImgList = gatherImgURLs();

		//* [Before closing] Record img URLs
		if (imageFuncActivated) showURLofImgs(newImgList);

		//* Toggle the diary image window
		switch (imageFuncActivated) {
			//* Close
			case true:
				closeImage();

				//* [After closing]
				break;

			//* Open
			case false:
				openImage();

				//* [After opening] Set a layout of diary images
				setDiaryImage(imageFuncActivated);
				break;

			default: ;
		}
	}

  const id_list = [
    "input-btn",
    "image-btn"
  ]
  const icon_list = [
    "bx bx-message-square-check",
    "bx bx-image-add"
  ]
  const tooltip_list = [
    "Done",
    (imageFuncActivated) ? "Close Image Window" : "Add Images"
  ]
  const onClickList = [
    inputBtnClicked,
    imageBtnClicked
  ]

  return (
    <ul className="nav-list">
      {id_list.map( (id, index) => {
          return (
            <li
              key={id}
              id={id}
              onClick={onClickList[index]}
            >
              <i className={icon_list[index]}/>
              <span className="nav-tooltip">{tooltip_list[index]}</span>
            </li>
          )
        })
      }
    </ul>
  )
}
