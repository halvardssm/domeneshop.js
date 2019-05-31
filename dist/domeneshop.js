"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const api_1 = __importDefault(require("./lib/api"));
const dns_1 = __importDefault(require("./lib/dns"));
/**
 * Main class of the Domeneshop Javascript API.
 */
class Domeneshop {
    constructor(token, secret) {
        this.version = "0.1.3";
        this.api = new api_1.default(token, secret);
        this.dns = new dns_1.default(this.api);
    }
    /**
     * getDomains
     */
    getDomains() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.api.apiCall("GET", "/domains");
            return res.data;
        });
    }
    /**
     * getDomain
     *
     * @param id The ID number of domain.
     */
    getDomain(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.api.apiCall("GET", `/domains/${id}`);
            return res.data;
        });
    }
}
module.exports = Domeneshop;
//# sourceMappingURL=domeneshop.js.map