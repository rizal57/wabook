import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import ButtonCircle from '../ButtonCircle';

const HistoryItem = forwardRef((props, ref) => {
  return (
    <div className="box-between w-full relative hover:bg-gray-200 p-2 rounded-lg">
      <div className="box-equel gap-2 pointer-events-none relative z-10">
        <img
          src="https://picsum.photos/200"
          alt="profileImage"
          className="max-w-[36px] max-h-[36px] rounded-full"
        />
        <p>React JS Indonesia</p>
      </div>

      <ButtonCircle
        size="w-[30px] h-[30px]"
        background="bg-transparent hover:bg-gray-300 z-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="currentColor"
          className="bi bi-x-lg"
          viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
      </ButtonCircle>

      <Link
        to="/history"
        className="absolute inset-x-0 w-full h-full rounded-lg"
      />
    </div>
  );
});

export default HistoryItem;
