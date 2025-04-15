![](docs/assets/images/screenshot.png)
# Tinyflow
Tinyflow is a lightweight AI agent solution. It is not a "product" but a development component.
By integrating Tinyflow, you can make any traditional application have the capabilities of an AI agent.

## Features

- Tinyflow front-end is developed based on Web Component, so it supports any framework such as React, Vue, Angular, Svelte, etc., and of course also includes native HTML, CSS, JavaScript.
- The back-end supports Java (not limited to frameworks), Python, Node.js and other languages.


## Quick Start

### Front End

```bash
npm install @tinyflow-ai/ui
```

```ts
import { Tinyflow } from '@tinyflow-ai/ui';
import "@tinyflow-ai/ui/dist/index.css";

new Tinyflow({
    element: '#tinyflow',
});
```

### Backend-java

```xml
<dependency>
    <groupId>dev.tinyflow</groupId>
    <artifactId>tinyflow-java-core</artifactId>
    <version>1.0.0-rc.8</version>
</dependency>
```

### Backend-nodejs
```bash
npm install @tinyflow-ai/nodejs
```


## Wechat Group

![](./docs/assets/images/wechat_group.jpg)
