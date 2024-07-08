import { InputJsonValue } from "../../types";
import { EventUpdateManyWithoutUsersInput } from "./EventUpdateManyWithoutUsersInput";
import { PhotoUpdateManyWithoutUsersInput } from "./PhotoUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  events?: EventUpdateManyWithoutUsersInput;
  photos?: PhotoUpdateManyWithoutUsersInput;
  uniqueUsername?: string | null;
  userPassword?: string | null;
  userRoles?: Array<"Option1">;
  emailAddress?: string | null;
};
