import { Logger } from '@nestjs/common';

export class MyLogger extends Logger {
    error(message: string, trace: string) {
        // add your tailored logic here
        super.error(message, trace);
    }
}
