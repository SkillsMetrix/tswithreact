
type Constructor<T>=new(...args:any[])=> T

export function createInstance<T> (
    ctor:Constructor<T>,
    ...dependencies:ConstructorParameters<Constructor<T>>
):T {
    return new ctor(...dependencies)
}