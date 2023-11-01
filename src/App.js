import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { calculateTotals } from "./features/cart/cartSlice";
function App() {
	const { cartItems } = useSelector((store) => store.cart);
	const dipatch = useDispatch();

	useEffect(() => {
		dispatchEvent(calculateTotals());
	}, [cartItems]);
	return (
		<main>
			<Navbar />
			<CartContainer />
		</main>
	);
}
export default App;
