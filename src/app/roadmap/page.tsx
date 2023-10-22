"use client";

import { StartBtn } from "@/components/RoadmapPage/StartBtn";
import { track } from "@amplitude/analytics-browser";
import { useEffect } from "react";

export default function Home() {
  const title = ["프론트엔드 개발자", "백엔드 개발자", "인공지능 개발자"];
  const content = [
    "프론트엔드 개발자는 웹 애플리케이션을 \n 사용자가 편하게 이용할 수 있도록 '외관'과 '동작'을 담당하고 개발합니다. HTML, CSS, JavaScript 등의 언어를 이용해 만드는 역할을 합니다.",
    "백엔드 개발자는 웹 애플리케이션에서 사용자가 보지 못하는 뒷단 부분을 개발합니다. 사람이 몰려 사이트에 접속되지 않는 상황에서도 서버가 죽지 않고 잘 동작하도록 하는 것이 백엔드 개발자의 역할입니다.",
    "AI 개발자는 현실 세계의 문제를 해결하고 예측하기 위해 인공지능 시스템의 알고리즘을 활용하여 기계 학습, 자연어 처리, 컴퓨터 비전등을 개발하고 데이터를 활용하여 시스템을 훈련시키는 전문가입니다.",
  ];
  const detailcontent = [
    [
      "웹 디자인 구현 및 UX 개선",
      "브라우저 및 기기 호환성 유지",
      "웹 애플리케이션 개발 및 성능 최적화",
    ],
    ["서버 개발 및 성능 최적화", "데이터베이스 관리", "API 개발"],
    ["데이터 전처리", "AI 모델 개발 및 튜닝", "AI 모델 평가 및 배포"],
  ];

  useEffect(() => {
    track("enter_roadmap_select_page");
  }, []);

  return (
    <main className="flex flex-col align-middle justify-centent  h-[calc(100vh-72px)]">
      <section className="mt-auto mb-auto bg-white ">
        <div className="max-w-screen-xl px-4 pt-4 mx-auto lg:px-6">
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {title.map((title, index) => {
              return (
                <div
                  key={"startBox_" + index}
                  className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow xl:p-8 "
                >
                  <h1 className="mb-4 text-2xl font-semibold">{title}</h1>
                  <p className="font-light text-gray-500 sm:text-lg">
                    {content[index]}
                  </p>
                  <div className="my-6 " />
                  <ul role="list" className="mb-8 space-y-4 text-left">
                    {detailcontent[index].map((detail, idx) => {
                      return (
                        <li
                          key={"home_description_" + idx}
                          className="flex items-center space-x-3"
                        >
                          <svg
                            className="flex-shrink-0 w-5 h-5 text-main "
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span>{detail}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <StartBtn index={index} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* <Banner title="준비 중" /> */}
    </main>
  );
}
