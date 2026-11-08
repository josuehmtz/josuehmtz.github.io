import { Segmented } from 'antd'

/** Selector de etiqueta activa. Se oculta si no hay nada que filtrar. */
export const TagFilter = ({ tags, value, onChange }) =>
  tags.length > 2 && (
    <div style={{ maxWidth: '100%', overflowX: 'auto' }}>
      <Segmented options={tags} value={value} onChange={onChange} />
    </div>
  )
