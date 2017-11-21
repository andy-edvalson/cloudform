import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface VersionProperties {
    CodeSha256?: Value<string>
    Description?: Value<string>
    FunctionName: Value<string>
}

export default class Version extends ResourceBase {
    constructor(properties: VersionProperties, dependsOn?: Value<string>) {
        super('AWS::Lambda::Version', properties, dependsOn)
    }
}