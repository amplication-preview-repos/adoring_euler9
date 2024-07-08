import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { PhotoListRelationFilter } from "../photo/PhotoListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  events?: EventListRelationFilter;
  photos?: PhotoListRelationFilter;
  uniqueUsername?: StringNullableFilter;
  userPassword?: StringNullableFilter;
  emailAddress?: StringNullableFilter;
};
