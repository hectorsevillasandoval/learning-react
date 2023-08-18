import { useState } from 'react'

export function TwitterFollowCard ({ userName = "gaearon", name = "Dan Abramov" }) {
  const [isFollowing, setIsFollowing] = useState(false)
  const buttonText = isFollowing ? "Following" : "Follow"
  const buttonClassName = isFollowing ? "tw-button tw-button--secondary" : "tw-button tw-button--primary"

  const handleClick = () => setIsFollowing(!isFollowing)

  return (
    <article className="tw-follow-card">
      <header className="tw-follow-card__header">
        <img
          className="tw-follow-card__avatar"
          src={`https://unavatar.io/twitter/${userName}`}
          alt="Avatar of Dan Abramov" />

        <div className="tw-follow-card__info">
          <h2 className="tw-follow-card__name">{name}</h2>
          <p className="tw-follow-card__username">@{userName}</p>
        </div>
      </header>
      <aside className="tw-follow-card__actions">
        <button
          className={buttonClassName}
          onClick={handleClick}
          >{buttonText}</button>
      </aside>
    </article>
  )
}