import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { ClickedLinkEvent } from "./click-link-event.schema";
import { SignUpEvent } from "./sign-up-event.schema";
import { Document } from 'mongoose';

@Schema({ discriminatorKey: 'event' })
export class Event extends Document {
    @Prop({
        type: String,
        // required: true,
        enum: [ClickedLinkEvent.name, SignUpEvent.name],
    })
    event: string;

    @Prop({ type: Date, required: true })
    time: Date;
}

export const EventSchema = SchemaFactory.createForClass(Event);
