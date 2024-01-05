import { OrganizationList } from "@clerk/nextjs";

export default function CreateOrganizationalPage() {
  return (
    <OrganizationList
      hidePersonal
      afterSelectOrganizationUrl="/organization/:id"
      afterCreateOrganizationUrl="/organization/:id"
    />
  );
}
