export const defaultPlanId = "free"

export const pricingPlans = [
  {
    id: "free",
    name: "Free",
    description: "A free plan to get you started!",
    price: "$0",
    priceIntervalName: "per month",
    stripe_price_id: null,
    features: ["MIT Licence", "Fast Performance", "Stripe Integration"],
  },
  {
    id: "pro",
    name: "Pro",
    description:
      "A plan to test the purchase experience. Try buying this with the test credit card 4242424242424242.",
    price: "$14.99",
    priceIntervalName: "per month",
    stripe_price_id: "price_1PKtAQRoLnN8N7oY70V7KOxF",
    stripe_product_id: "prod_QBFf6XgYLyenGq",
    features: [
      "Everything in Free",
      "Support us with fake money",
      "Test the purchase experience",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description:
      "A plan to test the upgrade expereince. Try buying this with the test credit card 4242424242424242.",
    price: "$24.99",
    priceIntervalName: "per month",
    stripe_price_id: "price_1PKt9gRoLnN8N7oY9zeln3UQ",
    stripe_product_id: "prod_QBFe9FOCwwVtPV",
    features: [
      "Everything in Pro",
      "Try the 'upgrade plan' UX",
      "Still actually free!",
    ],
  },
]
