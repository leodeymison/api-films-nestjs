import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { LoginDto } from './dto/login';

@Controller()
export class LoginController {
  @Post()
  login(@Res() res: Response, @Body() loginDto: LoginDto): any {
    if (loginDto.login === '123' && loginDto.password === '123') {
        
    } else {
      return res.status(401).json({
        error: true,
        message: 'Login ou senha incorreto',
      });
    }
    return 'ok';
  }
}
