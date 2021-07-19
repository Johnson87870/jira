import React from "react";
import { User } from "screens/models/user.interface";

interface SearchPanel {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchPanel["param"]) => void;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const SearchPanel = ({ users, param, setParam }: SearchPanel) => {
  return (
    <form action="">
      <div>
        <input
          type="text"
          value={param.name}
          onChange={(evt) =>
            setParam({
              ...param,
              name: evt.target.value,
            })
          }
        />
        <select
          value={param.personId}
          onChange={(evt) =>
            setParam({
              ...param,
              personId: evt.target.value,
            })
          }
        >
          <option value={""}>负责人</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
