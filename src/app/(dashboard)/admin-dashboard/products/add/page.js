import { MdKeyboardArrowRight } from "react-icons/md";
import ProductForm from "./product-form";

const AddProduct = () => {
  return (
    <section className="min-h-screen p-3 xl:p-6">
      {/* Breadcrumbs? Kinda sorta －_－ */}
      <div className="text-muted-foreground">
        <ol className="flex items-center">
          <li className="hover:cursor-pointer hover:text-primary">Dashboard</li>
          <MdKeyboardArrowRight size={20} />
          <li className="hover:cursor-pointer hover:text-primary">Products</li>
          <MdKeyboardArrowRight size={20} />
          <li className="hover:cursor-pointer hover:text-primary">Add</li>
        </ol>
      </div>

      <section className="mt-5 flex items-center justify-between border-b">
        <div className="mb-2 space-y-1">
          <h2 className="text-3xl font-semibold">Add Product Form</h2>
          <p className="text-muted-foreground">
            Fill out the form below with relavant information to add a product
            to the database.
          </p>
        </div>
      </section>

      <ProductForm />
    </section>
  );
};

export default AddProduct;
