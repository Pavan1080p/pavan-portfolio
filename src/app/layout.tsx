import type { Metadata } from 'next';
import './globals.css';
import SmoothScrollProvider from '@/components/smooth-scroll-provider';

export const metadata: Metadata = {
	title: 'PavanCreates | UI/UX Designer',
description:
  'PavanCreates — UI/UX Designer crafting clean, modern, and user-centered digital experiences. Skilled in wireframing, prototyping, interaction design, and building intuitive interfaces.',
keywords: [
  'PavanCreates',
  'UI UX Designer',
  'User Experience',
  'User Interface',
  'Product Designer',
  'UX Research',
  'Wireframing',
  'Prototyping',
  'Figma',
  'Interaction Design',
  'Visual Design',
  'Design Systems',
  'Usability Testing',
  'Responsive Design',
],
openGraph: {
  type: 'website',
  locale: 'en_US',
  url: 'https://pavancreates.vercel.app/', // update your actual domain later
  title: 'PavanCreates | UI/UX Designer',
  description:
    'Portfolio of Pavan — Showcasing user-centered design, modern interfaces, thoughtful UX flows, and creative digital solutions.',
  images: [
    {
      url: '/assets/og-image.png', // keep or replace with your OG banner
      width: 1200,
      height: 630,
      alt: 'Pavan UI/UX Portfolio',
    },
  ],
},
metadataBase: new URL('https://pavancreates.vercel.app'),

};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
			<body className="bg-black text-white antialiased font-body">
				<SmoothScrollProvider>
					<main className="relative flex justify-center items-center mx-auto flex-col overflow-clip">
						{children}
					</main>
				</SmoothScrollProvider>
			</body>
		</html>
	);
}
