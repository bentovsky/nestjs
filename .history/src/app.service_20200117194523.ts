import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {
  constructor(@InjectModel('Cat') private readonly catModel: any) {}
  getHello(): string {
    return process.env.PORT;
  }
}
