# OCRExtraction
A simple web application for text extraction from images.

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Serving in Development](#serving-in-development)
    1. [Testing](#testing)
1. [Roadmap](#roadmap)

## Usage

>To create a utility to drag and drop images, send them to a server for OCR, then return the extracted text in a CSV file.

## Requirements

- Node 10.2.1 or higher
- NPM 5.6.0 or higher

## Development

### Installing Dependencies

From within the root directory:

```sh
cd client
yarn
```

## Serving in Development

From within the root directory:

```sh
cd client
yarn start
```

## Testing

From within the root directory:

Client side testing:
```sh
cd client
yarn test
```

Server side testing:
```sh
yarn test
```

### Roadmap

- Allow a user to upload a jpeg or png file so that I can get a csv file with the text contained in the image. 
