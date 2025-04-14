import styles from '@/components/product-page/AboutProduct/Description/Description.module.scss'

const Description = ({ description }) => {
	const cleanText = (text) => {
		return text.replace(/\s+/g, ' ').trim()
	}
	const cloneText = cleanText(description)

	return (
		<section className={`${styles.description}`}>
			<div className={`${styles.container}`}>{cloneText}</div>
		</section>
	)
}

export default Description
