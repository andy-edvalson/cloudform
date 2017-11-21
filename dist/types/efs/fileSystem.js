"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class FileSystem extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EFS::FileSystem', properties, dependsOn);
    }
}
exports.default = FileSystem;
