import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/users.entity';

@Injectable()
export class UserService {
    constructor(@InjectRepository(Users) private userRepo: Repository<Users>) {}

    async find(id: number): Promise<Users | null> {
        try {
            const result = await this.userRepo.findOneBy({ id });
            if (!result) console.warn(`User with id ${id} not found.`);
            return result;
        } catch (error) {
            console.error('Database error:', error);
            throw error;
        }
    }

    async findAll(): Promise<Users[]> {
        return await this.userRepo.find();
    }

    //create(data: Partial<User>): Promise<User> {
    //    const user = this.userRepo.create(data);
    //    return this.userRepo.save(user);
    //}
    //
    //async toggleActive(id: number): Promise<User> {
    //    const user = await this.userRepo.findOneBy({ id });
    //    user.isActive = !user.isActive;
    //    return this.userRepo.save(user);
    //}
    //
    //delete(id: number): Promise<void> {
    //    return this.userRepo.delete(id).then(() => undefined);
    //}
}
