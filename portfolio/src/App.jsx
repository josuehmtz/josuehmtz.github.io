import { Layout } from 'antd'
import { ThemeModeProvider } from './theme/ThemeModeProvider'
import { AppFooter, AppHeader } from './components/layout'
import { Container } from './components/common'
import {
  AboutSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  HeroSection,
  ProjectsSection,
} from './sections'

const App = () => (
  <ThemeModeProvider>
    <Layout>
      <AppHeader />
      <Layout.Content>
        <Container>
          <main>
            <HeroSection />
            <ProjectsSection />
            <ExperienceSection />
            <AboutSection />
            <EducationSection />
            <ContactSection />
          </main>
        </Container>
      </Layout.Content>
      <AppFooter />
    </Layout>
  </ThemeModeProvider>
)

export default App
