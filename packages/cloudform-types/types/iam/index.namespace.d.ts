import Group_ from './group';
import Policy_ from './policy';
import Role_ from './role';
import ServiceLinkedRole_ from './serviceLinkedRole';
import UserToGroupAddition_ from './userToGroupAddition';
import InstanceProfile_ from './instanceProfile';
import AccessKey_ from './accessKey';
import User_ from './user';
import ManagedPolicy_ from './managedPolicy';
export declare namespace IAM {
    const Group: typeof Group_;
    const Policy: typeof Policy_;
    const Role: typeof Role_;
    const ServiceLinkedRole: typeof ServiceLinkedRole_;
    const UserToGroupAddition: typeof UserToGroupAddition_;
    const InstanceProfile: typeof InstanceProfile_;
    const AccessKey: typeof AccessKey_;
    const User: typeof User_;
    const ManagedPolicy: typeof ManagedPolicy_;
    type Group = Group_;
    type Policy = Policy_;
    type Role = Role_;
    type ServiceLinkedRole = ServiceLinkedRole_;
    type UserToGroupAddition = UserToGroupAddition_;
    type InstanceProfile = InstanceProfile_;
    type AccessKey = AccessKey_;
    type User = User_;
    type ManagedPolicy = ManagedPolicy_;
}
