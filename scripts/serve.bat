WEB_SERVER_PORT_TEST=8200
WEB_SERVER_HOST_TEST=localhost

yarn run build
yarn run http-server dist/dist/ -p %WEB_SERVER_PORT_TEST% --cors
