import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  endDatetime?: SortOrder;
  description?: SortOrder;
  title?: SortOrder;
  startDatetime?: SortOrder;
  userId?: SortOrder;
  photosLimitPerUser?: SortOrder;
  imagePreviewUrl?: SortOrder;
  guestsLimit?: SortOrder;
  photosAvailability?: SortOrder;
};
