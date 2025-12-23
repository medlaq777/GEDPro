import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabasModule } from './DB/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    DatabasModule,
  ],
})
export class AppModule {}
