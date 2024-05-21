"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Button from "@/shared/component/Button";
 
const PaymentStatusPage = ({ searchParams }: any) => {
  const router = useRouter();
  const [status, setStatus] = useState<string>();
  const { session_id } = searchParams;
  useEffect(() => {
    let subscription = fetch(`/api/callback/stripe?session_id=${session_id}`)
      .then((data) => {
        if (data.status === 200) {
            setStatus("Payment successful!");
        } else {
            setStatus("Payment failed.");
        }
        return data.json();
      })
      .then(console.log)
      .catch(console.log);
    return () => {
      subscription;
    };
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <div className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="text-7xl"
        >
          🤩
        </motion.div>
        <h2 className="text-2xl font-semibold text-green-600 mt-4">
          Payment Successful!
        </h2>
        <p className="text-md text-gray-600 mt-2">
          Your payment has been processed successfully.
        </p>
        <Button className="mt-6" onClick={() => router.push("/dashboard")}>
          Go to Dashboard
        </Button>
      </div>
    </motion.div>
  );
};

export default PaymentStatusPage;
