'use client';
import React from 'react';
import {
	motion,
	useScroll,
	useTransform,
	useSpring,
	MotionValue,
} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export const ProjectParallax = ({
	projects,
}: {
	projects: {
		title: string;
		desc: string;
		link: string;
		thumbnail: string;
	}[];
}) => {
	const firstRow = projects.slice(0, 4);
	const secondRow = projects.slice(3, 7);
	const thirdRow = [4, 0, 3, 6]
		.map((index) => projects[index])
		.filter((project) => project !== undefined);
	const ref = React.useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	});

	const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

	const translateX = useSpring(
		useTransform(scrollYProgress, [0, 1], [0, 1000]),
		springConfig
	);
	const translateXReverse = useSpring(
		useTransform(scrollYProgress, [0, 1], [0, -1000]),
		springConfig
	);
	const rotateX = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [15, 0]),
		springConfig
	);
	const opacity = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
		springConfig
	);
	const rotateZ = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [20, 0]),
		springConfig
	);
	const translateY = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
		springConfig
	);
	return (
		<div
			ref={ref}
			className="h-[275vh] lg:h-[270vh] py-40  antialiased relative flex flex-col [perspective:1000px] [transform-style:preserve-3d]"
		>
			<Header />
			<motion.div
				style={{
					rotateX,
					rotateZ,
					translateY,
					opacity,
				}}
				className=""
			>
				<motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
					{firstRow.map((project) => (
						<ProductCard
							project={project}
							translate={translateX}
							key={project.title}
						/>
					))}
				</motion.div>
				<motion.div className="flex flex-row  mb-20 space-x-20 ">
					{secondRow.map((project) => (
						<ProductCard
							project={project}
							translate={translateXReverse}
							key={project.title}
						/>
					))}
				</motion.div>
				<motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
					{thirdRow.map((project) => (
						<ProductCard
							project={project}
							translate={translateX}
							key={project.title}
						/>
					))}
				</motion.div>
			</motion.div>
		</div>
	);
};

export const Header = () => {
	return (
		<div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full text-start">
			<h1 className="text-[40px] md:text-7xl font-heading font-bold text-off-white tracking-wider">
				My Latest 
				<br /> Experiments in Delight
			</h1>
			<p className="max-w-2xl text-xl md:text-xl mt-8 text-off-white/85">
				Forget boring case studies—this is where I turn problems into play! Dive into the digital sandboxes where I&apos;ve been busy crafting seamless experiences and making pixels sing. Each project is a deep-dive adventure, showcasing my obsession with human-centered design, delightful interfaces, and solutions that are as smart as they are fun.
			</p>
		</div>
	);
};

export const ProductCard = ({
	project,
	translate,
}: {
	project: {
		title: string;
		desc: string;
		link: string;
		thumbnail: string;
	};
	translate: MotionValue<number>;
}) => {
	return (
		<motion.div
			style={{
				x: translate,
			}}
			whileHover={{
				y: -20,
			}}
			key={project.title}
			className="group/project h-80 md:h-96 w-[20rem] md:w-[30rem] relative flex-shrink-0"
		>
			<Link
				href={project.link}
				target="_blank"
				rel="noopener noreferrer"
				className="block group-hover/project:shadow-2xl"
			>
				<Image
					src={project.thumbnail}
					height="400"
					width="400"
					className="object-cover object-center absolute h-full w-full inset-0 rounded-2xl"
					alt={project.title}
				/>
			</Link>
			<div className="absolute inset-0 h-full w-full project:opacity-50 bg-black/40 pointer-events-none" />
			<div className="absolute inset-0 h-full w-full opacity-0 group-hover/project:opacity-50 bg-black pointer-events-none" />
			<h2 className="absolute bottom-[10px] left-4 font-semibold opacity-0 group-hover/project:opacity-100 text-off-white px-4">
				{project.title}
			</h2>
			<h2 className="absolute bottom-16 left-4 text-start opacity-0 group-hover/project:opacity-100 text-off-white/80 px-4">
				{project.desc}
			</h2>
		</motion.div>
	);
};
