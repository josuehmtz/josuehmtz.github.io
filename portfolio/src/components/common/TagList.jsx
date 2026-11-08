import { Flex, Tag } from 'antd'

/** Lista de etiquetas (tecnologías, habilidades, etc.). */
export const TagList = ({ tags = [], gap = 6 }) =>
  tags.length > 0 && (
    <Flex wrap gap={gap} component="ul" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {tags.map((tag) => (
        <li key={tag}>
          <Tag style={{ marginInlineEnd: 0 }}>{tag}</Tag>
        </li>
      ))}
    </Flex>
  )
