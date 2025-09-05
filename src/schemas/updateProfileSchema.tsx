// schemas/profileSchema.ts
import { z } from "zod"

export const profileSchema = z.object({
  businessName: z.string().min(1, "Business name is required"),
  businessType: z.string().min(1, "Business type is required"),
  fullName: z.string().min(1, "Full name is required"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email address"),
  country: z.string().min(1, "Country is required"),
  state: z.string().min(1, "State is required"),
  city: z.string().min(1, "City is required"),
  address1: z.string().min(1, "Address Line 1 is required"),
  address2: z.string().optional(),
  zipCode: z.string().min(1, "Zip Code is required"),
  taxId: z.string().min(1, "Tax ID is required"),
})

export type ProfileFormValues = z.infer<typeof profileSchema>
