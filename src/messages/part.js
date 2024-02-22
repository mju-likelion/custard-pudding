import react_icon from '../assets/imgs/react_icon.svg';
import spring_boot_icon from '../assets/imgs/spring_boot_icon.svg';

const part = {
  web: {
    part_name: 'Web',
    icon: react_icon,
    content:
      '웹 클라이언트 개발에 필요한 HTML, CSS, JavaScript 및 React 학습을 통해 기본적인 개발 역량을 잡아나갑니다.',
    tech_list: 'git, GitHub, JavaScript, Vercel, React',
    assignment:
      'HTML + CSS만을 사용하여 간단한 자기소개 페이지를 만들어 제출해주세요.\n' +
      'HTML, CSS 파일을 .zip 파일로 압축해서 지원서 작성 시 업로드 해주세요.',
  },
  server: {
    part_name: 'Server',
    icon: spring_boot_icon,
    content:
      '실제 서비스에 사용되는 API 서버를 설계하고 Spring Boot를 통해 실제 작동하는 서버로 구현 및 배포하는 개발 경험을 쌓게 됩니다',
    tech_list:
      'git, GitHub, Spring Boot, JPA, Spring Security, JAVA, nginx, EC2, MySQL',
    assignment:
      'Java 언어를 사용하는 간단한 프로그래밍 과제가 GitHub를 통해 출제됩니다.\n' +
      '지원 기간 안에 GitHub를 통해 해당 과제를 완료하고 지원서 작성 시 Fork한 레포지토리의 링크를 첨부해주세요.',
  },
};

export default part;
