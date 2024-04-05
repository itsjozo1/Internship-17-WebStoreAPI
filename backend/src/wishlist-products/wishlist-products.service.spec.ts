import { Test, TestingModule } from '@nestjs/testing';
import { WishlistProductsService } from './wishlist-products.service';

describe('WishlistProductsService', () => {
  let service: WishlistProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WishlistProductsService],
    }).compile();

    service = module.get<WishlistProductsService>(WishlistProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
