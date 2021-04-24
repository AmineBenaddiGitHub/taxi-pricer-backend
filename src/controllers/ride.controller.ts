import { NextFunction, Request, Response } from 'express';
import { RideDto } from '@dtos/ride.dto';
import RideService from '@services/ride.service';

class RideController {
  public rideService = new RideService();

  public getPrice = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const ride: RideDto = req.body;
      const price = this.rideService.calculatePrice(ride);
      res.status(200).json({ price, message: 'OK' });
    } catch (error) {
      next(error);
    }
  };
}

export default RideController;
