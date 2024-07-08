import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PhotoUpdateManyWithoutEventsInput } from "./PhotoUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  endDatetime?: Date | null;
  description?: string | null;
  title?: string | null;
  startDatetime?: Date | null;
  user?: UserWhereUniqueInput | null;
  photos?: PhotoUpdateManyWithoutEventsInput;
  photosLimitPerUser?: number | null;
  imagePreviewUrl?: string | null;
  guestsLimit?: number | null;
  photosAvailability?: "Option1" | null;
};
