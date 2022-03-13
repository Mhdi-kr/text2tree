# text2tree

Turn simple text files with indentations to SVG mindmap tress inside browser using CLI

## Installation

```Bash
npm install -g text2tree
```

## Usage

You can either use the CLI tool to run a server or generate an image from your text file

### Broswer


you can watch your file and see the realtime tree inside the browser

```Bash
text2tree my-text-file.txt
```
### Image export

you can also render the image

```Bash
text2tree my-text-file.txt -o my-tree.jpeg
```