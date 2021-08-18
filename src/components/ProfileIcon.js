export const ProfileIcon = (props) => {
  return (
    <a href={ "/" + props.link }>
      <img
        className={ props.cls }
        src={ props.icon }
        alt={ props.name + "'s icon"}
      />
    </a>
  )
}