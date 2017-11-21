import {ResourceBase} from '../resource'
import {Value} from '../internal'


export type Type = "HEADER" | "METHOD" | "QUERY_STRING" | "URI" | "*"

export interface FieldToMatchProperties {
    Data?: Value<string>
    Type: Value<Type>
}

export default class FieldToMatch extends ResourceBase {
    constructor(properties: FieldToMatchProperties, dependsOn?: Value<string>) {
        super('AWS::WAF::FieldToMatch', properties, dependsOn)
    }
}