# hangman_skeleton_react

## Table of content

- [hangman_skeleton_react](#hangman_skeleton_react)
  - [Table of content](#table-of-content)
  - [Template: React + TypeScript + Vite](#template-react--typescript--vite)
    - [Resume](#resume)
      - [Demo](#demo)
    - [Requirements](#requirements)
    - [Run in development](#run-in-development)
    - [Build the project](#build-the-project)
    - [PWA](#pwa)
    - [Local storage](#local-storage)
    - [Word generator (API)](#word-generator-api)
    - [Hangman images](#hangman-images)

## Template: React + TypeScript + Vite

![](https://i.imgur.com/fddVvxy.png)

### Resume

This is a React Project in Typescript to play a hangman game with a skeleton as visual. This project use also Axios to ba able to use an API that generate randomly a word. This project can handle two languages (English and French). The libraries used to help to create components are **MUI (Material UI)** and **Emotion (styled)** .

#### Demo

[Click here](https://hangman.zamer12.com/) to see the project live in your browser.

### Requirements

1. Node.js
2. Git

### Run in development

```shell
npm run dev
```

### Build the project

```shell
npm run build
```

Take the files in the dist folder the command generated and host them in your server.

### PWA

This project is PWA. So you can use it as "application" in your mobile's home page.

### Local storage

The project store locally the dark theme preference and the language preference.

### Word generator (API)

The project use an API to generate the words both in english and french.

**Documentation source**: https://random-word-api.herokuapp.com/home

### Hangman images

| Images   | URL                                                                           |
| -------- | ----------------------------------------------------------------------------- |
| Knot     | https://pixabay.com/fr/vectors/nouer-semparant-attelage-%C3%A9pissure-145493/ |
| Skeleton | https://pixabay.com/fr/vectors/nouer-semparant-attelage-%C3%A9pissure-145493/ |
