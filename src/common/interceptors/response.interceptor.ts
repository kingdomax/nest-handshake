import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
} from '@nestjs/common';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        console.log(`ResponseInterceptor - Start Timer`);
        let duration: number;
        const now = Date.now();

        // pipe() allows us to manipulate the stream of the response
        return next.handle().pipe(
            // tap() allows side-effects (like logging) without modifying the response.
            tap(() => {
                duration = Date.now() - now;
                console.log(
                    `ResponseInterceptor - Response Time (${duration}ms)`,
                );
            }),
            // map() transforms the controller’s return value (e.g., adds a wrapper).
            map((data) => ({
                success: true,
                duration: `${duration}ms`, // it’s a bit "hacky" and depends on tap() running before map()
                data,
            })),
        );
    }
}
