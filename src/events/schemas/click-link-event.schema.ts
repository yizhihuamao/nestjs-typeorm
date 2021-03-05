import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";

@Schema()
export class ClickedLinkEvent {
    event: string;
    time: Date;

    @Prop({ type: String, required: true })
    url: string;
}

export const ClickedLinkEventSchema = SchemaFactory.createForClass(ClickedLinkEvent);
