import Link from 'next/link'

export default function Contact({ options }) {
  return (
    <ul className="o-grid o-grid--md-2 o-grid--lg-3">
      {options.map((option, index) =>
        <li className="o-grid__item" key={index}>
          <div className="c-page-foot__label">{option.label}</div>
          <strong>
            <Link href={option.button.url}>
              <a target={option.button.target}>{option.button.title}</a>
            </Link>
          </strong>
        </li>
      )}
    </ul>
  )
}
