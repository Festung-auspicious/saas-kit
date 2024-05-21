"use client";

import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import {
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import IconButton from "@/shared/component/Button/IconButton";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FireIcon } from "@heroicons/react/24/solid";

interface EmbeddedCheckoutButton {
  priceId: string;
  isSigninRequired?: boolean;
  className?: string
  title?: string;
}

export default function EmbeddedCheckoutButton({
  priceId,
  isSigninRequired,
  className,
  title,
}: EmbeddedCheckoutButton) {
  const { status } = useSession();
  const router = useRouter();
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );
  const [showCheckout, setShowCheckout] = useState(false);

  // This function handles the click event on the checkout button.

  const fetchClientSecret = useCallback(() => {
    // Create a Checkout Session
    return fetch("/api/embedded-checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ priceId: priceId, quantity: 1 }),
    })
      .then((res) => res.json())
      .then((data) => data.client_secret);
  }, []);

  const options = { fetchClientSecret };

  // If sign-in is required and the user is not authenticated, it redirects to the registration page.
  const handleCheckoutClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (isSigninRequired && status === "unauthenticated") {
      router.replace("/register");
    } else {
      // it displays the checkout modal.
      setShowCheckout(true);
    }
  };

  useEffect(() => {
    if (showCheckout) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showCheckout]);

  return (
    <div id="checkout" className={"z-50  ".concat(" ", className ?? "")}>
      <IconButton
        icon={<Image src={"/icon-2.svg"} width={32} height={32} alt="icon" />}
        className="btn w-full font-bold"
        onClick={handleCheckoutClick}
      >
        {title ?? 'Get Started'}
      </IconButton>
      {showCheckout && (
        <div className="p-4 rounded backdrop-blur-sm fixed mx-auto w-full h-full top-0 right-0 flex flex-col overflow-scroll">
          <div className="font-bold badge btn btn-ghost m-2" onClick={() => setShowCheckout(false)}>X</div>
          <div className="h-auto w-full lg:*:w-3/4 ">
            <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
              <EmbeddedCheckout className="z-50 m-auto" />
            </EmbeddedCheckoutProvider>
          </div>
        </div>
      )}
    </div>
  );
}
