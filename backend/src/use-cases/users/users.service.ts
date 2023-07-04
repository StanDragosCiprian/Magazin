import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from 'src/core/entities/users.entity';
import { CreateUsersDto } from 'src/core/dto/users.dto';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private userRepository: Repository<Users>,
  ) {}
  async create(createUserDto: CreateUsersDto): Promise<Users> {
    const createUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(createUser);
  }
  async getAll(): Promise<Users[]> {
    return await this.userRepository.find();
  }
  async getMoreByCondition(condition: object): Promise<Users> {
    try {
      const userId = await this.userRepository.findOneOrFail({
        where: condition,
      });
      return userId;
    } catch (err) {
      console.log('Get one user by id error: ', err.message ?? err);
      throw new HttpException(`User not found.`, HttpStatus.NOT_FOUND);
    }
  }
  async getOneByCondition(condition: object): Promise<number> {
    try {
      const userId = await this.userRepository.findOneOrFail({
        where: condition,
      });
      return userId.users_id;
    } catch (err) {
      console.log('Get one user by id error: ', err.message ?? err);
      throw new HttpException(`User not found.`, HttpStatus.NOT_FOUND);
    }
  }
  async update(id: number, newUser: CreateUsersDto): Promise<Users> {
    let foundUser = await this.userRepository.findOneBy({ users_id: id });

    if (!foundUser) {
      throw new HttpException(
        `User with id ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }
    foundUser = { ...foundUser, ...newUser };
    return await this.userRepository.save(foundUser);
  }
  async delete(id: number): Promise<number> {
    const foundUser = await this.userRepository.findOneBy({ users_id: id });

    if (!foundUser) {
      throw new HttpException(
        `User with id ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }
    await this.userRepository.delete(id);
    return foundUser.users_id;
  }
}
