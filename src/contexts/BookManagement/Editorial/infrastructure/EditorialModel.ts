import { Table, Column, Model, DataType } from 'sequelize-typescript'

@Table({ tableName: 'editorials' })
export class EditorialModel extends Model {
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
    type: DataType.STRING,
    allowNull: false
  })
  address!: string
}
