import React from 'react';
import {
  useTable
} from 'react-table';

import { useHeiInstitutions } from './hei-institution';

const HeiInstitutions = () => {
  const institutions = useHeiInstitutions();
  return (
    <div>
      HEI Institutions
    </div>
  );
};

export default HeiInstitutions;
