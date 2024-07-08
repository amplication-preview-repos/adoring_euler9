import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const GuestCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Create>
  );
};
