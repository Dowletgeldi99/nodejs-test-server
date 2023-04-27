import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/app/config.module';
import { MongoDBModule } from './providers/db/database.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { AuthModule } from './authentication/auth.module';
import { UsersModule } from './modules/users/users.module';
import { CarsModule } from './modules/cars/cars.module';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: 15 * 60 * 1000,
      limit: 100,
    }),
    AppConfigModule,
    MongoDBModule,
    AuthModule,
    UsersModule,
    CarsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
