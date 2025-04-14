import styles from '@/components/layout/Footer/Footer.module.scss'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer>
			<div className={`${styles.container} `}>
				<div className={`${styles.row} flex`}>
					<p className={`${styles.location} mt-28`}>
						400 University Drive Suite 200 Coral <br /> Gables, <br />
						FL 33134 USA
					</p>
					<nav className={`${styles.links}`}>
						<p className={`${styles.links_title}`}>Links</p>
						<ul className={`${styles.links_list} flex flex-col `}>
							<li>
								<Link href='/'>Home</Link>
							</li>
							<li>
								<Link href='/shop'>Shop</Link>
							</li>
							<li>
								<a href='#!'>About</a>
							</li>
							<li>
								<Link href='/contact'>Contact</Link>
							</li>
						</ul>
					</nav>
					<div className={`${styles.help}`}>
						<p className={`${styles.help_title}`}>Help</p>
						<ul className={`${styles.help_list} flex flex-col`}>
							<li>
								<a href='#!'>Payment Options</a>
							</li>
							<li>
								<a href='#!'>Returns</a>
							</li>
							<li>
								<a href='#!'>Privacy Policies</a>
							</li>
						</ul>
					</div>
					<div className={`${styles.newsletter}`}>
						<p className={`${styles.newsletter_title}`}>Newsletter</p>
						<div className='flex items-center gap-3'>
							<input
								placeholder='Enter Your Email Address'
								className={styles.newsletter_input}
								type='text'
							/>
							<button className={styles.newsletter_btn}>SUBSCRIBE</button>
						</div>
					</div>
				</div>
				<div className={`${styles.line}`} />
				<p className={`${styles.rights} `}>
					2022 Meubel House. All rights reverved
				</p>
			</div>
		</footer>
	)
}

export default Footer
