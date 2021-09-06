# version image

## Prepare

> `node`, `npm`/`yarn` is required

### install dependencies

```bash
yarn
```

## Start

### prepare data

replace `data/demo.csv` with yours

### run

#### linux

```bash
make run-local
```

#### windows

```bash
node parseCSV.js
```

```bash
yarn dev
```

## download image

### png/jpeg/webp/bmpin

`vite.config.js`, set `isNewG6 = true`

### svg

`vite.config.js`, set `isNewG6 = false`
