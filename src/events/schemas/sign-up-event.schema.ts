import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";

@Schema()
export class SignUpEvent {
    kind: string;
    time: Date;

    @Prop({ type: String, required: true })
    user: string;
}

export const SignUpEventSchema = SchemaFactory.createForClass(SignUpEvent);
