import { SellingService } from './selling.service';
import {
  Controller,
  Body,
  Get,
  Post,
  Header,
  Patch,
  Request,
  Param,
  UseGuards,
  BadRequestException,
  Delete,
  HttpService,
} from '@nestjs/common';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { map } from 'rxjs/operators';

require('dotenv').config();
const request = require('request');
const { v4: uuidv4 } = require('uuid');
const sign = require('jsonwebtoken').sign;
const access_key = process.env.access_key;
const secret_key = process.env.secret_key;

const payload = {
  access_key: access_key,
  nonce: uuidv4(),
};
const token = sign(payload, secret_key);
const options = {
  method: 'GET',
  url: 'https://api.upbit.com/v1/accounts',
  header: { Authorization: `Bearer ${token}` },
};

@Controller('selling')
export class SellingController {
  constructor(private httpService: HttpService) {}

  @Get('/read')
  async read_list() {
    return await this.httpService
      .get(options.url, {
        headers: options.header,
      })
      .pipe(
        map((res) => {
          return res.data;
        }),
      );
  }
}
