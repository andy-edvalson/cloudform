"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class KeySchema extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::DynamoDB::KeySchema', properties, dependsOn);
    }
}
exports.default = KeySchema;
