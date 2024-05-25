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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const product_model_1 = require("./product.model");
// Create new product insert into DB
const createProductIntoDB = function (product) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield product_model_1.ProductModel.create(product);
        return result;
    });
};
// Get All the Product from the DB
const getAllProductFromDB = function (serchText) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield product_model_1.ProductModel.find({ name: new RegExp(serchText, "i") });
        return result;
    });
};
// Get Single product
const getSingleProductFromDB = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield product_model_1.ProductModel.findOne({ _id: id });
        return result;
    });
};
// Update Data
const updateDataValueIntoDB = function (id, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield product_model_1.ProductModel.updateOne({
            _id: id,
            // "variants.type": "variants.value",
        }, {
            $set: {
                name: data === null || data === void 0 ? void 0 : data.name,
                description: data === null || data === void 0 ? void 0 : data.description,
                price: data === null || data === void 0 ? void 0 : data.price,
                category: data === null || data === void 0 ? void 0 : data.category,
                "inventory.quantity": data === null || data === void 0 ? void 0 : data.inventory,
                "inventory.inStock": data === null || data === void 0 ? void 0 : data.inventory,
                // "variants.$.type": data?.variants?.type,
                // "variants.$.value": data?.variants?.value,
            },
            $addToSet: {
                tags: { $each: data === null || data === void 0 ? void 0 : data.tags },
            },
        });
        return result;
    });
};
// DELETE ITEM FROM DB
const deleteItemFromDB = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield product_model_1.ProductModel.deleteOne({ _id: id });
        return result;
    });
};
exports.ProductService = {
    createProductIntoDB,
    getAllProductFromDB,
    getSingleProductFromDB,
    updateDataValueIntoDB,
    deleteItemFromDB,
};
