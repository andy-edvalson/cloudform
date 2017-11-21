"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Listener extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticLoadBalancing::Listener', properties, dependsOn);
    }
}
exports.default = Listener;
