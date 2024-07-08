import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PhotoCreateInput = {
  imageUrl?: string | null;
  event?: EventWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
