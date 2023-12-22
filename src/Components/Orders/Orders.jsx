import { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import { collection, doc, getDocs, query, orderBy } from "firebase/firestore";
import Order from "../Order/Order";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const user = auth.currentUser;

        if (user) {
          const usersCollection = collection(db, "users");
          const userDoc = doc(usersCollection, user?.uid);
          const ordersCollection = collection(userDoc, "orders");

          const querySnapshot = await getDocs(
            query(ordersCollection, orderBy("created", "desc"))
          );

          const newOrders = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }));

          setOrders(newOrders);
        } else {
          setOrders([]);
        }
      } catch (error) {
        console.error("Error fetching orders:", error.message);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
