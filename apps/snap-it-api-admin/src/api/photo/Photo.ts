import { Event } from "../event/Event";
import { User } from "../user/User";

export type Photo = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  imageUrl: string | null;
  event?: Event | null;
  user?: User | null;
};
