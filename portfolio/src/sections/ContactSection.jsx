import { Button, Flex, Typography } from 'antd'
import { CopyOutlined, MailOutlined } from '@ant-design/icons'
import { profile } from '../data/profile'
import { useCopyToClipboard } from '../hooks/useCopyToClipboard'
import { ExternalLink, Reveal, Section } from '../components/common'
import styles from './sections.module.css'

export const ContactSection = () => {
  const copy = useCopyToClipboard()
  const { email, contactMessage, links } = profile

  return (
    <Section id="contact">
      <Reveal>
        <Typography.Paragraph type="secondary" className={styles.contactLead}>
          {contactMessage}
        </Typography.Paragraph>
        <a href={`mailto:${email}`} className={styles.email}>
          {email}
        </a>
        <Flex wrap gap={10}>
          <Button type="primary" icon={<MailOutlined />} href={`mailto:${email}`}>
            Send email
          </Button>
          <Button icon={<CopyOutlined />} onClick={() => copy(email, 'Email copied')}>
            Copy
          </Button>
          {links.map(({ label, href }) => (
            <ExternalLink key={label} href={href}>
              {label}
            </ExternalLink>
          ))}
        </Flex>
      </Reveal>
    </Section>
  )
}
