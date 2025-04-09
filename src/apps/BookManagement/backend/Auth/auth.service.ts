import { Inject, Injectable, UnauthorizedException } from '@nestjs/common'
import { UserModel } from './UserModel'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: typeof UserModel,
    private jwtService: JwtService
  ) {}

  async signIn(
    username: string,
    pass: string
  ): Promise<{ access_token: string }> {
    const user = await this.userRepository.findOne({
      where: {
        username: username
      }
    })
    if (!user || !(await user.validatePassword(pass))) {
      throw new UnauthorizedException()
    }

    const payload = { sub: user.id, username: user.username }
    return {
      access_token: await this.jwtService.signAsync(payload)
    }
  }
}
