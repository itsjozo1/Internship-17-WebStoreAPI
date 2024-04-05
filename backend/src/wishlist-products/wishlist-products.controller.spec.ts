import { Test, TestingModule } from '@nestjs/testing';
import { WishlistProductsController } from './wishlist-products.controller';
import { WishlistProductsService } from './wishlist-products.service';

describe('WishlistProductsController', () => {
  let controller: WishlistProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WishlistProductsController],
      providers: [WishlistProductsService],
    }).compile();

    controller = module.get<WishlistProductsController>(WishlistProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
