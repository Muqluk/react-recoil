import { useParams } from 'react-router';
import { atom, useRecoilValue, selectorFamily } from 'recoil';
import { getHeiInstitutions } from 'src/api/hei-institutions';

//#region state & shared

const heiAtomFam = atom({
  key: 'hei',
  default: getHeiInstitutions(),
});

const HeiInstitutionsSelector = selectorFamily({
  key: 'hei/institution',
  get: (id) => ({ get }) => get(heiAtomFam).find((hei) => hei.institutionId === id),
});

export const useHeiInstitutions = () => useRecoilValue(heiAtomFam);
export const useHeiInstitutionById = (institutionId) => useRecoilValue(HeiInstitutionsSelector(institutionId));

export const useHeiInstitutionIdParam = () => {
  const { institutionId } = useParams();
  return parseInt(institutionId);
}

//#endregion

