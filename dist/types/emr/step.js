"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Step extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EMR::Step', properties, dependsOn);
    }
}
exports.default = Step;
