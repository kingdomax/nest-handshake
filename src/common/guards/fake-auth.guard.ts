import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class FakeAuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        console.log('FakeAuthGuard');
        const request = context.switchToHttp().getRequest();
        const isAuthorized = request.headers['x-fake-auth'] === 'yes';
        if (!isAuthorized) {
            throw new UnauthorizedException('Missing x-fake-auth header');
        }
        return true;
    }
}
