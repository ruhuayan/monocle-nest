import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Site } from './entities/site.entity';
import { SiteService } from './services/site.service';
import { SiteController } from './controllers/site.controller';
import { AuthModule } from './modules/auth/auth.module';

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
      username: 'richyan',
      password: 'Laptop_83g12t1u',
      database: 'employee_reporting_dev',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Site]),
    AuthModule
  ],
  providers: [SiteService],
  controllers: [SiteController]
})
export class ApplicationModule {}
