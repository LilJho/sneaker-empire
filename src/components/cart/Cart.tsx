import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import Image from "next/image";
import { useSelector } from "react-redux";
import { stateType } from "./cartSlice";
import { removeToCart } from "./cartSlice";
import { useDispatch } from "react-redux";

interface MyComponentProps {
  closeModal: () => void;
}

const Cart: React.FC<MyComponentProps> = ({ closeModal }) => {
  // Get the cartItems in a globalize state
  const cartItems = useSelector((state: { cart: stateType[] }) => state.cart);

  return (
    <div className="flex items-center justify-center ">
      <section className="p-6 m-6 bg-white rounded-lg min-h-[500px] min-w-[1100px]">
        <div className="flex justify-between text-4xl">
          <h4>Cart</h4>
          <MdOutlineCancel onClick={closeModal} className="cursor-pointer" />
        </div>

        <table className="w-full mt-12 bg-gray-100 rounded-lg">
          <thead className="border-b border-gray-500 ">
            <tr className="text-left font-Playfair">
              <th className="flex items-center gap-2 p-4">
                <input type="checkbox" />
                <span>Select All</span>
              </th>
              <th className="p-4">Variation</th>
              <th className="p-4">Unit Price</th>
              <th className="p-4">Quantity</th>
              <th className="p-4">Total Price</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((cartItem: stateType) => (
              <OrderCard cartItem={cartItem} />
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

const OrderCard = ({ cartItem }: any) => {
  const dispatch = useDispatch();

  return (
    <tr className="border-b border-gray-300 font-WorkSans">
      <td className="flex gap-2 p-4">
        <input type="checkbox" />

        <Image
          src={cartItem.images}
          width={100}
          height={100}
          alt="A picture of a shoe"
        />
        <div className="max-w-[8rem] font-semibold">
          <span>{cartItem.name}</span>
        </div>
      </td>
      <td className="p-4">2359c, 20 inches</td>
      <td className="p-4">{cartItem.price}</td>
      <td className="p-4">
        <div>
          <input className="w-[3rem]" type="number" defaultValue={1} />
        </div>
      </td>
      <td className="p-4">{cartItem.price}</td>
      <td className="p-4 text-4xl cursor-pointer">
        <button onClick={() => dispatch(removeToCart(cartItem.id))}>
          <AiOutlineDelete />
        </button>
      </td>
    </tr>
  );
};

export default Cart;
