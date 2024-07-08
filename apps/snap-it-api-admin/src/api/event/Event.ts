import { User } from "../user/User";
import { Photo } from "../photo/Photo";

export type Event = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  endDatetime: Date | null;
  description: string | null;
  title: string | null;
  startDatetime: Date | null;
  user?: User | null;
  photos?: Array<Photo>;
  photosLimitPerUser: number | null;
  imagePreviewUrl: string | null;
  guestsLimit: number | null;
  photosAvailability?: "Option1" | null;
};
