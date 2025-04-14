import styles from '@/components/product-page/AboutProduct/ProductTabs.module.scss'
import AdditionalInfo from '@/components/product-page/AboutProduct/AdditionalInfo/AdditionalInfo'
import Description from '@/components/product-page/AboutProduct/Description/Description'
import Reviews from '@/components/product-page/AboutProduct/Reviews/Reviews'

import { useState } from 'react'

const ProductTabs = ({ description }) => {
	const [activeTab, setActiveTab] = useState('description')

	const renderContent = () => {
		switch (activeTab) {
			case 'description':
				return <Description description={description} />
			case 'additionalInformation':
				return <AdditionalInfo />
			case 'reviews':
				return <Reviews />
		}
	}

	return (
		<section className='mt-16 mb-9'>
			<div className={`${styles.line} mb-12`} />
			<div className={`${styles.row_container} flex gap-14 `}>
				<button
					className={`${styles.button} ${
						activeTab === 'description' ? styles.active : ''
					}`}
					onClick={() => {
						setActiveTab('description')
					}}
				>
					Description
				</button>
				<button
					className={` ${styles.button} ${
						activeTab === 'additionalInformation' ? styles.active : ''
					}`}
					onClick={() => {
						setActiveTab('additionalInformation')
					}}
				>
					Additional Information
				</button>
				<button
					className={` ${styles.button} ${
						activeTab === 'reviews' ? styles.active : ''
					}`}
					onClick={() => {
						setActiveTab('reviews')
					}}
				>
					Reviews
				</button>
			</div>
			<div className={styles.tabContent}>{renderContent()}</div>
		</section>
	)
}

export default ProductTabs
