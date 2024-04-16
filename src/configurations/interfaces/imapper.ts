interface IMapper {
    map<T>(source: object | null, target: new () => T): T;
    map<T, U>(source: object | null, target: new () => T): U;
}

export default IMapper;
