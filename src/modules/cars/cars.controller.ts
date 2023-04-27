import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/createCar.dto';
import { JwtAuthGuard } from '../../authentication/guards/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { UpdateCarDto } from './dto/updateCar.dto';

@ApiTags('Cars')
@Controller('cars')
export class CarsController {
  constructor(private carService: CarsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getAll() {
    return await this.carService.getAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getById(@Param('id') id: string) {
    return await this.carService.getById(id);
  }

  @Post()
  // @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  async create(@Body() body: CreateCarDto) {
    // async create(@Req() req, @Body() body: CreateCarDto) {
    // return await this.carService.create(req.user, body);
    return await this.carService.create(body);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  async update(
    @Req() req,
    @Param('id') id: string,
    @Body() body: UpdateCarDto,
  ) {
    console.log(111, id, body);
    return await this.carService.update(req.user, id, body);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Req() req, @Param('id') id: string) {
    return await this.carService.delete(req.user, id);
  }
}
