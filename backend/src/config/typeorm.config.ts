import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '1234',
  database: 'magazindb',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
  timezone: 'utc',
};
