import { Request, Response } from "express";
import { ProductService } from "./product.service";
import ProductValidationSchema from "./product.validation";

// Create Product
const createProduct_C = async function (req: Request, res: Response) {
  try {
    const { product: productData } = req.body;
    const zodParseData = ProductValidationSchema.parse(productData);
    const result = await ProductService.createProductIntoDB(zodParseData);

    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
      error: error,
    });
  }
};

// GET ALL THE PRODUCT
const getAllProduct_C = async function (req: Request, res: Response) {
  try {
    const searchQuery = req.query.searchTerm;
    let query = {};
    if (searchQuery) {
      query = searchQuery;
    }
    const result = await ProductService.getAllProductFromDB(query);
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
      error: error,
    });
  }
};

// GET SINGLE PRODUCT
const getSingleProduct_C = async function (req: Request, res: Response) {
  try {
    const singleProduct = req.params.productId;
    const result = await ProductService.getSingleProductFromDB(singleProduct);
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
      error: error,
    });
  }
};

// Update Specific Value Single Product

const updateProduct_C = async function (req: Request, res: Response) {
  try {
    const updateProductId = req.params.productId;
    const { product: productData } = req.body;
    const result = await ProductService.updateDataValueIntoDB(
      updateProductId,
      productData
    );

    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
      error: error,
    });
  }
};

// DELETE Single ITEM
const deleteSingleProduct_C = async function (req: Request, res: Response) {
  try {
    const deleteId = req.params.productId;
    const result = await ProductService.deleteItemFromDB(deleteId);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
      error: error,
    });
  }
};

export const ProductController = {
  createProduct_C,
  getAllProduct_C,
  getSingleProduct_C,
  updateProduct_C,
  deleteSingleProduct_C,
};
