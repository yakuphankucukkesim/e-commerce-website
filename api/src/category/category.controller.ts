import { JwtGuard } from '../auth/guards/jwt.guard';
import { CategoryService } from './category.service';
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    UseGuards,
} from '@nestjs/common';
import { CategoryDocument } from './category.schema';

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) { }

    @Post()
    createCategory(
        @Body('name') name: string,
        @Body('description') description?: string,
    ): Promise<CategoryDocument> {
        return this.categoryService.create(name, description);
    }

    @Get()
    findAllCategories(): Promise<CategoryDocument[]> {
        return this.categoryService.findAll();
    }

    @UseGuards(JwtGuard)
    @Get(':id')
    findCategory(@Param('id') id: string): Promise<CategoryDocument> {
        return this.categoryService.find(id);
    }

    @Patch(':id')
    updateCategory(
        @Param('id') id: string,
        @Body('name') name: string,
        @Body('description') description?: string,
    ): Promise<CategoryDocument> {
        return this.categoryService.update(id, name, description);
    }

    @Delete(':id')
    deleteCategory(@Param('id') id: string) {
        return this.categoryService.delete(id);
    }
}
