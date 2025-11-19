'use client';

import { useState } from 'react';
import { IoCopyOutline } from 'react-icons/io5';
import MagicButton from './magic-button';
import { cn } from '@/lib/utils';
import animationData from '@/constants/confetti.json';

import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				'grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mx-auto',
				className
			)}
		>
			<div className="lg:h-full">
				{children && Array.isArray(children) && children[0]}
			</div>

			<div className="grid grid-cols-1 gap-4 lg:gap-8">
				{children && Array.isArray(children) && children.slice(1)}
			</div>
		</div>
	);
};

export const BentoGridItem = ({
	className,
	title,
	description,
	id,
	img,
	imgClassName,
	titleClassName,
}: {
	className?: string;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	header?: React.ReactNode;
	icon?: React.ReactNode;
	id?: number;
	img?: string;
	imgClassName?: string;
	titleClassName?: string;
}) => {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText('pavankhalse456@gmail.com');
		setCopied(true);
	};

	return (
		<div
			className={cn(
				'relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1] text-start',
				id === 1 ? 'lg:h-full max-lg:h-56' : 'max-sm:h-48 h-64',
				className
			)}
			style={{
				background: 'rgb(4, 7, 29)',
				backgroundColor:
					'linear-gradient(90deg, rgba(4, 7, 29, 1) 0%, rgba(12, 14, 35, 1) 100%)',
			}}
		>
			<div className="h-full flex flex-col">
				<div className="w-full h-full absolute">
					{img && (
						<img
							src={img}
							alt={img}
							className={cn(imgClassName, 'object-center')}
						/>
					)}
				</div>

				<div
					className={cn(
						titleClassName,
						'group-hover/bento:translate-x-2 transition duration-200 relative px-5 p-5 lg:p-10',
						id === 1
							? 'h-full flex flex-col justify-end'
							: 'min-h-40 flex flex-col absolute'
					)}
				>
					<div className="font-bold text-lg lg:text-3xl max-w-96 z-10 text-start">
						{title}
					</div>
					<div className="text-off-white/80 text-xm md:text-xs lg:text-base z-10 mt-4 text-start">
						{description}
					</div>

					{id === 3 && (
						<div className="mt-5 relative w-fit">
							<div className={`absolute -bottom-5 right-0`}>
								<Lottie
									options={{
										loop: copied,
										autoplay: copied,
										animationData: animationData,
										rendererSettings: {
											preserveAspectRatio: 'xMidYMid slice',
										},
									}}
								/>
							</div>

							<MagicButton
								title={copied ? 'Email Copied' : 'Copy my email'}
								icon={<IoCopyOutline />}
								position="left"
								otherClasses="!bg-[#161831]"
								handleClick={handleCopy}
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
