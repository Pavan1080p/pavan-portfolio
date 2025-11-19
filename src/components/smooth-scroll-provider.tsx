'use client';
import { useEffect, ReactNode } from 'react';
import Lenis from '@studio-freight/lenis';

interface SmoothScrollProviderProps {
	children: ReactNode;
}

const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({
	children,
}) => {
	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t: number) => 1 - Math.pow(1 - t, 3),
			lerp: 0.1,
			infinite: false,
		});

		const raf = (time: number) => {
			lenis.raf(time);
			requestAnimationFrame(raf);
		};

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	}, []);

	return <>{children}</>;
};

export default SmoothScrollProvider;
