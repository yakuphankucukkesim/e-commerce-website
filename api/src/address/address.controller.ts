import { JwtGuard } from '../auth/guards/jwt.guard';
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
import { AddressDocument } from './address.schema';
import { AddressService } from './address.service';

@Controller('address')
export class AddressController {
    constructor(private addressService: AddressService) { }

    @Post()
    createAddress(
        @Body('title') title: string,
        @Body('firstName') firstName: string,
        @Body('lastName') lastName: string,
        @Body('address') address: string,
        @Body('country') country: string,
        @Body('city') city: string,
        @Body('state') state: string,
        @Body('zipCode') zipCode: string,
        @Body('phoneNumber') phoneNumber: string,
        @Body('userEmail') userEmail: string[]
    ): Promise<AddressDocument> {
        return this.addressService.create(title, firstName, lastName, address, country, city, state, zipCode, phoneNumber, userEmail);
    }

    @Get()
    findAllAddresses(): Promise<AddressDocument[]> {
        return this.addressService.findAll();
    }

    @UseGuards(JwtGuard)
    @Get(':id')
    findAddress(@Param('id') id: string): Promise<AddressDocument> {
        return this.addressService.find(id);
    }

    @Patch(':id')
    updateAddress(
        @Param('id') id: string,
        @Body('title') title: string,
        @Body('firstName') firstName: string,
        @Body('lastName') lastName: string,
        @Body('address') address: string,
        @Body('country') country: string,
        @Body('city') city: string,
        @Body('state') state: string,
        @Body('zipCode') zipCode: string,
        @Body('phoneNumber') phoneNumber: string,
        @Body('userEmail') userEmail: string[]
    ): Promise<AddressDocument> {
        return this.addressService.update(id, title, firstName, lastName, address, country, city, state, zipCode, phoneNumber, userEmail);
    }

    @Delete(':id')
    deleteCategory(@Param('id') id: string) {
        return this.addressService.delete(id);
    }
}
