import { z } from "zod";

export const userOnboardingSchema = z.object({
  id: z.string().min(1),
  email: z.string().email(),
  fullname: z.string().min(1),
  address: z.string().optional(),
  idNumber: z.string().optional(),
});

export const userUpdateSchema = z.object({
  email: z.string().email().optional(),
  fullname: z.string().min(1).optional(),
  address: z.string().optional(),
});

export const businessOnboardingSchema = z.object({
  user_id: z.string().min(1),
  nama: z.string().min(1),
  deskripsi: z.string().optional(),
  bank_account_number: z.string().optional(),
  bank_account_name: z.string().optional(),
  bank_id: z.string().optional(),
  bank_code: z.string().optional(),
  maxAmountTransfer: z.string().optional(),
  address_wallet: z.string().min(1),
});

export const businessUpdateSchema = z.object({
  nama: z.string().min(1).optional(),
  deskripsi: z.string().optional(),
  bank_account_number: z.string().optional(),
  bank_account_name: z.string().optional(),
  bank_id: z.string().optional(),
  bank_code: z.string().optional(),
  maxAmountTransfer: z.string().optional(),
  address_wallet: z.string().optional(),
});

export const orderItemSchema = z.object({
  product_name: z.string().min(1),
  product_price: z.number().positive(),
  quantity: z.number().int().positive(),
  total_price: z.number().positive(),
});

export const orderOnboardingSchema = z.object({
  client_id: z.string().min(1),
  sender_address_wallet: z.string().min(1),
  business_id: z.string().min(1),
  expired_at: z.string().min(1),
  payment_url: z.string().min(1),
  success_url: z.string().min(1),
  transaction_hash: z.string().optional(),
  items: z.array(orderItemSchema).min(1),
});

export const orderUpdateStatusSchema = z.object({
  id: z.string().min(1),
  statusMessage: z.string().min(1),
  transaction_hash: z.string().optional(),
});
