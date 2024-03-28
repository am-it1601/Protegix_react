import { useCompanyInfo } from '@/services/query/company-info.query';
import { PersonIcon } from '@radix-ui/react-icons';

const RegisterCard = () => {
  const { data, isLoading, error } = useCompanyInfo();
  return (
    <>
      <div className="flex gap-4 items-center">
        <div className="p-5 shadow rounded-lg border w-[300px] h-[130px] flex flex-col gap-y-5">
          <div className="flex items-center justify-between">
            <p className="mt-1 max-w-md text-sm text-gray-900 font p-medium-16 ">Registered Users</p>
            <span>
              <PersonIcon className="h-5 w-5" />
            </span>
          </div>
          <div>
            <span className="p-bold-24">+{data?.data?.registeredUsers}</span>
          </div>
        </div>

        <div className="p-5 shadow rounded-lg border w-[300px] h-[130px] flex flex-col gap-y-5">
          <div className="flex items-center justify-between">
            <p className="mt-1 max-w-md text-sm text-gray-900 font p-medium-16 ">License Count</p>
            <span>
              <PersonIcon className="h-5 w-5" />
            </span>
          </div>
          <div>
            <span className="p-bold-24">+{data?.data?.remainingLicense}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterCard;
