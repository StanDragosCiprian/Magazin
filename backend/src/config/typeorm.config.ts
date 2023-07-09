import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Users } from 'src/core/entities/users.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost', //127.0.0.1
  port: 3306,
  username: 'root',
  password: '1234',
  database: 'magazindb',
  entities: [Users, 'dist/**/*.entity{.ts,.js}'], //__dirname + '/../**/*.entity{.ts,.js}'
  synchronize: true,
  timezone: 'utc',
};
