import { ResourceBase } from '../resource';
import { Value } from '../internal';
export declare type Protocol = "*" | "tcp" | "udp" | "icmp";
export interface EC2InboundPermissionsProperties {
    FromPort: Value<number>;
    IpRange: Value<string>;
    Protocol: Value<Protocol>;
    ToPort: Value<number>;
}
export default class EC2InboundPermissions extends ResourceBase {
    constructor(properties: EC2InboundPermissionsProperties, dependsOn?: Value<string>);
}
