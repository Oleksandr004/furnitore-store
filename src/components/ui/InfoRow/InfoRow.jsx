import styles from '@/components/ui/InfoRow/InfoRow.module.scss'

const InfoRowData = [
	{
		title: 'Free Delivery',
		description: 'For all oders over $50, consectetur adipim scing elit.',
	},
	{
		title: '90 Days Return',
		description: 'If goods have problems, consectetur adipim scing elit.',
	},
	{
		title: 'Secure Payment',
		description: '100% secure payment, consectetur adipim scing elit.',
	},
]

const InfoRow = () => {
	return (
		<section className={`${styles.info_row}`}>
			<div className={`${styles.container}`}>
				<div className={`${styles.row} flex gap-12 `}>
					{InfoRowData.map((item, index) => (
						<div key={index}>
							<p className={`${styles.title}`}>{item.title}</p>
							<p className={`${styles.decription}`}>{item.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default InfoRow
