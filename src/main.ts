import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Best Practice: Global Validation
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
    forbidNonWhitelisted: true,
  }));

  // Best Practice: Swagger Documentation
  const config = new DocumentBuilder()
    .setTitle('GEDPro API')
    .setDescription('Platform for RH Document Management')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('Authentication', 'Login and Registration')
    .addTag('Recruitment', 'Candidate management workflow')
    .addTag('Form Builder', 'Dynamic form creation and submission')
    .addTag('Document Management', 'File upload and OCR')
    .addTag('Organization', 'Organization management')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
