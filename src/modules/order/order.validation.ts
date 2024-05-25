import { z } from "zod";

const orderValidation = z.object({
  email: z.string().email("required email address"),
  price: z.number(),
  productId: z.string().nonempty("Product ID is required"),
  quantity: z.number(),
});

export default orderValidation;
