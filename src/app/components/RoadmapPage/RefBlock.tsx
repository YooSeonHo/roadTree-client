import { reference } from '@/public/RoadTreeData';
import Image from 'next/image';
import { Dropdown } from 'flowbite-react';
import StudyDropMenu from './StudyDropMenu';

export default function RefBlock(props: { refdata: reference }) {
  const refdata: reference = props.refdata;
  const gradelist: string[] = ['초급', '초중급', '중급', '중고급', '고급'];
  const gradeColor: string[] = [
    'bg-green-100',
    'bg-green-200',
    'bg-green-300',
    'bg-green-400',
    'bg-green-500',
  ];
  return (
    <div className="flex items-center h-full p-2 cursor-pointer hover:bg-gray-200">
      <Image
        src="book.svg"
        alt="book"
        width={14}
        height={14}
        className="mr-3 w-14 h-14"
      ></Image>
      <div className="flex-grow w-32 h-14">
        <div className="flex flex-col items-start">
          <div
            className={
              'border px-2 rounded-md border-gray1 text-xs text-gray1 ' +
              gradeColor[refdata.grade]
            }
          >
            {gradelist[refdata.grade]}
          </div>
          <div className="text-sm font-semibold text-gray-600">
            {refdata.title}
          </div>
          <div className="text-xs text-gray1">
            {refdata.amount} | {refdata.price} | {refdata.category}
          </div>
        </div>
      </div>
      <div className="p-1 mt-auto">
        <StudyDropMenu />
      </div>
    </div>
  );
}