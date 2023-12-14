import Stripe from "stripe";

const config = useRuntimeConfig();
const stripe = new Stripe(config.stripe_sk, null);
export default stripe;
