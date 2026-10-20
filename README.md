# Lovable Website Launch

develop a website for the organization

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/5a5048cc-6f07-4347-a978-62c5797b7388).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Deploy to Coolify with Docker

This repository includes a Dockerfile for building and running the site as a
Node.js server. In Coolify, create a service from this Git repository and use:

- **Build pack:** Dockerfile
- **Dockerfile location:** `/Dockerfile`
- **Base directory / build context:** `/`
- **Application port:** `3000`
- **Domain:** `https://wyrsake.org`

The image builds the Nitro server with its Node.js preset and starts it on
`0.0.0.0:3000`. No runtime environment variables are required for the site.
After creating the service, point the domain's DNS A record (`@`) to your VPS
public IPv4 address. Add a `www` DNS record and domain in Coolify too if you
want `www.wyrsake.org` to serve the site. Enable HTTPS in Coolify for the
configured domain.
