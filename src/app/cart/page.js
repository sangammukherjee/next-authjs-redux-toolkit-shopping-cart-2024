import { auth } from "@/auth";
import Cart from "@/components/cart";
import { redirect } from "next/navigation";

async function CartPage() {
  const getSession = await auth();
  if (!getSession?.user) redirect("/unauth-page");

  return <Cart />;
}

export default CartPage;
