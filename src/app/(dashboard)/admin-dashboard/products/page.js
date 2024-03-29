import { productsColumn } from "@/components/dashboard/products-table/products-column";
import ProductsTable from "@/components/dashboard/products-table/products-table";
import { MdKeyboardArrowRight } from "react-icons/md";
import PageControls from "./page-controls";
import { getProductsData } from "@/server-actions/products/actions";

const ProductsPage = async () => {
  // Fetching data from the server
  const data = await getProductsData();

  return (
    <section className="min-h-screen p-3 lg:p-6">
      {/* Breadcrumbs? Kinda sorta －_－ */}
      <div className="text-muted-foreground">
        <ol className="flex items-center">
          <li className="hover:cursor-pointer hover:text-primary">Dashboard</li>
          <MdKeyboardArrowRight size={20} />
          <li className="hover:cursor-pointer hover:text-primary">Products</li>
        </ol>
      </div>

      <section className="mt-5 flex items-center justify-between border-b">
        <div className="mb-2 space-y-1">
          <h2 className="text-3xl font-semibold">Products ({data.length})</h2>
          <p className="text-muted-foreground">All the Products in database.</p>
        </div>
        <PageControls />
      </section>
      {/* //* Table  */}
      <ProductsTable data={data} columns={productsColumn} />
    </section>
  );
};

export default ProductsPage;
