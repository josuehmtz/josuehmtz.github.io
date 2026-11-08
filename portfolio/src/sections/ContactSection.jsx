import { Button, Flex, Typography } from 'antd'
import { CopyOutlined, MailOutlined } from '@ant-design/icons'
import { profile } from '../data/profile'
import { sectionIndex } from '../config/navigation'
import { useCopyToClipboard } from '../hooks/useCopyToClipboard'
import { ExternalLink, Reveal, Section } from '../components/common'
import styles from './sections.module.css'

const ID = 'contacto'

export const ContactSection = () => {
  const copy = useCopyToClipboard()

  return (
    <Section id={ID} index={sectionIndex(ID)} title="Contacto">
      <Reveal>
        <Typography.Paragraph type="secondary" className={styles.contactLead}>
          ¿Tienes un proyecto en mente o una vacante que encaje conmigo? Escríbeme, respondo pronto.
        </Typography.Paragraph>
        <a href={`mailto:${profile.email}`} className={styles.email}>
          {profile.email}
        </a>
        <Flex wrap gap={10}>
          <Button type="primary" icon={<MailOutlined />} href={`mailto:${profile.email}`}>
            Enviar correo
          </Button>
          <Button icon={<CopyOutlined />} onClick={() => copy(profile.email, 'Correo copiado')}>
            Copiar
          </Button>
          {profile.links.map(({ label, href }) => (
            <ExternalLink key={label} href={href}>
              {label}
            </ExternalLink>
          ))}
        </Flex>
      </Reveal>
    </Section>
  )
}
