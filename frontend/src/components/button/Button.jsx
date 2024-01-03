import './Button.css'

const Button = () => {
	return (
		<>
			<div className='container'>
				<button className='ccBtn'>Default</button>
				<button
					className='ccBtn'
					disabled
				>
					Disabled
				</button>
			</div>
		</>
	)
}
export default Button
