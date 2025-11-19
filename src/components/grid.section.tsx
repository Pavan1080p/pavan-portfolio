import { GRID_ITEMS } from '@/constants/utils';
import { BentoGrid, BentoGridItem } from './ui/bento-grid';

const Grid = () => {
	return (
		<section className="pt-0">
			<div className="max-w-7xl w-full mx-auto px-5 md:px-10">
				<BentoGrid>
					{GRID_ITEMS.map((item) => (
						<BentoGridItem key={item.id} {...item} />
					))}
				</BentoGrid>
			</div>
		</section>
	);
};

export default Grid;
