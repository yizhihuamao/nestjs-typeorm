import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { ClickedLinkEvent } from "./click-link-event.schema";
import { SignUpEvent } from "./sign-up-event.schema";

@Schema({ discriminatorKey: 'kind' })
export class Event {
    @Prop({
        type: String,
        required: true,
        enum: [ClickedLinkEvent.name, SignUpEvent.name],
    })
    kind: string;

    @Prop({ type: Date, required: true })
    time: Date;
}

export const EventSchema = SchemaFactory.createForClass(Event);
