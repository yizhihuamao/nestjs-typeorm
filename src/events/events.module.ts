import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ClickedLinkEvent, ClickedLinkEventSchema } from './schemas/click-link-event.schema';
import { EventSchema } from './schemas/event.schema';
import { SignUpEvent, SignUpEventSchema } from './schemas/sign-up-event.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Event.name,
        schema: EventSchema,
        discriminators: [
          { name: ClickedLinkEvent.name, schema: ClickedLinkEventSchema },
          { name: SignUpEvent.name, schema: SignUpEventSchema },
        ],
      },
    ]),
  ],
  controllers: [EventsController],
  providers: [EventsService]
})
export class EventsModule { }
