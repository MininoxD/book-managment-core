import { CognitoIdentityProviderClient } from '@aws-sdk/client-cognito-identity-provider'
import { ConfigService } from '@nestjs/config'
interface AwsClientEnv {
  region: string
  accessKeyId: string
  secretAccesKey: string
}

interface AwsCoginitoEnv {
  clientId: string
  userPoolId: string
}
export abstract class CognitoClient {
  readonly client: CognitoIdentityProviderClient
  readonly coginitoEnv: AwsCoginitoEnv

  constructor(private readonly configService: ConfigService) {
    this.coginitoEnv = this.returnAwsCoginitoEnv()
    this.client = this.createClient()
  }

  createClient(): CognitoIdentityProviderClient {
    const awsClientEnv = this.returnAwsClientEnv()
    return new CognitoIdentityProviderClient({
      region: awsClientEnv?.region || '',
      credentials: {
        accessKeyId: awsClientEnv?.accessKeyId || '',
        secretAccessKey: awsClientEnv?.secretAccesKey || ''
      }
    })
  }
  returnAwsClientEnv(): AwsClientEnv {
    const region = this.configService.get<string>('AWS_REGION')
    const accessKeyId = this.configService.get<string>('AWS_ACCESS_KEY_ID')
    const secretAccesKey = this.configService.get<string>(
      'AWS_SECRET_ACCESS_KEY'
    )
    return {
      region: region || '',
      accessKeyId: accessKeyId || '',
      secretAccesKey: secretAccesKey || ''
    }
  }

  returnAwsCoginitoEnv(): AwsCoginitoEnv {
    const clientId = this.configService.get<string>('COGNITO_CLIENT_ID')
    const userPoolId = this.configService.get<string>('COGNITO_USER_POOL_ID')
    return {
      clientId: clientId || '',
      userPoolId: userPoolId || ''
    }
  }
}
