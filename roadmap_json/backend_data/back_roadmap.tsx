import { RoadData } from '@/roadmap_json/roadmap_data';
import { hardware_os_data_private } from './CS/hardware_os';
import { network_data_private } from './CS/network';
import { mysql_data_private } from './db/mysql';

export const roadmap_back_private: RoadData = {
  nid: 1,
  depth: 0,
  name: 'Back-end',
  children: [
    {
      nid: 1,
      depth: 1,
      name: 'computer_science',
      description:
        '보통 컴퓨터과학분야의 내용들은 컴퓨터가 어떻게 변화했는지 역사를 가지고 있습니다. 그리고 그 역사안에는 어떤 문제가 발생했고, 그 문제를 어떻게 해결했는지를 가지고 있기때문에, 문제 해결능력을 키울 수 있습니다. 또한, 새로운 기술이 나오더라도 결국 핵심은 컴퓨터과학을 기반으로 진화하기때문에 본인의 수용력도 키울 수 있어 좋습니다.',
      ref: [
        {
          uuid: 1,
          title: '혼자공부하는 컴퓨터 구조+ 운영체제',
          url: 'https://www.youtube.com/playlist?list=PLVsNizTWUw7FCS83JhC1vflK8OcLRG0Hl',
          grade: 1,
          amount: '총 13시간43분',
          price: 28000,
          category: 'video, book',
        },
        {
          uuid: 2,
          title: 'CS50',
          url: 'https://www.boostcourse.org/cs112',
          grade: 0,
          amount: '',
          price: 0,
          category: 'video',
        },
        {
          uuid: 2,
          title: '면접을 위한 CS전공지식 노트',
          url: 'https://www.yes24.com/Product/Goods/108887922',
          grade: 1,
          amount: '총 292쪽',
          price: 24000,
          category: 'book',
        },
        {
          uuid: 3,
          title: '깃헙/연로그 면접 인터뷰',
          url: 'https://github.com/yeon-06/BE-interview',
          grade: 1,
          amount: '총 9챕터',
          price: 0,
          category: 'posting',
        },
        {
          uuid: 4,
          title: 'Tech Interview 블로그',
          url: 'https://gyoogle.dev/blog/',
          grade: 0,
          amount: '총 6챕터',
          price: 0,
          category: 'posting',
        },
      ],
      children: [network_data_private, hardware_os_data_private],
    },
    {
      nid: 2,
      depth: 1,
      name: 'java',
      description: '추천 소개글',
      ref: [
        {
          uuid: 0,
          title: '생활코딩java',
          url: 'https://www.youtube.com/playlist?list=PLuHgQVnccGMAIluRRVsC1e79ri-dwnBmR',
          grade: 0,
          amount: '총 17시간30분',
          price: 0,
          category: 'video',
        },
        {
          uuid: 1,
          title: '프로그래머스 java 입문',
          url: 'https://school.programmers.co.kr/learn/courses/5/5-%EB%AC%B4%EB%A3%8C-%EC%9E%90%EB%B0%94-%EC%9E%85%EB%AC%B8',
          grade: 0,
          amount: '총 17시간30분',
          price: 0,
          category: 'video',
        },
        {
          uuid: 2,
          title: '프로그래머스 java 심화',
          url: 'https://school.programmers.co.kr/learn/courses/9/9-%EC%9E%90%EB%B0%94-%EC%A4%91%EA%B8%89',
          grade: 1,
          amount: '총 17시간30분',
          price: 0,
          category: 'video',
        },
        {
          uuid: 3,
          title: 'java의 정석 : 기초편',
          url: 'https://www.yes24.com/Product/Goods/85632276',
          grade: 1,
          amount: '총 700쪽',
          price: 25000,
          category: 'book',
        },
        {
          uuid: 4,
          title: '이펙티브java',
          url: 'https://product.kyobobook.co.kr/detail/S000001033066',
          grade: 4,
          amount: '총 520쪽',
          price: 30000,
          category: 'book',
        },
        {
          uuid: 4,
          title: '이펙티브java',
          url: 'https://product.kyobobook.co.kr/detail/S000001033066',
          grade: 4,
          amount: '총 520쪽',
          price: 36000,
          category: 'video',
        },
        {
          uuid: 5,
          title: '점프 투 자바',
          url: 'https://wikidocs.net/book/31',
          grade: 1,
          amount: '',
          price: 0,
          category: 'posting',
        },
        {
          uuid: 6,
          title: 'TCP스쿨 java',
          url: 'http://tcpschool.com/java/intro',
          grade: 1,
          amount: '',
          price: 0,
          category: 'posting',
        },
        {
          uuid: 7,
          title: 'dev쿠마 java',
          url: 'https://www.devkuma.com/docs/java/',
          grade: 1,
          amount: '',
          price: 0,
          category: 'posting',
        },
        {
          uuid: 8,
          title: '나도코딩',
          url: 'https://www.youtube.com/watch?v=NQq0dOoEPUM',
          grade: 1,
          amount: '총 8시간40분',
          price: 30000,
          category: 'video',
        },
      ],
      // children: ['study'],
    },
    {
      nid: 3,
      depth: 1,
      name: 'database',
      description:
        '데이터베이스가 존재하기 이전에는 파일 시스템으로 데이터를 관리했습니다. 파일 시스템은 데이터를 저장, 삭제, 수정 등을 할 때 발생하는 데이터의 종속성, 중복성 무결성을 보장할 수 없습니다. 이러한 문제점을 해결하기 위해 등장한 것이 바로 데이터베이스입니다. 데이터베이스는 데이터를 통합하여 관리하고, 저장된 데이터를 공유할 수 있으며, 데이터의 무결성을 보장하고, 데이터의 중복을 제거하고, 데이터를 동시에 공유할 수 있습니다. 데이터베이스는 이러한 장점을 가지고 있기 때문에 현재의 시스템에서 가장 많이 사용되는 데이터 관리 시스템입니다.',
      ref: [
        {
          uuid: 0,
          title: 'Do it SQL 입문',
          url: 'https://www.youtube.com/playlist?list=PLG7te9eYUi7usbPInfbh24eE3lsbjGxRw',
          grade: 0,
          amount: '총 2시간23분',
          price: 0,
          category: 'video',
        },
        {
          uuid: 1,
          title: '칸 아카데미 SQL',
          url: 'https://ko.khanacademy.org/computing/computer-programming/sql?ref=blog.selectfromuser.com',
          grade: 1,
          amount: '총 37챕터',
          price: 0,
          category: 'posting',
        },
        {
          uuid: 2,
          title: '가장 쉬운 데이터베이스 설계 책',
          url: 'https://www.yes24.com/Product/goods/12191214?art_bl=7769257',
          grade: 0,
          amount: '총 453쪽',
          price: 27000,
          category: 'book',
        },
        {
          uuid: 3,
          title: '새로쓴 대용량 데이터베이스 솔루션 Vol.1 [ 개정판 ]',
          url: 'https://www.yes24.com/Product/Goods/1820583',
          grade: 3,
          amount: '총 634쪽',
          price: 45000,
          category: 'book',
        },
        {
          uuid: 4,
          title: 'W3Schools SQL',
          url: 'https://www.w3schools.com/sql/?ref=blog.selectfromuser.com',
          grade: 0,
          amount: '총 58챕터',
          price: 0,
          category: 'posting',
        },
        {
          uuid: 5,
          title: '손에 잡히는 10분 SQL',
          url: 'https://product.kyobobook.co.kr/detail/S000001033096',
          grade: 0,
          amount: '총 320쪽',
          price: 18000,
          category: 'book',
        },
        {
          uuid: 6,
          title: '데이터베이스를 지탱하는 기술',
          url: 'https://www.yes24.com/Product/goods/7957807?scode=032&OzSrank=7',
          grade: 0,
          amount: '총 368쪽',
          price: 25000,
          category: 'book',
        },
      ],
      children: [mysql_data_private], // 'mysql', 'oracle', 'mongodb'],
    },
    {
      nid: 4,
      depth: 1,
      name: 'springboot',
      description:
        'Spring은 java기반 웹 프레임워크로, 오리지날 Java를 최대한 활용하고 java가 지향하는 OOP설계에 맞춰 좋은 코드를 짤수 있게 도와주는 오픈소스 프레임워크입니다. 현재 국내에서 제일 많이 사용하는 프레임워크이기도 합니다. 참고로 springboot는 spring의 복잡한 환경설정을 개선하고자 나타났습니다.',
      ref: [
        {
          uuid: 0,
          title:
            '스프링 입문 - 코드로 배우는 스프링 부트, 웹 MVC, DB 접근 기술(김영한)',
          url: 'https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-%EC%9E%85%EB%AC%B8-%EC%8A%A4%ED%94%84%EB%A7%81%EB%B6%80%ED%8A%B8',
          grade: 1,
          amount: '총 5시간 21분',
          price: 0,
          category: 'video',
        },
        {
          uuid: 1,
          title: '스프링 핵심 원리 - 기본편(김영한)',
          url: 'https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-%ED%95%B5%EC%8B%AC-%EC%9B%90%EB%A6%AC-%EA%B8%B0%EB%B3%B8%ED%8E%B8',
          grade: 1,
          amount: '총 12시간 5분',
          price: 88000,
          category: 'video',
        },
        {
          uuid: 2,
          title: '예제로 배우는 스프링 입문 (개정판, 백기선)',
          url: 'https://www.inflearn.com/course/spring_revised_edition#curriculum',
          grade: 1,
          amount: '총 2시간 26분',
          price: 0,
          category: 'video',
        },
        {
          uuid: 4,
          title: '초보 웹 개발자를 위한 스프링5 프로그래밍 입문(최범균)',
          url: 'https://www.yes24.com/Product/Goods/62268795',
          grade: 1,
          amount: '총 492쪽',
          price: 26500,
          category: 'book',
        },
        {
          uuid: 5,
          title:
            '백견불여일타 이젠 프로젝트다! 스프링 부트 쇼핑몰 프로젝트 with JPA',
          url: 'https://www.yes24.com/Product/Goods/103453774',
          grade: 0,
          amount: '총 492쪽',
          price: 30000,
          category: 'book',
        },
        {
          uuid: 6,
          title:
            '코드로 배우는 스프링 웹 프로젝트 현업 개발을 위한 단계별 실습서',
          url: 'https://www.yes24.com/Product/Goods/62268795',
          grade: 2,
          amount: '총 760쪽',
          price: 38000,
          category: 'book',
        },
        {
          uuid: 7,
          title:
            '[깃헙]토비의 스프링 3.1 서적과 백기선님의 강좌를 토대로 스프링의 핵심 기술을 정리',
          url: 'https://github.com/pjok1122/Spring-Summary/tree/master',
          grade: 2,
          amount: '총 760쪽',
          price: 38000,
          category: 'posting',
        },
        {
          uuid: 8,
          title: '토비의 스프링 부트 - 이해와 원리(토비)',
          url: 'https://www.inflearn.com/course/%ED%86%A0%EB%B9%84-%EC%8A%A4%ED%94%84%EB%A7%81%EB%B6%80%ED%8A%B8-%EC%9D%B4%ED%95%B4%EC%99%80%EC%9B%90%EB%A6%AC',
          grade: 3,
          amount: '총 11시간 6분',
          price: 99000,
          category: 'video',
        },
        {
          uuid: 9,
          title: '토비의 스프링 3.1 세트',
          url: 'https://www.yes24.com/Product/Goods/7516911',
          grade: 4,
          amount: '총 1720쪽',
          price: 75000,
          category: 'video',
        },
        {
          uuid: 10,
          title:
            '스프링 인 액션, 스프링 5의 강력한 기능과 생산성을 활용한 웹 애플리케이션 개발',
          url: 'https://product.kyobobook.co.kr/detail/S000001942493',
          grade: 3,
          amount: '총 700쪽',
          price: 35000,
          category: 'book',
        },
        {
          uuid: 11,
          title:
            '[깃헙]토비의 스프링 3.1 서적과 백기선님의 강좌를 토대로 스프링의 핵심 기술을 정리',
          url: 'https://github.com/pjok1122/Spring-Summary/tree/master',
          grade: 3,
          amount: '총 700쪽',
          price: 38000,
          category: 'posting',
        },
        {
          uuid: 12,
          title: '스프링 부트와 AWS로 혼자 구현하는 웹 서비스(향로)',
          url: 'https://product.kyobobook.co.kr/detail/S000001019679',
          grade: 4,
          amount: '총 416쪽',
          price: 22000,
          category: 'book',
        },
      ],
      // children: ['MVC', 'DB', 'JUnit'],
    },
    {
      nid: 5,
      depth: 1,
      name: 'JPA',
      // url: 'https://docs.spring.io/spring-data/jpa/docs/current/reference/html/',
      description:
        'DB와 연결하여 데이터를 읽고 쓰기 위해서 SQL쿼리문을 알아야하지만, JPA을 사용하면 객체중심으로 애플리케이션 개발이 가능하여 생산성을 높여줄 수 있어 많은 개발자들이 사용하고 있습니다.',
      ref: [
        {
          uuid: 0,
          title: '자바 ORM 표준 JPA 프로그래밍 - 기본편(김영한)',
          url: 'https://www.inflearn.com/course/ORM-JPA-Basic',
          grade: 2,
          amount: '총 16시간3분',
          price: 121000,
          category: 'video',
        },
        {
          uuid: 1,
          title: 'JPA For Beginner(나무소리)',
          url: 'https://www.youtube.com/playlist?list=PLOSNUO27qFbvzGd3yWbHISxHctPRKkctO',
          grade: 2,
          amount: '총 3시간58분',
          price: 0,
          category: 'video',
        },
        {
          uuid: 2,
          title: 'JPA 퀵스타트',
          url: 'https://product.kyobobook.co.kr/detail/S000001891098',
          grade: 2,
          amount: '총 708쪽',
          price: 30000,
          category: 'book',
        },
        {
          uuid: 3,
          title: '실전! 스프링 부트와 JPA 활용1 - 웹 애플리케이션 개발(김영한)',
          url: 'https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81%EB%B6%80%ED%8A%B8-JPA-%ED%99%9C%EC%9A%A9-1',
          grade: 2,
          amount: '총 7시간44분',
          price: 88000,
          category: 'video',
        },
        {
          uuid: 4,
          title:
            '실전! 스프링 부트와 JPA 활용2 - API 개발과 성능 최적화(김영한)',
          url: 'https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81%EB%B6%80%ED%8A%B8-JPA-API%EA%B0%9C%EB%B0%9C-%EC%84%B1%EB%8A%A5%EC%B5%9C%EC%A0%81%ED%99%94',
          grade: 2,
          amount: '총 6시간35분',
          price: 88000,
          category: 'video',
        },
        {
          uuid: 5,
          title: '실전! 스프링 데이터 JPA(김영한)',
          url: 'https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-%EB%8D%B0%EC%9D%B4%ED%84%B0-JPA-%EC%8B%A4%EC%A0%84',
          grade: 3,
          amount: '총 7시간17분',
          price: 88000,
          category: 'video',
        },
        {
          uuid: 6,
          title: '자바 ORM 표준 JPA 프로그래밍',
          url: 'https://product.kyobobook.co.kr/detail/S000000935744',
          grade: 3,
          amount: '총 734쪽',
          price: 43000,
          category: 'book',
        },
        {
          uuid: 7,
          title: '실전! Querydsl(김영한)',
          url: 'https://www.inflearn.com/course/querydsl-%EC%8B%A4%EC%A0%84',
          grade: 4,
          amount: '총 6시간24분',
          price: 88000,
          category: 'video',
        },
      ],
      // children: ['면접질문', 'Redis', 'Security'],
    },
    {
      nid: 6,
      depth: 1,
      name: 'aws_cloud',
      // url: 'https://docs.aws.amazon.com/',
      description: '추천 소개글',
      ref: [
        {
          uuid: 0,
          title: 'AWS(Amazon Web Service) 입문자를 위한 강의',
          url: 'https://www.udemy.com/course/aws-beginner-sk/?utm_source=adwords&utm_medium=udemyads&utm_campaign=AWS_Search_la.KR_cc.KR&utm_term=_._ag_145452346958_._ad_641862376242_._kw_aws%EA%B0%95%EC%9D%98_._de_c_._dm__._pl__._ti_kwd-380915330158_._li_1009893_._pd__._&matchtype=b&gad=1',
          grade: 1,
          amount: '총 9시간',
          price: 99000,
          category: 'video',
        },
        {
          uuid: 1,
          title: '쉽게 설명하는 AWS 기초 강좌',
          url: 'https://www.youtube.com/playlist?list=PLfth0bK2MgIan-SzGpHIbfnCnjj583K2m',
          grade: 1,
          amount: '총 6시간15분',
          price: 0,
          category: 'video',
        },
        {
          uuid: 1,
          title: '생활코딩AWS',
          url: 'https://www.youtube.com/playlist?list=PLuHgQVnccGMDNWIEgnXjaZ3jgbIo5zQGi',
          grade: 0,
          amount: '총 5시간37분',
          price: 0,
          category: 'video',
        },
        {
          uuid: 1,
          title: '따라하며 배우는 AWS 네트워크 입문',
          url: 'https://aws.amazon.com/ko/events/builders-online-series/',
          grade: 0,
          amount: '총 520쪽',
          price: 30900,
          category: 'book',
        },
        {
          uuid: 4,
          title: '클라우드 네이티브를 위한 쿠버네티스 실전 프로젝트',
          url: 'https://www.yes24.com/Product/Goods/102234803',
          grade: 0,
          amount: '총 368쪽',
          price: 30000,
          category: 'book',
        },
        {
          uuid: 3,
          title: 'Amazon VPC 네트워킹 원리와 보안',
          url: 'https://www.yes24.com/Product/Goods/106043007',
          grade: 0,
          amount: '총 428쪽',
          price: 32000,
          category: 'book',
        },
        {
          uuid: 2,
          title: '토리맘의 한글라이즈 프로젝트',
          url: 'https://godekdls.github.io/Spring%20Cloud%20Data%20Flow/resources.reference-docs/',
          grade: 0,
          amount: '총 0',
          price: 0,
          category: 'posting',
        },
      ],
      // children: ['docker', 'kubernetes'],
    },
    {
      nid: 7,
      depth: 1,
      name: 'code',
      description:
        "개발을 하다보면 반복하게 되는 부분이 발생할 때가 있고, 그런 반복되는 부분을 수정해야되는 상황도 생깁니다. 반복되는 내용이 2~3번정도라면 일일이해도 되지만 양이 많아진다면 불필요한 리소스낭비가 되기때문에, 이런 반복되는 부분을 재사용하기 위해 만들어진 것이 바로 '코드섹션'입니다. 코드를 잘 작성하고 잘 관리하면, 개발자의 생산성을 높일 수 있습니다. 코드를 잘 작성하기 위해서는, 코드의 가독성, 유지보수성, 재사용성, 확장성, 테스트 용이성 등을 고려해야합니다. 이러한 코드의 품질을 높이기 위해, 코드를 작성할 때는 코드 컨벤션을 지키고, 코드 리뷰를 통해 피드백을 받아야합니다. 또한, 코드를 작성할 때는, SOLID 원칙을 지키고, 디자인 패턴을 적용해야합니다. 이러한 코드의 품질을 높이는 것은 개발자의 역량을 높이는 것과도 연관이 있습니다. 따라서, 코드의 품질을 높이기 위해, 코드 컨벤션, 코드 리뷰, SOLID 원칙, 디자인 패턴 등을 공부하고, 실제로 적용해보는 것이 중요합니다.",
      ref: [
        {
          uuid: 0,
          title: '디자인패턴 스터디',
          url: 'https://younggeun0.github.io/%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4-%EC%8A%A4%ED%84%B0%EB%94%94/',
          grade: 3,
          amount: '',
          price: 0,
          category: 'posting',
        },
        {
          uuid: 0,
          title: '자바로 된 디자인 패턴',
          url: 'https://refactoring.guru/ko/design-patterns/java',
          grade: 3,
          amount: '',
          price: 0,
          category: 'posting',
        },
        {
          uuid: 0,
          title: '코딩으로 학습하는 GoF의 디자인 패턴',
          url: 'https://www.inflearn.com/course/%EB%94%94%EC%9E%90%EC%9D%B8-%ED%8C%A8%ED%84%B4',
          grade: 3,
          amount: '총 11시간37분',
          price: 88000,
          category: 'video',
        },
        {
          uuid: 0,
          title: '클린 코드',
          url: 'https://www.yes24.com/Product/Goods/11681152',
          grade: 4,
          amount: '총 584쪽',
          price: 33000,
          category: 'book',
        },
        {
          uuid: 0,
          title: '클린 아키텍처',
          url: 'https://www.yes24.com/Product/Goods/77283734',
          grade: 4,
          amount: '총 432쪽',
          price: 29000,
          category: 'book',
        },
        {
          uuid: 0,
          title: '헤드 퍼스트 디자인 패턴',
          url: 'https://product.kyobobook.co.kr/detail/S000001810483',
          grade: 2,
          amount: '총 656쪽',
          price: 36000,
          category: 'book',
        },
        {
          uuid: 0,
          title: '개발자가 반드시 정복해야 할 객체 지향과 디자인 패턴',
          url: 'https://www.yes24.com/Product/Goods/9179120',
          grade: 3,
          amount: '총 264쪽',
          price: 20000,
          category: 'book',
        },
        {
          uuid: 0,
          title: '객체지향의 사실과 오해',
          url: 'https://product.kyobobook.co.kr/detail/S000001628109',
          grade: 2,
          amount: '총 260쪽',
          price: 20000,
          category: 'book',
        },
        {
          uuid: 0,
          title: '오브젝트/코드로 이해하는 객체지향 설계',
          url: 'https://www.yes24.com/Product/Goods/74219491',
          grade: 4,
          amount: '총 656쪽',
          price: 38000,
          category: 'book',
        },
      ],
      children: [],
    },
    {
      nid: 8,
      depth: 1,
      name: 'algorithm',
      description:
        '알고리즘(자료구조)는 메모리를 효율적으로 사용하면서 데이터를 빠르고 안정적으로 처리하는 것이 궁금적인 목표입니다.알고리즘과 자료구조를 잘못 쓰게되면 느리고 불안정해질 수 있지만, 특정 상황에 맞게 유용하게 사용하게되면 효율적이고 빠른 성능을 낼 수 있습니다.',
      ref: [
        {
          uuid: 0,
          title: '프로그래밍 대회에서 배우는 알고리즘 문제 해결 전략 세트',
          url: 'https://www.yes24.com/Product/Goods/8006522',
          grade: 3,
          amount: '총 1062쪽',
          price: 50000,
          category: 'book',
        },
        {
          uuid: 0,
          title: '이것이 취업을 위한 코딩 테스트다 with 파이썬(나동빈)',
          url: 'https://www.yes24.com/Product/Goods/91433923',
          grade: 2,
          amount: '총 604쪽',
          price: 34000,
          category: 'book',
        },
        {
          uuid: 0,
          title: '이것이 자료구조+알고리즘이다 with C 언어',
          url: 'https://www.yes24.com/Product/Goods/111362116',
          grade: 2,
          amount: '총 664쪽',
          price: 34000,
          category: 'book',
        },
        {
          uuid: 0,
          title:
            '알고리즘 코딩 테스트 입문부터 합격까지 (Feat. 컴공선배 알고리즘캠프)',
          url: 'https://www.udemy.com/course/comgong_codingtest/',
          grade: 2,
          amount: '총 13시간',
          price: 0,
          category: 'video',
        },
      ],
      children: [],
    },
  ],
};
