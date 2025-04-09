import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey
} from 'sequelize-typescript'
import { AuthorModel } from '../../Author/infrastructure/AuthorModel'
import { EditorialModel } from '../../Editorial/infrastructure/EditorialModel'
import { GenreModel } from '../../Genre/infrastructure/GenreModel'

@Table({ tableName: 'books' })
export class BookModel extends Model {
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
  title!: string

  @Column({
    type: DataType.FLOAT,
    allowNull: false
  })
  price!: number

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false
  })
  available!: boolean

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: true
  })
  photos!: string[]

  @ForeignKey(() => AuthorModel)
  @Column({
    type: DataType.UUID,
    allowNull: false
  })
  authorId!: string

  @ForeignKey(() => EditorialModel)
  @Column({
    type: DataType.UUID,
    allowNull: false
  })
  editorialId!: string

  @ForeignKey(() => GenreModel)
  @Column({
    type: DataType.UUID,
    allowNull: false
  })
  genreId!: string

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false
  })
  isDeleted!: boolean
}
