declare class PostService {
    private Repository;
    constructor();
    findAll: (userId?: number) => Promise<any>;
    add: (data: any) => Promise<any>;
}
declare const _default: PostService;
export default _default;
