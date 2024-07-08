import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PhotoUpdateInput = {
  imageUrl?: string | null;
  event?: EventWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
