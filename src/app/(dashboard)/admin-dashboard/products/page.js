import ProductsTable from "@/components/dashboard/products-table/products-table";
import { Button } from "@/components/ui/button";
import { dummyProductsData } from "@/lib/dummy-data";
import { MdKeyboardArrowRight } from "react-icons/md";

const ProductsPage = () => {
  //! Dummy data
  const data = dummyProductsData;


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
          <h2 className="text-3xl font-semibold">Products (100)</h2>
          <p className="text-muted-foreground">All the Products in database.</p>
        </div>
        <Button>Add Product</Button>
      </section>
      {/* //* Table  */}
      <ProductsTable data={data}/>
    </section>
  );
};

export default ProductsPage;
