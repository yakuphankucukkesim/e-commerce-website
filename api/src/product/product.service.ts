import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { ProductDocument } from './product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product')
    private readonly productModel: Model<ProductDocument>,
  ) { }

  async create(
    name: string,
    price: number,
    description: string,
    ingredient: string,
    quantity: number,
    region: string,
    alcoholRate: number,
    cl: number,
    shortExplanation: string,
    categories: string[]
  ): Promise<ProductDocument> {
    const newProduct = new this.productModel({ name, price, description, ingredient, quantity, region, alcoholRate, cl, shortExplanation, categories });
    return newProduct.save();
  }

  async findAll(): Promise<ProductDocument[]> {
    return this.productModel.find().exec();
  }

  async find(id: string): Promise<ProductDocument> {
    return this.productModel.findById(id).exec();
  }

  async update(
    id: string,
    newName: string,
    newPrice: number,
    newDescription: string,
    newIngredient: string,
    newQuantity: number,
    newRegion: string,
    newAlcoholRate: number,
    newCl: number,
    newShortExplanation: string,
    newCategories: string[]
  ): Promise<ProductDocument> {
    let existingProduct = await this.find(id);

    existingProduct.name = newName ?? existingProduct.name;
    existingProduct.price = newPrice ?? existingProduct.price;
    existingProduct.description = newDescription ?? existingProduct.description;
    existingProduct.ingredient = newIngredient ?? existingProduct.ingredient;
    existingProduct.quantity = newQuantity ?? existingProduct.quantity;
    existingProduct.region = newRegion ?? existingProduct.region;
    existingProduct.alcoholRate = newAlcoholRate ?? existingProduct.alcoholRate;
    existingProduct.cl = newCl ?? existingProduct.cl;
    existingProduct.shortExplanation = newShortExplanation ?? existingProduct.shortExplanation;

    if (newCategories !== undefined && newCategories.length > 0) {
      existingProduct.categories = [...existingProduct.categories, ...newCategories];
    }

    return existingProduct.save();
  }

  async delete(id: string) {
    return this.productModel.deleteOne({ _id: id }).exec();
  }

  async findByCategory(categoryId: string): Promise<ProductDocument[]> {
    return this.productModel.find({ categories: categoryId }).exec();
  }

  async assignToCategories(productId: string, categoryIds: string[]): Promise<ProductDocument> {
    return this.productModel.findByIdAndUpdate(productId, { categories: categoryIds }, { new: true });
  }
}
