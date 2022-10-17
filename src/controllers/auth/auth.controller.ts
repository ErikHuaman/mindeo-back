import { Controller, Get, Param, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login/:id')
  getLogin(@Param() params): string {
    return this.authService.getLogin(params.id);
  }
}
