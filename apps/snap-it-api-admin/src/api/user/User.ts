import { JsonValue } from "type-fest";
import { Event } from "../event/Event";
import { Photo } from "../photo/Photo";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  events?: Array<Event>;
  photos?: Array<Photo>;
  uniqueUsername: string | null;
  userPassword: string | null;
  userRoles?: Array<"Option1">;
  emailAddress: string | null;
};
