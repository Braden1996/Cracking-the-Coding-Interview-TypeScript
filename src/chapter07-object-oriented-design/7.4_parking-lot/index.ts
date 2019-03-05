enum VehicleTypes {
  car = 'car',
  motorbike = 'motorbike',
  bus = 'bus',
}

class Vehicle {
  constructor(readonly type: VehicleTypes, readonly licensePlate: string) {}
}

class ParkingLotLevel {
  constructor(
    private vehicleCapacity: { [vehicleType in VehicleTypes]: number },
    private vehicleStorage: { [vehicleType in VehicleTypes]: Vehicle[] },
  ) {}

  hasSpaceForVehicleType = (vehicleType: Vehicle['type']) =>
    this.vehicleStorage[vehicleType].length < this.vehicleCapacity[vehicleType];

  parkVehicle(vehicle: Vehicle) {
    if (!this.hasSpaceForVehicleType(vehicle.type)) {
      throw new Error(`No space for vehicle of type ${vehicle.type}`);
    }

    this.vehicleStorage[vehicle.type].push(vehicle);
  }

  unparkVehicle(vehicle: Vehicle) {
    if (!this.vehicleStorage[vehicle.type].includes(vehicle)) {
      throw new Error(
        `Vehicle with license ${vehicle.licensePlate} is not parked here!`,
      );
    }

    this.vehicleStorage[vehicle.type] = this.vehicleStorage[
      vehicle.type
    ].filter(v => v !== vehicle);

    return vehicle;
  }
}

class ParkingLot {
  private levels: ParkingLotLevel[] = [];

  hasSpaceForVehicleType = (vehicleType: Vehicle['type']) =>
    !!this.getAvailiableLevel(vehicleType);

  getAvailiableLevel = (vehicleType: Vehicle['type']) =>
    this.levels.find(l => l.hasSpaceForVehicleType(vehicleType));
}
