import {ResourceBase} from '../resource'
import {Value} from '../internal'


export type VolumeType = "*" | "standard" | "io1" | "gp2"

export interface VolumeSpecificationProperties {
    Iops?: Value<number>
    SizeInGB: Value<number>
    VolumeType: Value<VolumeType>
}

export default class VolumeSpecification extends ResourceBase {
    constructor(properties: VolumeSpecificationProperties, dependsOn?: Value<string>) {
        super('AWS::EMR::VolumeSpecification', properties, dependsOn)
    }
}