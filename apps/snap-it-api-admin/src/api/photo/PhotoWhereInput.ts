import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PhotoWhereInput = {
  id?: StringFilter;
  imageUrl?: StringNullableFilter;
  event?: EventWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
