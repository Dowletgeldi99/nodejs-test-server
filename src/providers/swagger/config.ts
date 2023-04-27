import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Server APP V1')
  .setDescription('Node test Server APP Web Service API - Version 1')
  .setVersion('1.0')
  .addBearerAuth()
  .build();
