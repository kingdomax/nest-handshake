import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'Users' }) // Need to exact match table name
export class Users {
    @PrimaryGeneratedColumn({ name: 'Id' }) // Need to exact match column name
    id: number;

    @Column({ name: 'Username' })
    username: string;

    @Column({ name: 'Email' })
    email: string;
}
