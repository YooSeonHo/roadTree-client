'use client';

import RoadTreeLayout, {
  useRoadTreeStore,
} from '@/src/app/components/RoadmapPage/RoadTreeLayout';
import SideBar from '@/src/app/components/RoadmapPage/SideBar';

import { useSearchParams } from 'next/navigation';

export default function Roadmap() {
  const [searchParams] = useSearchParams();
  const { select } = useRoadTreeStore();

  const isFront =
    searchParams === undefined ? true : searchParams[0] === 'front';

  return (
    <div className="flex overflow-hidden h-5/6">
      <main
        className={
          'px-4 mx-auto max-w-screen-xl lg:px-6 flex flex-1 align-middle justify-centent flex-col grow transition-transform w-10'
        }
      >
        <RoadTreeLayout isFront={isFront} />
      </main>
      <div
        id="default-sidebar"
        className={
          'top-0 right-0 z-40 w-96 h-full shrink-0 transition-transform bg-gray-200 border-l border-gray-200 overflow-y-scroll scrollbar-hide'
        }
        aria-label="Sidenav"
      >
        <div className="px-3 py-5 border-gray-200">
          <SideBar />
        </div>
      </div>
    </div>
  );
}
