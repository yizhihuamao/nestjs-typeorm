import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('TYPEORM_HOST'),
        port: +configService.get<number>('TYPEORM_PORT'),
        username: configService.get('TYPEORM_USERNAME'),
        password: configService.get('TYPEORM_PASSWORD'),
        database: configService.get('TYPEORM_DATABASE'),
        autoLoadEntities: true,
        // Setting synchronize: true shouldn't be used in production - otherwise you can lose production data.
        synchronize: configService.get('TYPEORM_SYNCHRONIZE') === 'true',
      }),
      inject: [ConfigService],
    }),
    // MongooseModule.forRootAsync({
    //   useFactory: async (configService: ConfigService) => ({
    //     uri: 'mongodb://localhost:27017',
    //     useNewUrlParser: true,
    //     dbName: 'my_nest_database',
    //     // but not ideal for large production deployments, because index builds can cause performance degradation.
    //     autoIndex: true,
    //     useUnifiedTopology: true,
    //     useCreateIndex: true,
    //     useFindAndModify: false,
    //     poolSize: 10,
    //     serverSelectionTimeoutMS: 5000,
    //     socketTimeoutMS: 45000,
    //   }),
    //   inject: [ConfigService],
    // }),
  ],
})
export class ConnectionModule {}
