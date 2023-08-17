import { Controller } from '@nestjs/common';
import { ProfileService } from '../services';

@Controller()
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}
}
