# text2tree

Turn simple text files with indentations to SVG mindmap tress inside browser using CLI

## Installation

Install the CLI (command line interface) tool globally on your machine.

```Bash
$ npm install -g text2tree
```

## Usage

You can either use the CLI tool to run a server or generate an image from your text file

### Browser


This command will spin up a web server and renders the SVG tree within the browser for preview

```Bash
$ text2tree my-text-file.txt
```

The webserver will listen on `localhost:3000` by default, but you can alter this configuration by passing the `-p --port` flag to the cli.

```Bash
$ text2tree my-text-file.txt -p 3020
```

### Image export [under development]

You can also export the tree graph to a `.png` file using the `-o --output` flag:

```Bash
$ text2tree my-text-file.txt -o my-tree.jpeg
```