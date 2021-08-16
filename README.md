# Headless, and the Content Authoring Experience

[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-908a85?logo=gitpod)](https://gitpod.io/#https://github.com/Decipher/presentation-headless_authoring_experience)



## DrupalSouth Shorts 2021

https://drupalsouth.org/events/sessions/stuart-clark-headless-and-content-authoring-experience


## Getting started with this repository

This repository is setup to be used with GitPod.io

Open GitPod workspace: https://gitpod.io#github.com/Decipher/presentation-headless_authoring_experience


### `8080`: DDev / Drupal

[Drupal](https://drupal.org) is avialable inside the GitPod, on port `8080`, using [Composer 2](https://getcomposer.org/) and [DDev](https://ddev.readthedocs.io/).

Drupal is installed with TomeSync, and all content and configuration is stored in this repository.

To login to the Drupal, run the following command from within the `/drupal` directory:

```sh
ddev drush uli
```

### `3000`: Nuxt / Druxt

A [Nuxt](https://nuxtjs.org) / [DruxtSite](https://site.druxtjs.org) frontend instance is running on port `3000`, installed via [Yarn](https://yarnpkg.com/).

The site is setup with the [TailwindCSS](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/).

To start the server, run the following command from within the `/nuxt` directory:

```sh
yarn dev
```


### `3003`: Nuxt / Storybook

[Storybook](https://storybook.js.org/) is running inside the Nuxt codebase on port `3003`, via the [@nuxtjs/storybook](https://storybook.nuxtjs.org/) module.

Zero-configuration, auto-generated stories are provided for some of the Druxt modules.

To start the server, run the following command from within the `/nuxt` directory:

```sh
yarn storybook
```

### `3030`: SlideV

[SlideV](https://sli.dev) is running on port `3030` for development of this presentations slide deck.

To start the server, run the following command from within the `/slidev` directory:

```sh
yarn dev
```
