import React, { useEffect, useState } from 'react';
import Line from '../Line';
import Sponsor from '../Sponsor';
import { BsThreeDots } from 'react-icons/bs';
import { BiVideoPlus } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import Person from '../persons/Person';
import ButtonCircle from '../ButtonCircle';
import { getUsers } from '../../endpoint';
import PersonSkeleton from '../persons/PersonSkeleton';

const AsideRight = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const icons = [
    { icon: BiVideoPlus },
    { icon: AiOutlineSearch },
    { icon: BsThreeDots }
  ];

  useEffect(() => {
    setLoading(true);
    getUsers()
      .then((users) => {
        setLoading(false);
        setUsers(users);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  return (
    <aside className="px-2 col-span-1 overflow-y-auto h-screen pt-2 pb-16 sticky top-[56px]">
      <div className="pl-8 flex flex-col flex-wrap">
        <h5 className="font-semibold pt-3 text-[17px] mb-[6px] pl-2">
          Bersponsor
        </h5>
        <Sponsor />
        <Sponsor />
        <Line />

        <div className="box-between py-3">
          <div>
            <h1 className="font-semibold text-gray-500 px-2">Kontak</h1>
          </div>
          {/* icons */}
          <div className="box-center gap-2 text-gray-500">
            {icons.map((icon) => (
              <ButtonCircle
                key={icon.icon}
                size="w-[32px] h-[32px] p-1"
                background="bg-transparent hover:bg-gray-200">
                <icon.icon size={20} />
              </ButtonCircle>
            ))}
          </div>
        </div>

        {/* kontak */}
        <div>
          {users.map((user) =>
            loading ? (
              <PersonSkeleton />
            ) : (
              <Person key={user.id} id={user.id} name={user.name} />
            )
          )}
        </div>
      </div>
    </aside>
  );
};

export default AsideRight;
