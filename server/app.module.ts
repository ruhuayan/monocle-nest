import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Site } from './entities/site.entity';
import { SiteService } from './services/site.service';
import { SiteController } from './controllers/site.controller';
import { AuthModule } from './modules/auth/auth.module';
import { SocketModule } from './modules/socket/socket.module';
// import {ConfigModule, ConfigService} from 'nestjs-config';
// import * as path from 'path';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      viewsPath: join(process.cwd(), 'dist/browser'),
      bundle: require('../server/main'),
      liveReload: true
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: 'monocle',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    // ConfigModule.load(path.resolve(__dirname, 'config', '**', '!(*.d).{ts,js}')),
    // TypeOrmModule.forRootAsync({
    //   useFactory: (config: ConfigService) => config.get('database'),
    //   inject: [ConfigService],
    // }),
    TypeOrmModule.forFeature([Site]),
    AuthModule, SocketModule,
  ],
  providers: [SiteService],
  controllers: [SiteController]
})
export class ApplicationModule {}
