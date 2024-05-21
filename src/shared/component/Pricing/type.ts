interface Feature {
  name: string;
  provided?: boolean;
}

interface Plan {
  priceId: string;
  name: string;
  description: string;
  price: number;
  priceAnchor: number;
  features: Feature[];
  featured?: boolean;
}

interface PaymentTemplate {
    paymentTemplate: {
        title: string;
        plans: Plan[] };
}
