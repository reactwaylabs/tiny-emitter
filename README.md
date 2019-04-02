[![NPM version](https://img.shields.io/npm/v/@reactway/tiny-emitter.svg?logo=npm)](https://www.npmjs.com/package/@reactway/tiny-emitter)
[![Build Status](https://img.shields.io/azure-devops/build/reactway/reactway/6/master.svg?logo=azuredevops)](https://dev.azure.com/reactway/ReactWay/_build?definitionId=6)
[![Code coverage](https://img.shields.io/azure-devops/coverage/reactway/reactway/6/master.svg)](https://dev.azure.com/reactway/ReactWay/_build?definitionId=6)
[![Dependencies](https://img.shields.io/david/reactway/tiny-emitter.svg)](https://david-dm.org/reactway/tiny-emitter)
[![Dev dependencies](https://img.shields.io/david/dev/reactway/tiny-emitter.svg)](https://david-dm.org/reactway/tiny-emitter?type=dev)

# @reactway/tiny-emitter

Small library to handle change emits.

## Get started

```sh
$ npm install tiny-emitter
```

## Example

```ts
type CounterHandler = (count: number) => void;
const handler: CounterHandler = count => console.log("Counter:", count);

const counterEmitter = new TinyEmitter<CounterHandler>();

const removeListener = counterEmitter.addListener(handler);

counterEmitter.emit(1); // Emit change with value count=1
// Console log: Counter: 1

removeListener(); // Remove registered listener
```

## API

`.addListener(handler: Callback): () => void`

`.removeListener(handler: Callback): void`

`.emit(...payload: any): void`

`.getListenersCount(): number`

## License

Released under the [MIT license](LICENSE).
