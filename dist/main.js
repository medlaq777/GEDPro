"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
    }));
    const config = new swagger_1.DocumentBuilder()
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
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map