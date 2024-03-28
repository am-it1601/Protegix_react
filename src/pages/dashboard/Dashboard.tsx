import LicenseCount from '@/components/card/LicenceCount';
import RegisterCard from '@/components/card/RegisterCard';
import { useCompanyInfo } from '@/services';

const Dashboard = () => {
  const { data, isLoading, error } = useCompanyInfo();
  const { registeredUsers, remainingLicense, totalLicense } = data?.data || {};
  return (
    <>
      <div className="grid grid-cols-6 grid-rows-2 gap-4">
        <div className="col-span-2 row-span-2">{registeredUsers && <RegisterCard registeredUsers={registeredUsers} />}</div>
        <div className="col-span-2 row-span-2 col-start-3">
          {remainingLicense && totalLicense && <LicenseCount remainingLicense={remainingLicense} totalLicense={totalLicense} />}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
