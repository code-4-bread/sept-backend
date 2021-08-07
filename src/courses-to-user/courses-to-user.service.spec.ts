import { Test, TestingModule } from '@nestjs/testing';
import { CoursesToUserService } from './courses-to-user.service';

describe('CoursesToUserService', () => {
  let service: CoursesToUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoursesToUserService],
    }).compile();

    service = module.get<CoursesToUserService>(CoursesToUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
