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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasketsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const Basket_1 = require("./Schemas/Basket");
const schema_basket_1 = require("./Schemas/schema.basket");
let BasketsService = class BasketsService {
    constructor(basketModel) {
        this.basketModel = basketModel;
    }
    create(basket) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdBasket = new this.basketModel(basket);
            return createdBasket.save();
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.basketModel.findOne({ customerId: id }).exec();
        });
    }
    add(customerId, productId) {
        return __awaiter(this, void 0, void 0, function* () {
            var basket = new schema_basket_1.BasketSchema();
            console.log(customerId);
            yield this.basketModel.findOne({ customerId: customerId }).exec().then((basket) => __awaiter(this, void 0, void 0, function* () {
                console.log(basket);
                basket.productIds.push(productId);
                basket = yield this.basketModel.findByIdAndUpdate(basket._id, basket);
            }));
            return basket;
        });
    }
    delete(customerId, productId) {
        return __awaiter(this, void 0, void 0, function* () {
            var basket = new schema_basket_1.BasketSchema();
            yield this.basketModel.findOne({ customerId: customerId }).then((basket) => __awaiter(this, void 0, void 0, function* () {
                var position = 0;
                basket.productIds.forEach(products => {
                    if (products == productId) {
                        basket.productIds.splice(position, 1);
                        return;
                    }
                    position++;
                });
                basket = yield this.basketModel.findByIdAndUpdate(basket._id, basket);
            }));
            return basket;
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var basket = new schema_basket_1.BasketSchema();
            yield this.basketModel.findOne({ customerId: id }).then((basket) => __awaiter(this, void 0, void 0, function* () {
                basket.productIds = [];
                basket = yield this.basketModel.findByIdAndUpdate(basket._id, basket);
            }));
            return basket;
        });
    }
};
BasketsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel(Basket_1.Basket.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], BasketsService);
exports.BasketsService = BasketsService;
//# sourceMappingURL=baskets.service.js.map