export interface IAdapter<Parameters, ReturnValue> {
    Get(params: Parameters):ReturnValue;
}
