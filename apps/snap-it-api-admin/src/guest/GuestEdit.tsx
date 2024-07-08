import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const GuestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
