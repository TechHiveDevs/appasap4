
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
ReferenceField,
} from "react-admin";

// ------------------------------------------------

export default function ShowAbout(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
<TextField source="terms" />
<TextField source="howTo" />
<ReferenceField source="userId" reference="user" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}