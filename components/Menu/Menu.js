import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Menu.module.scss'
import { fetchAPI } from '@lib/api'

export default function Menu({ menu, ghostStyle, extraClass }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    (async () => {
      const response = await fetchAPI(`/menus/${menu}`)

      if (response) {
        setItems(response.menu.items.sort((a, b) => a.order - b.order))
      }
    })()
  }, [menu])

  return (
    items && <nav className={`${ghostStyle ? styles.ghost : styles.base} ${extraClass ?? ''}`}>
      {items.map((item) =>
        <Link href={item.url} key={item.id}>
          <a className={!ghostStyle ? styles.link: ''} target={item.target}>{item.title}</a>
        </Link>
      )}
    </nav>
  )
}
