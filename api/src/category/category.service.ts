import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { CategoryDocument } from './category.schema';

@Injectable()
export class CategoryService {
    constructor(
        @InjectModel('Category')
        private readonly categoryModel: Model<CategoryDocument>,
    ) { }

    async create(
        name: string,
        description: string,
    ): Promise<CategoryDocument> {
        const newCategory = new this.categoryModel({ name, description });
        return newCategory.save();
    }

    async findAll(): Promise<CategoryDocument[]> {
        return this.categoryModel.find().exec();
    }

    async find(id: string): Promise<CategoryDocument> {
        return this.categoryModel.findById(id).exec();
    }

    async update(
        id: string,
        newName: string,
        newDescription: string,
    ): Promise<CategoryDocument> {
        let existingCategory = await this.find(id);

        existingCategory.name = newName ?? existingCategory.name;
        existingCategory.description = newDescription ?? existingCategory.description;

        return existingCategory.save();
    }

    async delete(id: string) {
        return this.categoryModel.deleteOne({ _id: id }).exec();
    }
}
