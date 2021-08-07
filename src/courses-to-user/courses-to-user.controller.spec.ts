import { Test, TestingModule } from '@nestjs/testing';
import { CoursesToUserController } from './courses-to-user.controller';

describe('CoursesToUserController', () => {
  let controller: CoursesToUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoursesToUserController],
    }).compile();

    controller = module.get<CoursesToUserController>(CoursesToUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
