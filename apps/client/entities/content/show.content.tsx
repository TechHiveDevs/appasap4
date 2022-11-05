
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
ReferenceField,
} from "react-admin";

// ------------------------------------------------

export default function ShowContent(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
<TextField source="script" />
<TextField source="videoLink" />
<ReferenceField source="userId" reference="user" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}