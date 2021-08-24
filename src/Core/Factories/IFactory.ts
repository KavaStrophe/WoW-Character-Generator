export interface IFactory<Params, Returns> {
    Get(params:Params):Returns;
}
