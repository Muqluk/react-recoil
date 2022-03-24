import Chance from 'chance';

const chance = new Chance();

const institutions = (records) => {
  const arr = [];
  for (var i = 0; i < records; i++) {
    arr.push({
      institutionId: i,
      institutionName: chance.company(),
    });
  }

  return arr;
}


export const getHeiInstitutions = () => institutions(chance.integer({ min: 2, max: 15 })); // this is sort of a mock API call.