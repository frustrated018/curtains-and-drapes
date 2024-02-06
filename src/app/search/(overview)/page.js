import ProductCard from "@/components/product-card/productCard";

const SearchPage = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
};

export default SearchPage;
