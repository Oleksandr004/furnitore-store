'use client'
import styles from '@/components/shop-page/FilterBar/FilterBar.module.scss'
import Image from 'next/image'

const FilterBar = ({ filters, setFilters, products }) => {
	const handleLimitChange = (event) => {
		setFilters({ ...filters, limit: event.target.value, page: 1 })
	}

	return (
		<section className={`mt-12 bg-[#FAF4F4]`}>
			<div className={`${styles.container}`}>
				<div className={`${styles.body} flex justify-between flex-wrap`}>
					<div className={`${styles.left_row} flex items-center flex-wrap`}>
						<Image
							className={`${styles.settings_filter_img}`}
							src='/images/icons/filter.png'
							alt='settings.png'
							width={19}
							height={16}
							style={{ maxHeight: 16 }}
						/>
						<p className={`${styles.filter_title} ml-3 mr-6`}>Filter</p>
						<Image
							className={`${styles.grid_filter_img}`}
							src='/images/icons/grid filter.png'
							alt='settings.png'
							width={16.33}
							height={16.33}
							style={{ maxHeight: 16.33 }}
						/>
						<Image
							className={`${styles.row_filter_img} ml-6 mr-8`}
							src='/images/icons/row filter.png'
							alt='settings.png'
							width={21}
							height={19.5}
							style={{ maxHeight: 19.5 }}
						/>
						<div className={`${styles.line}`} />
						<p className={`${styles.showing_title}`}>
							Showing 1–{filters.limit} of {products.length || 0} results
						</p>
					</div>
					<div className={`${styles.right_row}  flex gap-8`}>
						<div className={`${styles.show} flex gap-4`}>
							<p className={`${styles.show_title}`}>Show</p>
							<select
								defaultValue={'16'}
								id='limit-show'
								onChange={handleLimitChange}
							>
								<option value='8'>8</option>
								<option value='16'>16</option>
								<option value='32'>32</option>
							</select>
						</div>
						<div className={`${styles.short} flex gap-4`}>
							<p className={`${styles.short_title}`}>Short by</p>
							<select
								id='limit-sort'
								onChange={(e) => {
									setFilters({
										...filters,
										sort: e.target.value,
										page: 1,
									})
								}}
							>
								<option value='default'>default</option>
								<option value='price_down'>price down</option>
								<option value='price_up'>price up</option>
							</select>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default FilterBar
