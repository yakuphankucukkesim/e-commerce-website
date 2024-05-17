import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

export type AddressDocument = Address & Document;

@Schema()
export class Address {
    @Prop({ required: true })
    title: string;
    @Prop({ required: true })
    firstName: string;
    @Prop({ required: true })
    lastName: string;
    @Prop({ required: true })
    address: string;
    @Prop({ required: true })
    country: string;
    @Prop({ required: true })
    city: string;
    @Prop({ required: true })
    state: string;
    @Prop({ required: true })
    zipCode: string;
    @Prop({ required: true })
    phoneNumber: string;
    // @Prop({ type: [{ type: 'ObjectId', ref: 'User' }] })
    @Prop({ type: String })
    userEmail: string[];
}

export const AddressSchema = SchemaFactory.createForClass(Address);
