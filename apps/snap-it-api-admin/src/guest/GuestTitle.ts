import { Guest as TGuest } from "../api/guest/Guest";

export const GUEST_TITLE_FIELD = "username";

export const GuestTitle = (record: TGuest): string => {
  return record.username?.toString() || String(record.id);
};
