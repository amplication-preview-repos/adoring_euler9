import { InputJsonValue } from "../../types";
import { EventCreateNestedManyWithoutUsersInput } from "./EventCreateNestedManyWithoutUsersInput";
import { PhotoCreateNestedManyWithoutUsersInput } from "./PhotoCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  events?: EventCreateNestedManyWithoutUsersInput;
  photos?: PhotoCreateNestedManyWithoutUsersInput;
  uniqueUsername?: string | null;
  userPassword?: string | null;
  userRoles?: Array<"Option1">;
  emailAddress?: string | null;
};
