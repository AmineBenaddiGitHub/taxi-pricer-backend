process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import App from '@app';
import IndexRoute from '@routes/index.route';
import RideRoute from '@routes/ride.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([new IndexRoute(), new RideRoute()]);

app.listen();
