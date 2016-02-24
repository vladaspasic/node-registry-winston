# node-registy-winston

Plugin for [`node-registry`](http://vladaspasic.github.io/node-registry/) that exposes the [`winston`](https://github.com/winstonjs/) logger module to your project.

### Installation

```bash
npm install node-registy-winston --save
```

### Usage

```javascript
const Registry = require('node-registry');

Registry.logger.info('My little log line');
```

### Configuration

Inside your `config` file you can configure the `winston` Logger transports. An example config file could look like this.

```yaml
logger:
  level: debug
  transport:
    options:
      timestamp: true
      colorize: true
      prettyPrint: true
```

##### logger.level
Sets the level for the logger, defaults to `INFO`
##### logger.transport.type
Define the Winston Transport, defaults to `Console`
##### logger.transport.options
Object that represents the configuration for the Transport

## Licence

[Apache Licence 2.0](https://github.com/vladaspasic/node-registry-winston/blob/master/LICENSE)