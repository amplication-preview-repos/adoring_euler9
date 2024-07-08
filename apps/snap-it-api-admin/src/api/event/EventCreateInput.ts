import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PhotoCreateNestedManyWithoutEventsInput } from "./PhotoCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  endDatetime?: Date | null;
  description?: string | null;
  title?: string | null;
  startDatetime?: Date | null;
  user?: UserWhereUniqueInput | null;
  photos?: PhotoCreateNestedManyWithoutEventsInput;
  photosLimitPerUser?: number | null;
  imagePreviewUrl?: string | null;
  guestsLimit?: number | null;
  photosAvailability?: "Option1" | null;
};
