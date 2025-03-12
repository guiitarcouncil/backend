import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import BasicTableOne from "../../components/tables/BasicTables/BasicTableOne";

export default function BasicTables() {
  return (
    <>
      <PageMeta
        title="Dashboard"
        description="GUIITAR Council Dashboard"
      />
      <PageBreadcrumb pageTitle="Applicants" />
      <div className="space-y-6">
        <ComponentCard title="All Applicants">
          <BasicTableOne />
        </ComponentCard>
      </div>
    </>
  );
}
