// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="pt-BR">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <title>Sílvia Seabra</title>
          <meta name="title" content="Sílvia Seabra" />
          <meta
            name="description"
            content="Olá, me chamo Sílvia e este é o meu curriculo."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://silviaaseabra.github.io/" />
          <meta property="og:title" content="Silvia Seabra" />
          <meta
            property="og:description"
            content="Olá, me chamo Sílvia e este é o meu curriculo."
          />
          <meta
            property="og:image"
            content="https://github.com/silviaaseabra.png"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://silviaaseabra.github.io/"
          />
          <meta property="twitter:title" content="Sílvia Seabra" />
          <meta
            property="twitter:description"
            content="Olá, me chamo Sílvia e este é o meu curriculo."
          />
          <meta
            property="twitter:image"
            content="https://github.com/silviaaseabra.png"
          />

          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
