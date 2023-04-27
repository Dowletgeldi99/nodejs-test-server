import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type CarDocument = Car & Document;

@Schema({ timestamps: true })
export class Car {
  @ApiProperty()
  @Prop({
    required: true,
  })
  title: string;

  @ApiProperty()
  @Prop({
    required: true,
  })
  brand: string;

  @ApiProperty()
  @Prop({
    required: true,
  })
  productionYear: number;

  @ApiProperty()
  @Prop({
    required: true,
  })
  price: number;
}

export const CarSchema = SchemaFactory.createForClass(Car);
