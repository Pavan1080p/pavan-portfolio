import { cn } from '@/lib/utils';
import { AnimatedGradientText } from './magicui/animated-gradient-text';
import { TextAnimate } from './magicui/text-animate';
import MagicButton from './ui/magic-button';
import { Spotlight } from './ui/spotlight-new';
import { ChevronRight } from 'lucide-react';
import { SiSaltproject } from 'react-icons/si';

const HeroSection: React.FC = () => {
	return (
		<div className="pt-36 pb-20 ">
			<div>
				<Spotlight />
			</div>
			<div className="h-screen w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
				{/* Radial gradient for the container to give a faded look */}
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
			</div>

			<div className="flex justify-center relative my-20 z-10">
				<div className="max-w-[80vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center gap-6">
					<div className="z-10 flex  items-center justify-center">
						<AnimatedGradientText>
							🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{' '}
							<span
								className={cn(
									`inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
								)}
							>
								From Ideas to Interactive Magic
							</span>
							<ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
						</AnimatedGradientText>
					</div>

					<TextAnimate
						animation="blurInUp"
						by="word"
						className="text-center text-[40px] text-off-white font-heading font-bold md:text-5xl lg:text-6xl leading-[1.1] md:leading-tight lg:leading-tight tracking-wider"
					>
						Transforming Visions into Engaging Digital Experiences
					</TextAnimate>

					<TextAnimate
						animation="blurInUp"
						by="word"
						className="text-center tracking-wider mb-4 text-lg lg:text-2xl text-off-white/70"
					>
						Hi, I&apos;m Pawan, a digital artisan sculpting web experiences
						from the vibrant heart of Maharashtra.
					</TextAnimate>

					<a href="#projects">
						<MagicButton
							title="Dive into Projects"
							icon={<SiSaltproject />}
							position="right"
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
