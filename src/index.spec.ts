import { createTraining, Mileage, Speed, Training } from ".";


it("Should create Training", function() {

  const day = new Date();
  const mileage: Mileage = {
    type: "MILEAGE",
    unit: "km",
    value: 10
  };
  const speed: Speed = {
    type: "SPEED",
    unit: "km/h",
    value: 15
  };

  const core = { mileage, speed };
  const comment: string = "";
  const idGenerator = (): string => "fb4122e3-71d9-4d28-8c14-50a090c99de4";

  const trainingPlan = {
    save: jest.fn()
  };


  const training: Training = {
    id: "fb4122e3-71d9-4d28-8c14-50a090c99de4",
    core,
    day,
    comment
  };


  expect(createTraining(idGenerator, core, day, comment, trainingPlan)).toEqual(training);
  expect(trainingPlan.save).toHaveBeenCalledWith(training);
});
