[![NPM version](https://img.shields.io/npm/v/nano-emitter.svg?logo=npm)](https://www.npmjs.com/package/nano-emitter)
[![Build Status](https://img.shields.io/azure-devops/build/reactway/reactway/6/master.svg?logo=azuredevops)](https://dev.azure.com/reactway/ReactWay/_build?definitionId=6)
[![Code coverage](https://img.shields.io/azure-devops/coverage/reactway/reactway/6/master.svg)](https://dev.azure.com/reactway/ReactWay/_build?definitionId=6)
[![Dependencies](https://img.shields.io/david/reactway/nano-emitter.svg)](https://david-dm.org/reactway/nano-emitter)
[![Dev dependencies](https://img.shields.io/david/dev/reactway/nano-emitter.svg)](https://david-dm.org/reactway/nano-emitter?type=dev)

# nano-emitter

Small library to handle change emits.

## Get started

```sh
$ npm install nano-emitter
```

## Example

```ts
type CounterHandler = (count: number) => void;
const handler: CounterHandler = count => console.log("Counter:", count);

const counterEmitter = new NanoEmitter<CounterHandler>();

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
