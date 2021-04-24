import { Router } from 'express';
import RideController from '@controllers/ride.controller';
import { RideDto } from '@dtos/ride.dto';
import Route from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class UsersRoute implements Route {
  public path = '/ride';
  public router = Router();
  public rideController = new RideController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, validationMiddleware(RideDto, 'body'), this.rideController.getPrice);
  }
}

export default UsersRoute;
