import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import Image from "next/image";

const Cart = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <section className="p-6 m-6 rounded-lg shadow-lg bg-opacity-20 backdrop-blur-lg">
        <div className="flex justify-between text-4xl">
          <h4>Cart</h4>
          <MdOutlineCancel />
        </div>

        <table className="mt-12 bg-gray-100 rounded-lg ">
          <thead className="border-b border-gray-500">
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
            <tr className="border-b border-gray-300 font-WorkSans">
              <td className="flex gap-2 p-4">
                <input type="checkbox" />

                <Image
                  src={"/cart-image/shoe.png"}
                  width={100}
                  height={100}
                  alt="A picture of a shoe"
                />
                <div className="max-w-[8rem] font-semibold">
                  <span>Nike Shoes Original made in Europe</span>
                </div>
              </td>
              <td className="p-4">2359c, 20 inches</td>
              <td className="p-4">₱2499.69</td>
              <td className="p-4">
                <div>
                  <input className="w-[3rem]" type="number" defaultValue={1} />
                </div>
              </td>
              <td className="p-4">₱2499.69</td>
              <td className="p-4 text-4xl cursor-pointer">
                <AiOutlineDelete />
              </td>
            </tr>

            <tr className="border-b border-gray-300 font-WorkSans">
              <td className="flex gap-2 p-4">
                <input type="checkbox" />

                <Image
                  src={"/cart-image/shoe.png"}
                  width={100}
                  height={100}
                  alt="A picture of a shoe"
                />
                <div className="max-w-[8rem] font-semibold">
                  <span>Nike Shoes Original made in Europe</span>
                </div>
              </td>
              <td className="p-4">2359c, 20 inches</td>
              <td className="p-4">₱2499.69</td>
              <td className="p-4">
                <div className="w-1/2">
                  <input className="w-[3rem]" type="number" defaultValue={1} />
                </div>
              </td>
              <td className="p-4">₱2499.69</td>
              <td className="p-4 text-4xl cursor-pointer">
                <AiOutlineDelete />
              </td>
            </tr>

            <tr className="border-b border-gray-300 font-WorkSans">
              <td className="flex gap-2 p-4">
                <input type="checkbox" />

                <Image
                  src={"/cart-image/shoe.png"}
                  width={100}
                  height={100}
                  alt="A picture of a shoe"
                />
                <div className="max-w-[8rem] font-semibold">
                  <span>Nike Shoes Original made in Europe</span>
                </div>
              </td>
              <td className="p-4">2359c, 20 inches</td>
              <td className="p-4">₱2499.69</td>
              <td className="p-4">
                <div className="w-1/2">
                  <input className="w-[3rem]" type="number" defaultValue={1} />
                </div>
              </td>
              <td className="p-4">₱2499.69</td>
              <td className="p-4 text-4xl cursor-pointer">
                <AiOutlineDelete />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Cart;
