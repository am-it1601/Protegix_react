const ProfileCard = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
      <div className="h-[350px] overflow-hidden shadow rounded-lg border flex items-center justify-center flex-col gap-y-5">
        <div className="h-[200px] w-[200px] rounded-full overflow-hidden object-cover flex items-center justify-center">
          <img src={'/userImg.png'} alt="user img" />
        </div>
      </div>
      <div className="h-[350px] rounded-lg  lg:col-span-2">
        <div className="bg-white overflow-hidden shadow rounded-lg border h-full">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-xl leading-6 font-medium text-gray-900">My Profile</h3>
            <p className="mt-1 max-w-md text-sm text-gray-500">This is some information about the user.</p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0 ">
            <div className="sm:divide-y sm:divide-gray-200 h-full">
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <span className="text-sm font-medium text-gray-500">First name</span>
                <span className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">sumit</span>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <span className="text-sm font-medium text-gray-500">Last name</span>
                <span className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">singh</span>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <span className="text-sm font-medium text-gray-500">Email aspanress</span>
                <span className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">johndoe@example.com</span>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <span className="text-sm font-medium text-gray-500">Password</span>
                <span className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">(123) 456-7890</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
