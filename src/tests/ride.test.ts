import request from 'supertest';
import App from '@app';
import { RideDto } from '@dtos/ride.dto';
import RideRoute from '@routes/ride.route';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Rides', () => {
  describe('[POST] /ride', () => {
    it('response statusCode 200 / normal price', async () => {
      const rideData: RideDto = {
        distance: 2,
        startTime: '2020-06-19T14:01:17.031',
      };
      const rideRoute = new RideRoute();
      const app = new App([rideRoute]);
      return request(app.getServer()).post(`${rideRoute.path}`).send(rideData).expect(200, { price: 6, message: 'OK' });
    });

    it('response statusCode 200 / price at traffic jam', async () => {
      const rideData: RideDto = {
        distance: 2,
        startTime: '2020-06-19T18:01:17.031',
      };
      const rideRoute = new RideRoute();
      const app = new App([rideRoute]);
      return request(app.getServer()).post(`${rideRoute.path}`).send(rideData).expect(200, { price: 7, message: 'OK' });
    });

    it('response statusCode 200 / price at inconvinient time', async () => {
      const rideData: RideDto = {
        distance: 2,
        startTime: '2020-06-19T01:01:17.031',
      };
      const rideRoute = new RideRoute();
      const app = new App([rideRoute]);
      return request(app.getServer()).post(`${rideRoute.path}`).send(rideData).expect(200, { price: 6.5, message: 'OK' });
    });
  });
});
