'use client';

import { PROJECTS } from '@/constants/utils';
import { ProjectParallax } from './ui/project-parallax';

export function ProjectParallaxSection() {
	return (
		<section className="py-0" id="projects">
			<div className="max-w-7xl w-full px-5 md:px-10 mx-auto">
				<ProjectParallax projects={PROJECTS} />
			</div>
		</section>
	);
}
