import { TypeOrmModule } from '@nestjs/typeorm';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5433,
            username: 'postgres',
            password: '123456789',
            database: 'tasksync',
            autoLoadEntities: true,
            synchronize: false,
            logging: true,
        }),
        UserModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes('*');
    }
}
