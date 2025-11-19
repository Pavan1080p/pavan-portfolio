import Footer from '@/components/footer-section';
import BentoGrid from '@/components/grid.section';
import HeroSection from '@/components/hero.section';
import { ProjectParallaxSection } from '@/components/project.section';
import { TextRevealSection } from '@/components/text-scroll.section';

export default function Home() {
	return (
		<>
			<HeroSection />
			<ProjectParallaxSection />
			<TextRevealSection />
			<BentoGrid />
			<Footer />
		</>
	);
}
