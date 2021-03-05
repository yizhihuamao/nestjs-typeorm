import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { ApiTags } from '@nestjs/swagger';
import { CreateClickedLinkEventDto } from './dto/click-link-event.dto';
import { CreateSignUpEventDto } from './dto/sign-up-event.dto';

@ApiTags('events api discriminators测试')
@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) { }

  @Post('event')
  createEvent(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.createEvent(createEventDto);
  }

  @Post('clickedLinkEvent')
  createClickedLinkEvent(@Body() createClickedLinkEventDto: CreateClickedLinkEventDto) {
    return this.eventsService.createClickedLinkEvent(createClickedLinkEventDto);
  }

  @Post('signUpEvent')
  createSignUpEvent(@Body() createSignUpEventDto: CreateSignUpEventDto) {
    return this.eventsService.createSignUpEvent(createSignUpEventDto);
  }

  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  /*   @Get(':id')
    findOne(@Param('id') id: string) {
      return this.eventsService.findOne(+id);
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
      return this.eventsService.update(+id, updateEventDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.eventsService.remove(+id);
    } */
}
