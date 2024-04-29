import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './config/configuration';

@Module({
  imports: [ConfigModule.forRoot({ load: [configuration], expandVariables: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
