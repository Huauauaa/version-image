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

### png/jpeg/webp/bmp

download directly in page

### svg

in package.json, downgrade `@antv/g6` to `3.2.0`, and replace `main.js` with `export-svg.js`
