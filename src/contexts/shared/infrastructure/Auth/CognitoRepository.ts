import {
  AdminInitiateAuthCommand,
  ConfirmForgotPasswordCommand,
  ConfirmSignUpCommand,
  ForgotPasswordCommand,
  GetUserCommand,
  SignUpCommand
} from '@aws-sdk/client-cognito-identity-provider'
import { CognitoClient } from './CognitoClient'

export class CognitoRepository extends CognitoClient {
  async signUp({
    phone,
    password
  }: {
    phone: string
    password: string
  }): Promise<void> {
    const phone_number = `+51${phone}`
    const command = new SignUpCommand({
      ClientId: this.coginitoEnv.clientId,
      Username: phone_number,
      Password: password
    })
    const response = await this.client.send(command)
    console.log({ response })
    console.log(JSON.stringify(response))
  }

  async confirmSignUp({
    phone,
    code
  }: {
    phone: string
    code: string
  }): Promise<void> {
    const phone_number = `+51${phone}`
    const command = new ConfirmSignUpCommand({
      ClientId: this.coginitoEnv.clientId,
      Username: phone_number,
      ConfirmationCode: code
    })
    const response = await this.client.send(command)
  }

  async signIn({ phone, password }: { phone: string; password: string }) {
    const phone_number = `+51${phone}`
    const command = new AdminInitiateAuthCommand({
      UserPoolId: this.coginitoEnv.userPoolId,
      ClientId: this.coginitoEnv.clientId,
      AuthFlow: 'ADMIN_USER_PASSWORD_AUTH',
      AuthParameters: {
        USERNAME: phone_number,
        PASSWORD: password
      }
    })
    return await this.client.send(command)
  }

  async forgotPassword({ phone }: { phone: string }) {
    const phone_number = `+51${phone}`
    const command = new ForgotPasswordCommand({
      ClientId: this.coginitoEnv.clientId,
      Username: phone_number
    })
    return await this.client.send(command)
  }

  async confirmForgotPassword({
    phone,
    code,
    password
  }: {
    phone: string
    code: string
    password: string
  }) {
    const phone_number = `+51${phone}`
    const command = new ConfirmForgotPasswordCommand({
      ClientId: this.coginitoEnv.clientId,
      Username: phone_number,
      ConfirmationCode: code,
      Password: password
    })
    return await this.client.send(command)
  }

  async getUser({ accessToken }: { accessToken: string }) {
    const command = new GetUserCommand({
      AccessToken: accessToken
    })
    return await this.client.send(command)
  }
}
