import { useState } from 'react'
import { Button } from 'antd'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import styles from './common.module.css'

/**
 * Lista con viñetas que muestra los primeros `visible` elementos
 * y permite desplegar el resto.
 * @param {{ items: string[], visible?: number }} props
 */
export const ExpandableList = ({ items = [], visible = 3 }) => {
  const [expanded, setExpanded] = useState(false)
  const hidden = items.length - visible
  const shown = expanded || hidden <= 0 ? items : items.slice(0, visible)

  return (
    <>
      <ul className={styles.bullets}>
        {shown.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {hidden > 0 && (
        <Button
          type="link"
          size="small"
          className={styles.expandButton}
          icon={expanded ? <UpOutlined /> : <DownOutlined />}
          iconPlacement="end"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          {expanded ? 'Ver menos' : `Ver ${hidden} más`}
        </Button>
      )}
    </>
  )
}
