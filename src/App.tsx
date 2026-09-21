import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Introduction } from '@/components/Introduction';
import { Solutions } from '@/components/Solutions';
import { IntegrationDiagram } from '@/components/IntegrationDiagram';
import { ProcessTimeline } from '@/components/ProcessTimeline';
import { PartnerMarquee } from '@/components/PartnerMarquee';
import { Industries } from '@/components/Industries';
import { NamibiaSection } from '@/components/NamibiaSection';
import { ProjectShowcase } from '@/components/ProjectShowcase';
import { Stats } from '@/components/Stats';
import { AboutSection } from '@/components/AboutSection';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Solutions />
        <IntegrationDiagram />
        <ProcessTimeline />
        <PartnerMarquee />
        <Industries />
        <NamibiaSection />
        <ProjectShowcase />
        <Stats />
        <AboutSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
