import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { AddressDocument } from './address.schema';

@Injectable()
export class AddressService {
    constructor(
        @InjectModel('Address')
        private readonly addressModel: Model<AddressDocument>,
    ) { }

    async create(
        title: string,
        firstName: string,
        lastName: string,
        address: string,
        country: string,
        city: string,
        state: string,
        zipCode: string,
        phoneNumber: string,
        userEmail: string[]
    ): Promise<AddressDocument> {
        const newAddress = new this.addressModel({ title, firstName, lastName, address, country, city, state, zipCode, phoneNumber, userEmail });
        return newAddress.save();
    }

    async findAll(): Promise<AddressDocument[]> {
        return this.addressModel.find().exec();
    }

    async find(id: string): Promise<AddressDocument> {
        return this.addressModel.findById(id).exec();
    }

    async update(
        id: string,
        newTitle: string,
        newFirstName: string,
        newLastName: string,
        newAddress: string,
        newCountry: string,
        newCity: string,
        newState: string,
        newZipCode: string,
        newPhoneNumber: string,
        newUserEmail: string[]
    ): Promise<AddressDocument> {
        let existingAddress = await this.find(id);

        existingAddress.title = newTitle ?? existingAddress.title;
        existingAddress.firstName = newFirstName ?? existingAddress.firstName;
        existingAddress.lastName = newLastName ?? existingAddress.lastName;
        existingAddress.address = newAddress ?? existingAddress.address;
        existingAddress.country = newCountry ?? existingAddress.country;
        existingAddress.city = newCity ?? existingAddress.city;
        existingAddress.state = newState ?? existingAddress.state;
        existingAddress.zipCode = newZipCode ?? existingAddress.zipCode;
        existingAddress.phoneNumber = newPhoneNumber ?? existingAddress.phoneNumber;

        if (newUserEmail !== undefined && newUserEmail.length > 0) {
            existingAddress.userEmail = [...existingAddress.userEmail, ...newUserEmail];
        }

        return existingAddress.save();
    }

    async delete(id: string) {
        return this.addressModel.deleteOne({ _id: id }).exec();
    }
}
