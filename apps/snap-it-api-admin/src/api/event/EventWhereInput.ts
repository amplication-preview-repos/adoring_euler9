import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PhotoListRelationFilter } from "../photo/PhotoListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type EventWhereInput = {
  id?: StringFilter;
  endDatetime?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  title?: StringNullableFilter;
  startDatetime?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
  photos?: PhotoListRelationFilter;
  photosLimitPerUser?: IntNullableFilter;
  imagePreviewUrl?: StringNullableFilter;
  guestsLimit?: IntNullableFilter;
  photosAvailability?: "Option1";
};
