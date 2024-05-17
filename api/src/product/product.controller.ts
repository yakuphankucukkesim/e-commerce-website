import { JwtGuard } from './../auth/guards/jwt.guard';
import { ProductService } from './product.service';
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
import { ProductDocument } from './product.schema';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) { }

  @Post()
  createProduct(
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('description') description?: string,
    @Body('ingredient') ingredient?: string,
    @Body('quantity') quantity?: number,
    @Body('region') region?: string,
    @Body('alcoholRate') alcoholRate?: number,
    @Body('cl') cl?: number,
    @Body('shortExplanation') shortExplanation?: string,
    @Body('categoryId') categoryId?: string[]
  ): Promise<ProductDocument> {
    return this.productService.create(name, price, description, ingredient, quantity, region, alcoholRate, cl, shortExplanation, categoryId);
  }

  @Get()
  findAllProducts(): Promise<ProductDocument[]> {
    return this.productService.findAll();
  }

  @UseGuards(JwtGuard)
  @Get(':id')
  findProduct(@Param('id') id: string): Promise<ProductDocument> {
    return this.productService.find(id);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') id: string,
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('description') description?: string,
    @Body('ingredient') ingredient?: string,
    @Body('quantity') quantity?: number,
    @Body('region') region?: string,
    @Body('alcoholRate') alcoholRate?: number,
    @Body('cl') cl?: number,
    @Body('shortExplanation') shortExplanation?: string,
    @Body('categoryId') categoryId?: string[]
  ): Promise<ProductDocument> {
    return this.productService.update(id, name, price, description, ingredient, quantity, region, alcoholRate, cl, shortExplanation, categoryId);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productService.delete(id);
  }

  @Get('category/:categoryId')
  findByCategory(@Param('categoryId') categoryId: string) {
    return this.productService.findByCategory(categoryId);
  }

  @Post(':productId/categories')
  async assignToCategories(@Param('productId') productId: string, @Body('categoryIds') categoryIds: string[]) {
    return this.productService.assignToCategories(productId, categoryIds);
  }
}
