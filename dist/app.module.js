"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const postgres_module_1 = require("./core/database/postgres.module");
const mongo_module_1 = require("./core/database/mongo.module");
const organizations_module_1 = require("./modules/organization/organizations.module");
const users_module_1 = require("./modules/iam/users/users.module");
const auth_module_1 = require("./modules/iam/auth/auth.module");
const roles_module_1 = require("./modules/iam/roles/roles.module");
const tenant_middleware_1 = require("./core/middleware/tenant.middleware");
const document_management_module_1 = require("./modules/document-management/document-management.module");
const form_builder_module_1 = require("./modules/form-builder/form-builder.module");
const recruitment_module_1 = require("./modules/recruitment/recruitment.module");
const integration_module_1 = require("./modules/integration/integration.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(tenant_middleware_1.TenantMiddleware).forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            postgres_module_1.PostgresModule,
            mongo_module_1.MongoModule,
            organizations_module_1.OrganizationsModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            roles_module_1.RolesModule,
            document_management_module_1.DocumentManagementModule,
            form_builder_module_1.FormBuilderModule,
            recruitment_module_1.RecruitmentModule,
            integration_module_1.IntegrationModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map