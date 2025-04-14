import styles from '@/components/ui/ConfirmationModal/ConfirmationModal.module.scss'

const ConfirmationModal = ({ isOpen, onClose, message }) => {
	if (!isOpen) return null
	return (
		<section>
			<div className={styles.overlay}>
				<div className={styles.modal}>
					<p>{message}</p>
					<button onClick={onClose} className={styles.closeButton}>
						OK
					</button>
				</div>
			</div>
		</section>
	)
}

export default ConfirmationModal
