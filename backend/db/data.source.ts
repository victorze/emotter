import { DataSource } from 'typeorm'
import { Emot } from '../entities/emot.entity'
import { DB } from '../utils/config'

export const dataSource = new DataSource({
  type: parseConnection(DB.CONNECTION),
  host: DB.HOST,
  port: Number(DB.PORT),
  username: DB.USERNAME,
  password: DB.PASSWORD,
  database: DB.DATABASE,

  entities: [Emot],
  logging: true,
  synchronize: true,
})

function parseConnection(connection: any) {
  const databases = [
    'mysql',
    'mariadb',
    'postgres',
    'sqlite',
    'mongodb',
    'oracle',
  ]
  if (!databases.includes(connection)) {
    return 'postgres'
  }
  return connection
}
