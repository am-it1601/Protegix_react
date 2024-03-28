import { PersonIcon } from '@radix-ui/react-icons';
import React from 'react';

interface LicenseCountProps {
  remainingLicense: number;
  totalLicense: number;
}

const LicenseCount: React.FC<LicenseCountProps> = ({ remainingLicense, totalLicense }) => {
  return (
    <div className="p-5 shadow rounded-lg border flex flex-col gap-y-5">
      <div className="flex items-center justify-between">
        <p className="mt-1 max-w-md text-sm text-gray-900 font p-medium-16">License Count</p>
        <span>
          <PersonIcon className="h-5 w-5" />
        </span>
      </div>
      <div className="flex flex-col">
        <span className="p-bold-24">{remainingLicense}</span>
        <span className="text-sm">{totalLicense} Total License</span>
      </div>
    </div>
  );
};

export default LicenseCount;
