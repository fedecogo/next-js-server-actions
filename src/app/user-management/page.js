import { fetchUsersAction } from "@/actions";
import AddNewUser from "@/components/add-new-user/index";
import SingleUserCard from "@/components/single-user-card";
import UserState from "@/context";

async function UserManagement() {
  const getListOfUsers = await fetchUsersAction();

  console.log(getListOfUsers);

  return ( <UserState>
    <div className="p-20 max-w-6xl">
      <div className="flex justify-between">
        <h1>User Management</h1>
       
         <AddNewUser />
       
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {getListOfUsers.data &&
        getListOfUsers.data.length > 0 ? (
          getListOfUsers.data.map((userItem) => (
            <SingleUserCard user={userItem} />
          ))
        ) : (
          <h3>No users found! Please create one</h3>
        )}
      </div>
    </div> </UserState>
  );
}

export default UserManagement;