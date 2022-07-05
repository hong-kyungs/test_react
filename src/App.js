import './scss/style.scss';
import { useRef, useState } from 'react';

const boxStyle = {
	width: 200,
	height: 200,
	backgroundColor: 'aqua',
	marginTop: 50,
	transitionDuration: '0.5s',
};
function App() {
	const box = useRef(null);
	// console.log(box);
	const deg = 45;
	let [Num, setNum] = useState(0);

	return (
		<section className='wrap' style={{ padding: 50 }}>
			<button
				onClick={() => {
					setNum(--Num);
					box.current.style.transform = `rotate(${deg * Num}deg)`;
				}}>
				prev
			</button>
			<button
				onClick={() => {
					setNum(++Num);
					box.current.style.transform = `rotate(${deg * Num}deg)`;
				}}>
				next
			</button>

			<article style={boxStyle} ref={box}></article>
		</section>
	);
}

export default App;
