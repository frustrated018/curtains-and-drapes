"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { addProduct } from "@/server-actions/products/actions";
import { useFormState, useFormStatus } from "react-dom";

const initialState = { message: "" };

const ProductForm = () => {
  const [state, formAction] = useFormState(addProduct, initialState);
  const { pending } = useFormStatus();
  return (
    <>
      <form action={formAction} className="grid grid-cols-1 gap-2">
        <section className="flex flex-col gap-5 xl:flex-row">
          <div className="flex-grow">
            <Label htmlFor="name">Product Name:</Label>
            <Input name="name" type="text" />
          </div>
          <div className="flex-grow">
            <Label htmlFor="productId">Product ID:</Label>
            <Input name="productId" type="text" />
          </div>
          <div className="flex-grow">
            <Label htmlFor="status">Status:</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Product Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Status</SelectLabel>
                  <SelectItem value="available">Available</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="pre-order">Pre-order</SelectItem>
                  <SelectItem value="discontinued">Discontinued</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </section>

        <section className="flex flex-col gap-5 xl:flex-row">
          <div className="flex-grow">
            <Label htmlFor="price">Price:</Label>
            <Input name="price" type="number" />
          </div>
          <div className="flex-grow">
            <Label htmlFor="inStock">In Stock:</Label>
            <Input name="inStock" type="number" />
          </div>
        </section>

        <Label htmlFor="shortDescription">Short Description (20 words):</Label>
        <Textarea
          name="shortDescription"
          placeholder="Write a short description for the product like a tagline..."
        />

        <Label htmlFor="description">Main Description (50-100 words):</Label>
        <Textarea
          name="descrption"
          placeholder="Write a long description about the product..."
        />

        {/* //TODO: need to figure out how to do multiple image selection T_T */}
        <Label htmlFor="pictures">Pictures [Max-4]:</Label>
        <Input name="Pictures" type="file" />

        {/* //TODO: option to add multiple features */}
        <Label htmlFor="features">Features:</Label>
        <Input name="features" type="text" />

        <Button type="submit" aria-disabled={pending} className="max-w-xs">
          Add Product
        </Button>
      </form>
    </>
  );
};

export default ProductForm;
