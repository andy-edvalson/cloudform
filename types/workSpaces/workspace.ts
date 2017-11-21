import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface WorkspaceProperties {
    BundleId: Value<string>
    DirectoryId: Value<string>
    RootVolumeEncryptionEnabled?: Value<boolean>
    UserName: Value<string>
    UserVolumeEncryptionEnabled?: Value<boolean>
    VolumeEncryptionKey: Value<string>
}

export default class Workspace extends ResourceBase {
    constructor(properties: WorkspaceProperties, dependsOn?: Value<string>) {
        super('AWS::WorkSpaces::Workspace', properties, dependsOn)
    }
}