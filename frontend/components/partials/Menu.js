import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '@/styles/modules/Menu.module.scss'
import { fetchAPI } from '@/lib/api'

export default function Menu({ menu, extraClass }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    (async () => {
      const response = await fetchAPI(`/menus/${menu}`, {
        nested: true,
      })

      setItems(response.menu.items)
    })()
  }, [menu])

  return (
    items && <nav className={`${styles.base} ${extraClass ?? ''}`}>
      {items.map((item) =>
        <Link href={item.url} key={item.id}>
          <a className={styles.link} target={item.target}>{item.title}</a>
        </Link>
      )}
    </nav>
  )
}
