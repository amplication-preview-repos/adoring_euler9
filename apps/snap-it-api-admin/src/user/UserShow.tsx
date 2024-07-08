import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { EVENT_TITLE_FIELD } from "../event/EventTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Username" source="username" />
        <TextField label="Email" source="email" />
        <TextField label="Roles" source="roles" />
        <TextField label="uniqueUsername" source="uniqueUsername" />
        <TextField label="userPassword" source="userPassword" />
        <TextField label="userRoles" source="userRoles" />
        <TextField label="emailAddress" source="emailAddress" />
        <ReferenceManyField reference="Event" target="userId" label="Events">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="endDatetime" source="endDatetime" />
            <TextField label="description" source="description" />
            <TextField label="title" source="title" />
            <TextField label="startDatetime" source="startDatetime" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="photosLimitPerUser" source="photosLimitPerUser" />
            <TextField label="imagePreviewUrl" source="imagePreviewUrl" />
            <TextField label="guestsLimit" source="guestsLimit" />
            <TextField label="photosAvailability" source="photosAvailability" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Photo" target="userId" label="Photos">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="imageUrl" source="imageUrl" />
            <ReferenceField label="Event" source="event.id" reference="Event">
              <TextField source={EVENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
