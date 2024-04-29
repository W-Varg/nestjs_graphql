import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as compression from 'compression';
import { VersioningType } from '@nestjs/common';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { json, urlencoded } from 'express';
// import { ResponseFormatInterceptor } from './interceptors/response-format.interceptor';
// import { GlobalExceptionFilter } from './helpers/global-exception.filter';
import {
  configSwagger,
  parseCors,
  printServerInitLog,
} from 'fiscalia_bo-nest-helpers/dist/helpers';
import { IPackageJson } from 'fiscalia_bo-nest-helpers/dist/dto';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableVersioning({ type: VersioningType.URI });
  app.useStaticAssets(join(__dirname, '..', 'public'));

  // compression
  app.use(compression());

  // load configuration from .env, packageJson
  const configService = app.get(ConfigService);
  const packageJson = configService.get<IPackageJson>('packageJson');
  app.enableCors({
    origin: parseCors(configService.get('nodeEnv'), configService.get('cors')),
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  app.use(json({ limit: configService.get('appMaxSize') }));
  app.use(urlencoded({ limit: configService.get('appMaxSize'), extended: true }));

  // Interceptors globales
  // app.useGlobalInterceptors(new ResponseFormatInterceptor());

  // Filters globales
  // app.useGlobalFilters(new GlobalExceptionFilter());

  if (configService.get('showSwagger') === 'true') configSwagger(app, packageJson);

  const port = configService.get<number>('port') || 3000;
  await app.listen(port, '0.0.0.0').then(async () => {
    printServerInitLog(app, packageJson);
  });
}
bootstrap();
