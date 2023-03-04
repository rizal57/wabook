import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import HistoryItem from './HistoryItem';

const SearchHistory = forwardRef((props, ref) => {
  return (
    <div className="absolute w-full top-0 left-0 bg-white rounded-lg shadow-md p-3 pt-[56px]">
      <div className="box-between mt-2 mb-3">
        <h1 className="text-lg font-semibold">Pencarian terbaru</h1>
        <Link
          to="/edit-history"
          className="py-1 px-2 rounded-md text-blue-500 hover:bg-gray-100">
          Edit
        </Link>
      </div>

      {/* history item */}
      <HistoryItem />
      <HistoryItem />
      <HistoryItem />
      <HistoryItem />
    </div>
  );
});

export default SearchHistory;
