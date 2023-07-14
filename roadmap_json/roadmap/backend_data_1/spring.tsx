import { RoadData } from '@/roadmap_json/roadmap_data';
import { spring_db_data_private } from '@/roadmap_json/roadmap/backend_data_1/spring_2/DB';
import { spring_mvc_data_private } from '@/roadmap_json/roadmap/backend_data_1/spring_2/MVC';
import { spring_junit_data_private } from '@/roadmap_json/roadmap/backend_data_1/spring_2/JUnit';
import { spring_security_data_private } from '@/roadmap_json/roadmap/backend_data_1/spring_2/Security';
import { spring_JPA_data_private } from '@/roadmap_json/roadmap/backend_data_1/spring_2/JPA';

export const back_spring_data_private: RoadData = {
  nid: 4,
  name: 'springboot',
  description:
    'Spring은 java기반 웹 프레임워크로, 오리지날 Java를 최대한 활용하고 java가 지향하는 OOP설계에 맞춰 좋은 코드를 짤수 있게 도와주는 오픈소스 프레임워크입니다. 현재 국내에서 제일 많이 사용하는 프레임워크이기도 합니다. 참고로 springboot는 spring의 복잡한 환경설정을 개선하고자 나타났습니다.',
  ref: [
    {
      uuid: '31',
      title:
        '스프링 입문 - 코드로 배우는 스프링 부트, 웹 MVC, DB 접근 기술(김영한)',
      url: 'https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-%EC%9E%85%EB%AC%B8-%EC%8A%A4%ED%94%84%EB%A7%81%EB%B6%80%ED%8A%B8',
      grade: 1,
      amount: '총 5시간 21분',
      price: 0,
      category: '인프런',
    },
    {
      uuid: '32',
      title: '스프링 핵심 원리 - 기본편(김영한)',
      url: 'https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-%ED%95%B5%EC%8B%AC-%EC%9B%90%EB%A6%AC-%EA%B8%B0%EB%B3%B8%ED%8E%B8',
      grade: 1,
      amount: '총 12시간 5분',
      price: 88000,
      category: '인프런',
    },
    {
      uuid: '33',
      title: '예제로 배우는 스프링 입문 (개정판, 백기선)',
      url: 'https://www.inflearn.com/course/spring_revised_edition#curriculum',
      grade: 1,
      amount: '총 2시간 26분',
      price: 0,
      category: '인프런',
    },
    {
      uuid: '34',
      title: '초보 웹 개발자를 위한 스프링5 프로그래밍 입문(최범균)',
      url: 'https://www.yes24.com/Product/Goods/62268795',
      grade: 1,
      amount: '총 492쪽',
      price: 26500,
      category: '도서',
    },
    {
      uuid: '35',
      title:
        '백견불여일타 이젠 프로젝트다! 스프링 부트 쇼핑몰 프로젝트 with JPA',
      url: 'https://www.yes24.com/Product/Goods/103453774',
      grade: 0,
      amount: '총 492쪽',
      price: 30000,
      category: '도서',
    },
    {
      uuid: '36',
      title: '코드로 배우는 스프링 웹 프로젝트 현업 개발을 위한 단계별 실습서',
      url: 'https://www.yes24.com/Product/Goods/62268795',
      grade: 2,
      amount: '총 760쪽',
      price: 38000,
      category: '도서',
    },
    {
      uuid: '37',
      title:
        '[깃헙]토비의 스프링 3.1 서적과 백기선님의 강좌를 토대로 스프링의 핵심 기술을 정리',
      url: 'https://github.com/pjok1122/Spring-Summary/tree/master',
      grade: 2,
      amount: '총 760쪽',
      price: 38000,
      category: 'posting',
    },
    {
      uuid: '38',
      title: '토비의 스프링 부트 - 이해와 원리(토비)',
      url: 'https://www.inflearn.com/course/%ED%86%A0%EB%B9%84-%EC%8A%A4%ED%94%84%EB%A7%81%EB%B6%80%ED%8A%B8-%EC%9D%B4%ED%95%B4%EC%99%80%EC%9B%90%EB%A6%AC',
      grade: 3,
      amount: '총 11시간 6분',
      price: 99000,
      category: '인프런',
    },
    {
      uuid: '39',
      title: '토비의 스프링 3.1 세트',
      url: 'https://www.yes24.com/Product/Goods/7516911',
      grade: 4,
      amount: '총 1720쪽',
      price: 75000,
      category: '도서',
    },
    {
      uuid: '40',
      title:
        '스프링 인 액션, 스프링 5의 강력한 기능과 생산성을 활용한 웹 애플리케이션 개발',
      url: 'https://product.kyobobook.co.kr/detail/S000001942493',
      grade: 3,
      amount: '총 700쪽',
      price: 35000,
      category: '도서',
    },
    {
      uuid: '41',
      title:
        '[깃헙]토비의 스프링 3.1 서적과 백기선님의 강좌를 토대로 스프링의 핵심 기술을 정리',
      url: 'https://github.com/pjok1122/Spring-Summary/tree/master',
      grade: 3,
      amount: '총 700쪽',
      price: 38000,
      category: 'posting',
    },
    {
      uuid: '42',
      title: '스프링 부트와 AWS로 혼자 구현하는 웹 서비스(향로)',
      url: 'https://product.kyobobook.co.kr/detail/S000001019679',
      grade: 4,
      amount: '총 416쪽',
      price: 22000,
      category: '도서',
    },
  ],
  children: [
    spring_db_data_private,
    spring_mvc_data_private,
    spring_junit_data_private,
    spring_security_data_private,
    spring_JPA_data_private,
  ],
};
