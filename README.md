# filegen
Generate a static file index for some files.

## Installation
Install the dependencies using `yarn` or `npm i`.

## Building
Run either `yarn run build` or `npm run build`. The files are retrieved from
`files/` and the build is compiled to `dist/`. The build assumes that there
exists a directory called `files/` equivalent to the `files/` directory in the
root project; you might want to symlink or copy those.

## Development
Run `yarn run dev` or `npm run dev` to start a filesysteam daemon. You will have to reload the browser manually on each save 

## License
MIT; see [LICENSE](LICENSE).
