import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostgresModule } from './core/database/postgres.module';
import { MongoModule } from './core/database/mongo.module';
import { OrganizationsModule } from './modules/organization/organizations.module';
import { UsersModule } from './modules/iam/users/users.module';
import { AuthModule } from './modules/iam/auth/auth.module';
import { RolesModule } from './modules/iam/roles/roles.module';
import { TenantMiddleware } from './core/middleware/tenant.middleware';
import { DocumentManagementModule } from './modules/document-management/document-management.module';
import { FormBuilderModule } from './modules/form-builder/form-builder.module';
import { RecruitmentModule } from './modules/recruitment/recruitment.module';
import { IntegrationModule } from './modules/integration/integration.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PostgresModule,
    MongoModule,
    OrganizationsModule,
    UsersModule,
    AuthModule,
    RolesModule,
    DocumentManagementModule,
    FormBuilderModule,
    RecruitmentModule,
    IntegrationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TenantMiddleware).forRoutes('*');
  }
}
