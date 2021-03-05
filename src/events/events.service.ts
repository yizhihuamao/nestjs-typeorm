import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { CreateSignUpEventDto } from './dto/sign-up-event.dto';
import { CreateClickedLinkEventDto } from './dto/click-link-event.dto';
import { Event } from './schemas/event.schema';
import { ClickedLinkEvent } from './schemas/click-link-event.schema';
import { SignUpEvent } from './schemas/sign-up-event.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(Event.name) private readonly eventModel: Model<Event>,
    @InjectModel(ClickedLinkEvent.name) private readonly clickedLinkEventModel: Model<Event>,
    @InjectModel(SignUpEvent.name) private readonly signUpEventModel: Model<Event>
  ) { }

  createEvent(createEventDto: CreateEventDto): Promise<Event> {
    const createdEventModel = new this.eventModel(createEventDto);
    return createdEventModel.save();
  }

  createClickedLinkEvent(createClickedLinkEventDto: CreateClickedLinkEventDto) {
    const createdLinkEventModel = new this.clickedLinkEventModel(createClickedLinkEventDto);
    return createdLinkEventModel.save();
  }

  createSignUpEvent(createSignUpEventDto: CreateSignUpEventDto) {
    const createdSignUpEventModel = new this.signUpEventModel(createSignUpEventDto);
    return createdSignUpEventModel.save();
  }

  async findAll(): Promise<Event[]> {
    return this.eventModel.find().exec();
  }
}
