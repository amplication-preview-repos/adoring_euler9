import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type GuestWhereInput = {
  id?: StringFilter;
  username?: StringNullableFilter;
};
