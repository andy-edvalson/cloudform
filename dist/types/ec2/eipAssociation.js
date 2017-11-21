"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class EIPAssociation extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::EIPAssociation', properties, dependsOn);
    }
}
exports.default = EIPAssociation;
