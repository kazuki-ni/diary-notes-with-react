const NavList = (props) => {

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
    (props.imageFuncActivated) ? "Close Images" : "Add Images"
  ]
  const onClickList = [
    props.inputBtnClicked,
    props.imageBtnClicked
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

export default NavList;