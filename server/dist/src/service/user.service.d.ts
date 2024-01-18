declare class UserService {
    private Repository;
    constructor();
    findAll: () => Promise<any>;
    add: (data: any) => Promise<any>;
}
declare const _default: UserService;
export default _default;
