import { ConfigService } from '@nestjs/config';
export declare class DatabaseConfigService {
    private configService;
    constructor(configService: ConfigService);
    get connectionUrl(): string;
}
