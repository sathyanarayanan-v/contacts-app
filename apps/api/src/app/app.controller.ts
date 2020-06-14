import { Controller, Get } from '@nestjs/common';
@Controller()
export class AppController {
  constructor() {}

  @Get()
  getData() {
    return {
      message:'If you are seeing this, you are trying to view the contacts app api from browser.'
    }
  }
}
