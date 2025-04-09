import {
  Table,
  Column,
  Model,
  DataType,
  BeforeCreate
} from 'sequelize-typescript'
import * as bcrypt from 'bcrypt'

@Table({ tableName: 'users' })
export class UserModel extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataType.UUIDV4
  })
  id!: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true
  })
  username!: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  password!: string

  @BeforeCreate
  static async hashPassword(user: UserModel) {
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)
  }

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password)
  }
}
