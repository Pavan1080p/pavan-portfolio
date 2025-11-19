'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion, MotionProps, Variants } from 'motion/react';
import { ElementType } from 'react';

type AnimationType = 'text' | 'word' | 'character' | 'line';
type AnimationVariant =
	| 'fadeIn'
	| 'blurIn'
	| 'blurInUp'
	| 'blurInDown'
	| 'slideUp'
	| 'slideDown'
	| 'slideLeft'
	| 'slideRight'
	| 'scaleUp'
	| 'scaleDown';

// Create a type that omits the variants prop from MotionProps
type OmitVariants = Omit<MotionProps, 'variants'>;

// Define our custom interface extending the modified MotionProps
interface TextAnimateProps extends OmitVariants {
	children: string;
	className?: string;
	segmentClassName?: string;
	delay?: number;
	duration?: number;
	variants?: {
		container?: Variants;
		item?: Variants;
	};
	as?: ElementType;
	by?: AnimationType;
	startOnView?: boolean;
	once?: boolean;
	animation?: AnimationVariant;
}

const staggerTimings: Record<AnimationType, number> = {
	text: 0.06,
	word: 0.05,
	character: 0.03,
	line: 0.06,
};

type AnimationTransition = {
	staggerChildren?: number;
	staggerDirection?: number;
	delayChildren?: number;
	duration?: number;
};

const defaultContainerVariants: Variants = {
	hidden: { opacity: 1 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.05,
		} as AnimationTransition,
	},
	exit: {
		opacity: 0,
		transition: {
			staggerChildren: 0.05,
			staggerDirection: -1,
		} as AnimationTransition,
	},
};

const defaultItemVariants: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
	},
	exit: {
		opacity: 0,
	},
};

export function TextAnimate({
	children,
	delay = 0,
	duration = 0.3,
	variants,
	className,
	segmentClassName,
	as: Component = 'p',
	startOnView = true,
	once = false,
	by = 'word',
	animation = 'fadeIn',
	...props
}: TextAnimateProps) {
	const MotionComponent = motion.create(Component);

	const containerVariants: Variants = {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
			transition: {
				staggerChildren: staggerTimings[by],
				delayChildren: delay,
				duration: duration,
			} as AnimationTransition,
		},
		exit: {
			opacity: 0,
			transition: {
				staggerChildren: staggerTimings[by],
				staggerDirection: -1,
				delayChildren: delay,
				duration: duration,
			} as AnimationTransition,
		},
	};

	const itemVariants: Variants = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	};

	let segments: string[] = [];
	switch (by) {
		case 'word':
			segments = children.split(/(\s+)/);
			break;
		case 'character':
			segments = children.split('');
			break;
		case 'line':
			segments = children.split('\n');
			break;
		case 'text':
		default:
			segments = [children];
			break;
	}

	return (
		<AnimatePresence mode="popLayout">
			<MotionComponent
				variants={
					variants?.container ??
					(animation ? containerVariants : defaultContainerVariants)
				}
				initial="hidden"
				whileInView={startOnView ? 'show' : undefined}
				animate={startOnView ? undefined : 'show'}
				exit="exit"
				className={cn('whitespace-pre-wrap', className)}
				viewport={{ once }}
				{...props}
			>
				{segments.map((segment, i) => (
					<motion.span
						key={`${by}-${segment}-${i}`}
						variants={
							variants?.item ?? (animation ? itemVariants : defaultItemVariants)
						}
						custom={i * staggerTimings[by]}
						className={cn(
							by === 'line' ? 'block' : 'inline-block whitespace-pre',
							segmentClassName
						)}
					>
						{segment}
					</motion.span>
				))}
			</MotionComponent>
		</AnimatePresence>
	);
}
