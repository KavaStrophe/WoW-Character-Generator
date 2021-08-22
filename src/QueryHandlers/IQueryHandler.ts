export interface IQueryHandler<Query, Return> {
    Execute(query: Query):Return;
}
