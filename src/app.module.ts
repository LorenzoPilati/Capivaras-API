import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CapivaraModule } from './capivara/capivara.module';
import { Capivara } from './capivara/entities/capivara.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'mysql',
      database: 'db_capivaras',
      entities: [Capivara],
      synchronize: true,
    }),
    CapivaraModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
