// import EcommerceMetrics from "../../components/ecommerce/EcommerceMetrics";
// import MonthlySalesChart from "../../components/ecommerce/MonthlySalesChart";
// import RecentOrders from "../../components/ecommerce/RecentOrders";
import PageMeta from "../../components/common/PageMeta";
// import BasicTable from "../Tables/BasicTables";


export default function User() {
  return (
    <>
      <PageMeta
        title="Dashboard"
        description="GUIITAR Council Dashboard"
      />
      <div className="grid grid-cols-1 gap-4 md:gap-6">
        <div className="col-span-1 space-y-6 xl:col-span-7">
          {/* <EcommerceMetrics /> */}

        </div>

        <div className="col-span-12 xl:col-span-7">
        </div>
      </div>
    </>
  );
}
