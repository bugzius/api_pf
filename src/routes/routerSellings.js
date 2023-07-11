const { Router } = require("express");
const routeSellingsTotalHandler = require("../handlers/routeSellingsTotalHandler");
const routeGetSellingTotalHandler = require("../handlers/routeGetSellingTotalHandler");

const routerSellings = Router();

routerSellings.get('/', routeSellingsTotalHandler);
routerSellings.get('/:IdSelling', routeGetSellingTotalHandler);

module.exports = routerSellings;