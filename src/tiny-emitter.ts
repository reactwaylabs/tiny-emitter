// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Callback = (...args: any[]) => void;

export class TinyEmitter<THandler extends Callback = () => void> {
    private registry: Callback[] = [];

    public addListener(handler: THandler): () => void {
        this.registry.push(handler);

        return () => this.removeListener(handler);
    }

    public removeListener(handler: THandler): void {
        if (this.registry.length === 0) {
            return;
        }

        this.registry = this.registry.filter(handlerItem => handlerItem !== handler);
    }

    public emit(...payload: Parameters<THandler>): void {
        for (const handler of this.registry) {
            handler(...payload);
        }
    }

    public getListenersCount(): number {
        return this.registry.length;
    }
}
