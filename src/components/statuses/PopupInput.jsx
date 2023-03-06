import React, { useState } from 'react';
import Card from '../Card';
import Line from '../Line';
import { IoMdGlobe } from 'react-icons/io';
import { FaCaretDown } from 'react-icons/fa';
import { GrFormClose } from 'react-icons/gr';
import { addPost } from '../../endpoint';

const PopupInput = (props) => {
  const { close } = props;
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [showClose, setShowClose] = useState(false);

  const statusHendler = (e) => {
    setStatus(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    addPost(status)
      .then((status) => {
        setLoading(false);
        setShowClose(true);
        console.log(status);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <>
      <div
        onClick={close}
        className="fixed box-center px-8 inset-0 bg-gray-200/70 backdrop-blur-[3px] z-50"
      />
      <Card width="w-full fixed top-[50%] -translate-y-[50%] max-w-lg z-50">
        {/* close */}
        {showClose && (
          <div className="absolute box-center inset-0 bg-gray-200/50 backdrop-blur-sm z-40">
            <div className="bg-white py-2 px-4 rounded-lg shadow-md flex flex-col justify-center">
              <h1 className="mb-3 text-green-500 font-semibold">
                Status has been updated.
              </h1>
              <button
                onClick={close}
                className="bg-blue-500 text-white font-semibold py-1 px-2 rounded-md">
                Oke
              </button>
            </div>
          </div>
        )}
        <Card.Title>
          <h1 className="text-center font-bold text-xl w-full py-2">
            Buat Postingan
          </h1>
          {/* close btn */}
          <button
            onClick={close}
            className="absolute top-[50%] -translate-y-[50%] right-4 bg-gray-200 hover:bg-gray-300 rounded-full">
            <GrFormClose size={30} />
          </button>
        </Card.Title>
        <Line />
        <form onSubmit={submit}>
          <Card.Body>
            <div className="box-equel gap-2 mt-3">
              <img
                src="https://picsum.photos/100/100?random=1"
                alt="Profile-image"
                className="w-[40px] h-[40px] rounded-full"
              />
              <div>
                <p className="text-base font-semibold">M. Fahrur Rizal</p>
                <button className="box-between gap-1 text-sm font-semibold py-[2px] px-[6px] bg-gray-200 rounded-md">
                  <IoMdGlobe />
                  Public
                  <FaCaretDown />
                </button>
              </div>
            </div>

            <div>
              <textarea
                onChange={statusHendler}
                name="status"
                id="status"
                className="w-full mt-3 h-24 text-xl outline-none border-none resize-none"
                autoFocus
                placeholder="Apa yang Anda pikirkan, Rizal?"></textarea>
            </div>
          </Card.Body>
          <Card.Footer>
            {!showClose && (
              <button
                className={`w-full ${
                  status === ''
                    ? 'bg-gray-200 text-gray-300 cursor-not-allowed'
                    : 'bg-blue-500 hover:bg-blue-600'
                }  text-gray-50 rounded-lg py-[6px] px-[12px] box-center`}>
                {loading ? <div>Loading...</div> : <span>Kirim</span>}
              </button>
            )}
          </Card.Footer>
        </form>
      </Card>
    </>
  );
};

export default PopupInput;
