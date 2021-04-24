import { RideDto } from '@dtos/ride.dto';

class RideService {
  public calculatePrice(data: RideDto): number {
    const startHour = new Date(data.startTime).getHours();

    const extraFees = startHour >= 16 && startHour <= 19 ? 1 : startHour >= 20 || startHour <= 6 ? 0.5 : 0;
    return 1 + extraFees + data.distance * 5 * 0.5;
  }
}

export default RideService;
