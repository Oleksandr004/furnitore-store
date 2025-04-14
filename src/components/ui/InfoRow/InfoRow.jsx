import styles from '@/components/ui/InfoRow/InfoRow.module.scss'

const InfoRow = () => {
	return (
		<section className={`${styles.info_row}`}>
			<div className={`${styles.container}`}>
				<div className={`${styles.row} flex gap-12 `}>
					<div>
						<p className={`${styles.title}`}>Free Delivery</p>
						<p className={`${styles.decription}`}>
							For all oders over $50, consectetur adipim scing elit.
						</p>
					</div>
					<div>
						<p className={`${styles.title}`}>90 Days Return</p>
						<p className={`${styles.decription}`}>
							If goods have problems, consectetur adipim scing elit.
						</p>
					</div>
					<div>
						<p className={`${styles.title}`}>Secure Payment</p>
						<p className={`${styles.decription}`}>
							100% secure payment, consectetur adipim scing elit.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default InfoRow
