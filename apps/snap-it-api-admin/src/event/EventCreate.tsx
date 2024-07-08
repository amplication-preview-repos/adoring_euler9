import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { PhotoTitle } from "../photo/PhotoTitle";

export const EventCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="endDatetime" source="endDatetime" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="title" source="title" />
        <DateTimeInput label="startDatetime" source="startDatetime" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="photos"
          reference="Photo"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PhotoTitle} />
        </ReferenceArrayInput>
        <NumberInput
          step={1}
          label="photosLimitPerUser"
          source="photosLimitPerUser"
        />
        <TextInput label="imagePreviewUrl" source="imagePreviewUrl" />
        <NumberInput step={1} label="guestsLimit" source="guestsLimit" />
        <SelectInput
          source="photosAvailability"
          label="photosAvailability"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
