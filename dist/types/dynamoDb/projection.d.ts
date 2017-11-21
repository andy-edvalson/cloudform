import { ResourceBase } from '../resource';
import { Value } from '../internal';
export declare type ProjectionType = "KEYS_ONLY" | "INCLUDE" | "ALL";
export interface ProjectionProperties {
    NonKeyAttributes?: Value<string>[];
    ProjectionType: Value<ProjectionType>;
}
export default class Projection extends ResourceBase {
    constructor(properties: ProjectionProperties, dependsOn?: Value<string>);
}
