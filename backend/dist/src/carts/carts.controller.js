"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartsController = void 0;
const common_1 = require("@nestjs/common");
const carts_service_1 = require("./carts.service");
const create_cart_dto_1 = require("./dto/create-cart.dto");
const update_cart_dto_1 = require("./dto/update-cart.dto");
const swagger_1 = require("@nestjs/swagger");
const cart_entity_1 = require("./entities/cart.entity");
const user_auth_guard_1 = require("../users/user-auth.guard");
const admin_auth_guard_1 = require("../users/admin-auth.guard");
let CartsController = class CartsController {
    constructor(cartsService) {
        this.cartsService = cartsService;
    }
    create({ user }, createCartDto) {
        return this.cartsService.create(user.id, createCartDto);
    }
    findAll() {
        return this.cartsService.findAll();
    }
    findOne(id) {
        return this.cartsService.findOne(id);
    }
    update(id, updateCartDto) {
        return this.cartsService.update(id, updateCartDto);
    }
    remove(id) {
        return this.cartsService.remove(id);
    }
};
exports.CartsController = CartsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOkResponse)({ type: cart_entity_1.CartEntity, isArray: true }),
    (0, common_1.UseGuards)(user_auth_guard_1.UserAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_cart_dto_1.CreateCartDto]),
    __metadata("design:returntype", void 0)
], CartsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(admin_auth_guard_1.AdminAuthGuard),
    (0, swagger_1.ApiOkResponse)({ type: cart_entity_1.CartEntity, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CartsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(user_auth_guard_1.UserAuthGuard),
    (0, swagger_1.ApiOkResponse)({ type: cart_entity_1.CartEntity, isArray: true }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CartsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: cart_entity_1.CartEntity, isArray: true }),
    (0, common_1.UseGuards)(user_auth_guard_1.UserAuthGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_cart_dto_1.UpdateCartDto]),
    __metadata("design:returntype", void 0)
], CartsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(user_auth_guard_1.UserAuthGuard),
    (0, swagger_1.ApiOkResponse)({ type: cart_entity_1.CartEntity, isArray: true }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CartsController.prototype, "remove", null);
exports.CartsController = CartsController = __decorate([
    (0, common_1.Controller)('carts'),
    (0, swagger_1.ApiTags)('carts'),
    __metadata("design:paramtypes", [carts_service_1.CartsService])
], CartsController);
//# sourceMappingURL=carts.controller.js.map