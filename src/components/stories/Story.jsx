import clsx from 'clsx';
import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { BiMoviePlay } from 'react-icons/bi';
import { FaBookOpen } from 'react-icons/fa';
import Card from '../Card';
import Line from '../Line';
import CreateStory from './CreateStory';
import StoryItem from './StoryItem';

const Story = () => {
  const [state, setState] = useState('Cerita');

  return (
    <div className="story">
      <Card>
        <Card.Title>
          <button
            onClick={() => setState('Cerita')}
            className={clsx(
              state === 'Cerita' && 'active',
              'box-center gap-2 p-3 w-full rounded-md hover:bg-gray-200 text-gray-500 font-semibold'
            )}>
            <FaBookOpen size={22} />
            Cerita
          </button>
          <button
            onClick={() => setState('Reels')}
            className={clsx(
              state === 'Reels' && 'active',
              'box-center gap-2 p-3 w-full rounded-md hover:bg-gray-200 text-gray-500 font-semibold'
            )}>
            <BiMoviePlay size={24} />
            Reels
          </button>
        </Card.Title>
        <Line padding="p-0" margin="m-0" />
        <Card.Body>
          <div className="w-full my-[10px]">
            <div className="grid grid-cols-4 gap-x-2 relative">
              {state === 'Cerita' ? (
                <>
                  <CreateStory
                    url="/stories/create"
                    profileImage="https://picsum.photos/200"
                  />
                  <StoryItem
                    text={'PUBG MOBILE'}
                    state={state}
                    storyUrl="https://picsum.photos/200"
                    profileImage={'https://picsum.photos/200'}
                  />
                  <StoryItem
                    text={'Citra Krisma N.'}
                    state={state}
                    storyUrl="https://picsum.photos/200"
                    profileImage={'https://picsum.photos/200'}
                  />
                  <StoryItem
                    text={'CODM'}
                    state={state}
                    storyUrl="https://picsum.photos/200"
                    profileImage={'https://picsum.photos/200'}
                  />
                </>
              ) : (
                <StoryItem
                  text={'4'}
                  state={state}
                  storyUrl="https://picsum.photos/200"
                  profileImage={'https://picsum.photos/200'}
                />
              )}

              {/* left arrow */}
              {/* <button className="absolute top-[50%] -translate-y-[50%] left-4 w-[45px] h-[45px] box-center rounded-full bg-gray-50 hover:bg-gray-100 z-50">
                <AiOutlineLeft />
              </button> */}
              {/* right arrow */}
              <button className="absolute top-[50%] -translate-y-[50%] right-4 w-[45px] h-[45px] box-center rounded-full bg-gray-50 hover:bg-gray-100 z-50">
                <AiOutlineRight />
              </button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Story;
