import { PersonIcon } from '@radix-ui/react-icons';

const RegisterCard = ({ registeredUsers }: { registeredUsers: number }) => {
  return (
    <>
      <div className="p-5 shadow rounded-lg border flex flex-col gap-y-5">
        <div className="flex items-center justify-between">
          <p className="mt-1 max-w-md text-sm text-gray-900 font p-medium-16 ">Registered Users</p>
          <span>
            <PersonIcon className="h-5 w-5" />
          </span>
        </div>
        <div>
          <span className="p-bold-24">+{registeredUsers}</span>
        </div>
      </div>
    </>
  );
};

export default RegisterCard;
