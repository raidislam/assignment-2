import { ProductModel } from "./product.model";

// Create new product insert into DB
const createProductIntoDB = async function (product: any) {
  const result = await ProductModel.create(product);
  return result;
};

// Get All the Product from the DB

const getAllProductFromDB = async function (serchText: any) {
  const result = await ProductModel.find({ name: new RegExp(serchText, "i") });
  return result;
};

// Get Single product

const getSingleProductFromDB = async function (id: any) {
  const result = await ProductModel.findOne({ _id: id });
  return result;
};

// Update Data

const updateDataValueIntoDB = async function (id: any, data: any) {
  const result = await ProductModel.updateOne(
    {
      _id: id,
      // "variants.type": "variants.value",
    },
    {
      $set: {
        name: data?.name,
        description: data?.description,
        price: data?.price,
        category: data?.category,
        "inventory.quantity": data?.inventory,
        "inventory.inStock": data?.inventory,
        // "variants.$.type": data?.variants?.type,
        // "variants.$.value": data?.variants?.value,
      },

      $addToSet: {
        tags: { $each: data?.tags },
      },
    }
  );
  return result;
};

// DELETE ITEM FROM DB

const deleteItemFromDB = async function (id: string) {
  const result = await ProductModel.deleteOne({ _id: id });
  return result;
};

export const ProductService = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateDataValueIntoDB,
  deleteItemFromDB,
};
