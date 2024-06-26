# Text Labels

Text labels are floating pieces of text that can be seen in-game in a 3D space.

## Global Text Labels

Global text labels can be seen by all players.

```ts
import { useRebar } from '@Server/index.js';

const Rebar = useRebar();

// Create text label
const label = Rebar.controllers.useTextLabelGlobal({ text: '~r~Hello World', pos: new alt.Vector3(0, 0, 0) });

// Update text to say something else
label.update({ text: 'New Text!' });

// Remove text label
label.destroy();
```

## Local Text Labels

Local text labels can only be seen by a single player.

```ts
import { useRebar } from '@Server/index.js';

const Rebar = useRebar();

// Create text label
const label = Rebar.controllers.useTextLabelLocal(somePlayer, { text: 'Hello World', pos: new alt.Vector3(0, 0, 0) });

// Update text label
label.update({ text: 'hello world!!!' });

// Remove local text label
label.destroy();
```
