import React from 'react';
import Card from '../Card';
import { BiLike } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';
import { FaRegCommentAlt } from 'react-icons/fa';
import { RiShareForwardLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import ButtonCircle from '../ButtonCircle';
import Line from '../Line';

const BoxStatus = () => {
  return (
    <Card>
      <Card.Title>
        {/* left item */}
        <div className="box-between w-full">
          <div className="flex gap-2">
            <Link to="/profile" className="flex-shrink-0 group">
              <img
                src="https://picsum.photos/200"
                alt="profileImage"
                className="object-cover w-[40px] h-[40px] rounded-full group-hover:brightness-[.9]"
              />
            </Link>
            <div className="flex flex-col">
              <h2 className="font-semibold">M. Fahrur Rizal</h2>
              <span className="text-gray-400 text-sm">5 minutes ago</span>
            </div>
          </div>
          <div>
            <ButtonCircle
              size="w-[35px] h-[35px] p-1"
              background="bg-transparent hover:bg-gray-200">
              <BsThreeDots size={20} />
            </ButtonCircle>
          </div>
        </div>
      </Card.Title>
      <Card.Body>
        <p className="mt-2 text-gray-800 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
          quisquam quos aliquam minus illum reiciendis tenetur repellat omnis
          impedit aperiam.
        </p>
      </Card.Body>
      <Line padding="px-0" />
      <Card.Footer>
        <div className="box-between gap-2 pt-1">
          <button className="box-center gap-2 text-gray-600 font-semibold py-2 px-4 w-full rounded-lg hover:bg-gray-200">
            <BiLike size={20} />
            Like
          </button>
          <button className="box-center gap-2 text-gray-600 font-semibold py-2 px-4 w-full rounded-lg hover:bg-gray-200">
            <FaRegCommentAlt size={15} />
            Komentar
          </button>
          <button className="box-center gap-2 text-gray-600 font-semibold py-2 px-4 w-full rounded-lg hover:bg-gray-200">
            <RiShareForwardLine size={20} />
            Bagikan
          </button>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default BoxStatus;
