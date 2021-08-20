import { ProfileIcon } from "src/components/ProfileIcon"

const MiniArticle = () => {

  const articles = [
    {
      id: 1,
      title: "Find a cute cat",
      author_name: "Kyle",
      author_icon: "/images/profile.jpg",
      author_link: "Kyle",
      content: "ahahahahaha",
      imgs: ["/images/scenes/5.jpg"]
    },
    {
      id: 2,
      title: "研究室いきました",
      author_name: "Pekora",
      author_icon: "/images/profile.jpg",
      author_link: "Pekora",
      content: "ぺこちゃん",
      imgs: ["/images/scenes/6.jpg"]
    },
    {
      id: 3,
      title: "研究室いきました",
      author_name: "Pekora",
      author_icon: "/images/profile.jpg",
      author_link: "Pekora",
      content: "ぺこちゃん",
      imgs: ["/images/scenes/7.jpg"]
    },
    {
      id: 4,
      title: "Vtuber一可愛いのは誰だ？",
      author_name: "Pekora",
      author_icon: "/images/profile.jpg",
      author_link: "Pekora",
      content: "ぺこちゃん",
      imgs: ["/images/scenes/8.jpg"]
    },
    {
      id: 5,
      title: "Vtuber一可愛いのは誰だ？",
      author_name: "Pekora",
      author_icon: "/images/profile.jpg",
      author_link: "Pekora",
      content: "ぺこちゃん",
      imgs: ["/images/scenes/9.jpg"]
    }
  ]

  return (
    articles.map( article => {
      return (
        <li
          key={article.id}
          className="mini-article"
        >
          <section className="mini-header">
            <ProfileIcon
              cls="mini-author-icon"
              link={article.author_link}
              icon={article.author_icon}
              name={article.author_name}
            />
            <div className="mini-header-right">
              <div className="mini-title">
                { article.title }
              </div>
              <a
                className="mini-author-name"
                href={ "/" + article.author_link }
              >
                { article.author_name }
              </a>
            </div>
          </section>
          <section className="mini-content">
            <img
              className="mini-img"
              src={article.imgs[0]}
              alt=""
            />
            <p className="mini-sentence">
              { article.content }
            </p>
          </section>
          <section className="mini-footer">
              <div className="comment">
                <i className="bx bx-comment" />
                <span>500</span>
              </div>
              <div className="repost">
                <i className="bx bx-repost" />
                <span>500</span>
              </div>
              <div className="like">
                <i className="bx bx-like" />
                <span>500</span>
              </div>
              <div className="share">
                <i className="bx bx-share-alt" />
              </div>
          </section>
        </li>
      )
    })
  )
}

export default MiniArticle;