import { Table, Column, Model, DataType } from 'sequelize-typescript'

@Table({ tableName: 'genres' })
export class GenreModel extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    allowNull: false
  })
  id!: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name!: string

  @Column({
    type: DataType.TEXT,
    allowNull: false
  })
  description!: string
}
