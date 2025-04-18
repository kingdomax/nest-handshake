import {
    Controller,
    Get,
    Post,
    Param,
    Delete,
    Body,
    UseGuards,
} from '@nestjs/common';
import { FakeAuthGuard } from 'src/common/guards/fake-auth.guard';
import { UserService } from './user.service';
import { FindUserDto } from './dto/find-user.dto';

@UseGuards(FakeAuthGuard)
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('findById/:id')
    find(@Param() param: FindUserDto) {
        return this.userService.find(param.id);
    }

    @Get('findAll')
    findAll() {
        return this.userService.findAll();
    }

    //@Post()
    //create(@Body() body: { name: string; email: string }) {
    //    return this.userService.create(body);
    //}
    //
    //@Post(':id/toggle')
    //toggle(@Param('id') id: string) {
    //    return this.userService.toggleActive(Number(id));
    //}
    //
    //@Delete(':id')
    //delete(@Param('id') id: string) {
    //    return this.userService.delete(Number(id));
    //}
}
