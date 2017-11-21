"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class SmsConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Cognito::SmsConfiguration', properties, dependsOn);
    }
}
exports.default = SmsConfiguration;
