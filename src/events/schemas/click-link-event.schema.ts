import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";

@Schema()
export class ClickedLinkEvent {
    kind: string;
    time: Date;

    @Prop({ type: String, required: true })
    url: string;
}

export const ClickedLinkEventSchema = SchemaFactory.createForClass(ClickedLinkEvent);
