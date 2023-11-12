# Recharts Reproduction Repository

Used to test Recharts locally for performance improvements.

## How to use

This assumes that you have `recharts` installed locally in the same directory as this repository.
If not, do `cd ..` and `git clone` Recharts.

1. `npm install`;
1. Build Recharts using `npm run build-es6` on Recharts' repository: you need to do this for every change you do in Recharts' codebase;
1. Run `npm run dev` in this repository.

Since this uses Vite, it'll automatically pick up Recharts' changes and reload your browser.
