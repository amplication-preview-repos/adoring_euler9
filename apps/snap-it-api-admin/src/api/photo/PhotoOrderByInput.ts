import { SortOrder } from "../../util/SortOrder";

export type PhotoOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  imageUrl?: SortOrder;
  eventId?: SortOrder;
  userId?: SortOrder;
};
