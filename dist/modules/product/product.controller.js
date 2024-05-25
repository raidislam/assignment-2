"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_service_1 = require("./product.service");
const product_validation_1 = __importDefault(require("./product.validation"));
// Create Product
const createProduct_C = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { product: productData } = req.body;
            const zodParseData = product_validation_1.default.parse(productData);
            const result = yield product_service_1.ProductService.createProductIntoDB(zodParseData);
            res.status(200).json({
                success: true,
                message: "Product created successfully!",
                data: result,
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "something went wrong",
                error: error,
            });
        }
    });
};
// GET ALL THE PRODUCT
const getAllProduct_C = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const searchQuery = req.query.searchTerm;
            let query = {};
            if (searchQuery) {
                query = searchQuery;
            }
            const result = yield product_service_1.ProductService.getAllProductFromDB(query);
            res.status(200).json({
                success: true,
                message: "Products fetched successfully!",
                data: result,
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "something went wrong",
                error: error,
            });
        }
    });
};
// GET SINGLE PRODUCT
const getSingleProduct_C = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const singleProduct = req.params.productId;
            const result = yield product_service_1.ProductService.getSingleProductFromDB(singleProduct);
            res.status(200).json({
                success: true,
                message: "Product fetched successfully!",
                data: result,
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "something went wrong",
                error: error,
            });
        }
    });
};
// Update Specific Value Single Product
const updateProduct_C = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updateProductId = req.params.productId;
            const { product: productData } = req.body;
            const result = yield product_service_1.ProductService.updateDataValueIntoDB(updateProductId, productData);
            res.status(200).json({
                success: true,
                message: "Product updated successfully!",
                data: result,
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "something went wrong",
                error: error,
            });
        }
    });
};
// DELETE Single ITEM
const deleteSingleProduct_C = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const deleteId = req.params.productId;
            const result = yield product_service_1.ProductService.deleteItemFromDB(deleteId);
            res.status(200).json({
                success: true,
                message: "Product deleted successfully!",
                data: null,
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "something went wrong",
                error: error,
            });
        }
    });
};
exports.ProductController = {
    createProduct_C,
    getAllProduct_C,
    getSingleProduct_C,
    updateProduct_C,
    deleteSingleProduct_C,
};
