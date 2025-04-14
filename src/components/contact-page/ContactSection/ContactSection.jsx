'use client'
import styles from '@/components/contact-page/ContactSection/ContactSection.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'

const ContactSection = () => {
	return (
		<section className={styles.contact}>
			<div className={`${styles.container}`}>
				<h2 className={`${styles.contact_title}`}>Get In Touch With Us</h2>
				<p className={`${styles.contact_subtitle}`}>
					For More Information About Our Product & Services. Please Feel Free To
					Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do
					Not Hesitate!
				</p>
				<div className={`${styles.body} flex justify-between flex-wrap`}>
					<div
						className={`${styles.contact_section} flex gap-11 flex-col pr-5`}
					>
						<div className='flex gap-7 items-start'>
							<Image
								src='/images/icons/address.png'
								alt=''
								height={28.18}
								width={22}
							/>
							<div>
								<h3 className={`${styles.info_title}`}>Address</h3>
								<p className={`${styles.info_subtitle}`}>
									236 5th SE Avenue, New <br /> York NY10000, United <br />{' '}
									States
								</p>
							</div>
						</div>
						<div className='flex gap-7  items-start'>
							<Image
								src='/images/icons/phone.png'
								alt=''
								height={22.27}
								width={22.27}
							/>
							<div>
								<h3 className={`${styles.info_title}`}>Phone</h3>
								<p className={`${styles.info_subtitle}`}>
									Mobile: +(84) 546-6789 <br />
									Hotline: +(84) 456-6789
								</p>
							</div>
						</div>
						<div className='flex gap-7 items-start'>
							<Image
								src='/images/icons/working-time.png'
								alt=''
								height={23}
								width={23}
							/>
							<div>
								<h3 className={`${styles.info_title}`}>Working Time</h3>
								<p className={`${styles.info_subtitle}`}>
									Monday-Friday: 9:00 - <br /> 22:00 <br />
									Saturday-Sunday: 9:00 - <br /> 21:00
								</p>
							</div>
						</div>
					</div>
					<form className={styles.form_section}>
						<label>
							<p className={`${styles.input_title}`}>Your name:</p>
							<input className={`${styles.input}`} type='text' name='' />
						</label>
						<label>
							<p className={`${styles.input_title}`}>Email address:</p>
							<input className={`${styles.input}`} type='text' name='' />
						</label>
						<label>
							<p className={`${styles.input_title}`}>Subject:</p>
							<input className={`${styles.input}`} type='text' name='' />
						</label>
						<label>
							<p className={`${styles.input_title}`}>Message:</p>
							<input
								className={`${styles.input_message}`}
								type='text'
								name=''
							/>
						</label>
						<motion.button
							whileHover={{
								color: '#fff',
								backgroundColor: '#000000',
							}}
							transition={{ duration: 0.3 }}
							className={`${styles.btn}`}
						>
							Submit
						</motion.button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default ContactSection
