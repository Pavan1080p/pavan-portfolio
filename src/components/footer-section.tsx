import MagicButton from './ui/magic-button';
import { SOCIAL_MEDIA } from '@/constants/utils';
import { SiCoffeescript } from 'react-icons/si';

const Footer = () => {
	return (
		<footer className="relative py-24 h-full w-full flex flex-col justify-center items-center text-center overflow-clip">
			<div className="max-w-7xl px-5 md:px-10 w-full mx-auto">
				<div className="flex flex-col items-center lg:max-w-[50vw] mx-auto">
					<h1 className="font-bold text-5xl md:text-5xl text-center">
						Let&apos;s chat over <span className="gradient-text">coffee</span>{' '}
						and brew <span className="gradient-text">ideas</span> together!
					</h1>

					<p className="text-off-white/70 md:mt-10 my-5 text-center text-lg">
						Ready to elevate your digital presence? Let&apos;s discuss your
						goals over coffee — my treat! Connect today and let&apos;s craft
						something extraordinary!!
					</p>

					<a href="mailto: pavankhalse456@gmail.com">
						<MagicButton
							title="Buy me a coffee"
							icon={<SiCoffeescript />}
							position="right"
						/>
					</a>
				</div>

				<div className="flex mt-16 md:flex-row flex-col justify-between items-center">
					<p className="text-off-white/70 select-none">
						Copyright &copy; 2025 <span className="font-bold">Pawan</span>
					</p>

					<div className="flex items-center md:gap-3 gap-6">
						{SOCIAL_MEDIA.map((profile) => (
							<a
								href={profile.link}
								key={profile.id}
								target="_blank"
								className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border-black-300"
							>
								<img
									src={profile.img}
									alt="profile-img"
									width={20}
									height={20}
								/>
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
