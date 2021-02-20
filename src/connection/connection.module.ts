import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get('TYPEORM_HOST'),
                port: +configService.get<number>('TYPEORM_PORT'),
                username: configService.get('TYPEORM_USERNAME'),
                password: configService.get('TYPEORM_PASSWORD'),
                database: configService.get('TYPEORM_DATABASE'),
                autoLoadEntities: true,
                // Setting synchronize: true shouldn't be used in production - otherwise you can lose production data.
                synchronize: configService.get('TYPEORM_SYNCHRONIZE') === "true",
            }),
            inject: [ConfigService],
        })
    ]
})
export class ConnectionModule { }
