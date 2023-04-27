import { ConfigService } from '@nestjs/config';
export declare class AppConfigService {
    private configService;
    constructor(configService: ConfigService);
    get port(): number;
    get jwtSecret(): string;
    get jwtExpirationTime(): string;
}
