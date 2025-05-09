import supabase from "../config/supabase";
import { Business } from "../models/Business";

export async function saveBusinessFromOnboarding(
  user_id: string,
  nama: string,
  deskripsi: string,
  logo: string,
  bank_account_number: string,
  bank_account_name: string,
  bank_id: string,
  bank_code: string,
  maxAmountTransfer: string,
  address_wallet: string
): Promise<Business> {
  const { data, error } = await supabase
    .from("business")
    .insert([
      {
        user_id,
        nama,
        deskripsi,
        logo,
        bank_account_number,
        bank_account_name,
        bank_id,
        bank_code,
        maxAmountTransfer,
        address_wallet,
      },
    ])
    .select()
    .single();
  if (error) throw error;
  return data as Business;
}
