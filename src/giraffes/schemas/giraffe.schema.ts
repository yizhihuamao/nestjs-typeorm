import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Giraffe extends Document {
    @Prop({ required: true })
    name: string;

    @Prop()
    age: number;

    @Prop()
    breed: string;
}

export const GiraffeSchema = SchemaFactory.createForClass(Giraffe);
