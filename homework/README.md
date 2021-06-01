## 실습 과제 안내

jQuery로 작성되어 있는 로그인 폼을 Vue.js 코드로 변환해보는 실습입니다.

## 실습 목표

- [ ] Vue CLI로 프로젝트를 생성할 수 있다.
- [ ] 화면 UI 요소 단위의 컴포넌트 설계 및 구현이 가능하다.
- [ ] Vue.js 문법으로 데이터 바인딩 및 이벤트 처리가 가능하다.
- [ ] HTTP 라이브러리를 이용해 서버에 데이터를 보낼 수 있다.
- [ ] 최신 자바스크립트 문법(ES6+)을 이용해 코드를 작성할 수 있다.
- [ ] 외부 CSS, JS 라이브러리를 사용하여 Vue.js 개발을 할 수 있다.

## 실습 환경

- [Node.js LTS](https://nodejs.org/ko/) 설치
- [최신 Vue CLI](https://cli.vuejs.org/guide/installation.html) 설치
- 선호하는 웹 개발 툴

## 실습 대상 UI

![ui](./ui.png)

## 실습 절차 및 제출 안내

1. 현재 깃헙 리포지토리를 [포크(fork)](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)합니다.

![fork](./fork.gif)

2. 포크된 리포지토리를 [클론(clone)](https://www.git-tower.com/learn/git/commands/git-clone/)한뒤 **homework 폴더에서** 아래 명령어로 뷰 프로젝트를 생성합니다. 프로젝트 이름은 본인 이름을 영문으로 기재해 주세요 😄

```bash
# 명령어 예시
vue create "본인 이름"
# 실제 예시
vue create jangkeehyo
```

> Vue CLI로 생성할 때 Vue.js 버전은 Vue 2를 선택해 주세요 😄

3. 포크된 리포지토리의 `homework/index.html` 파일 내용을 뷰 문법으로 변환합니다. 이때 위에 안내된 실습 목표를 모두 달성할 수 있도록 노력해 주세요 😄
4. 작업한 내용을 [커밋(commit)](https://git-scm.com/docs/git-commit) & [푸시(push)](https://git-scm.com/docs/git-push) 한 뒤 `https://github.com/joshua1988/vue-advanced-lgcns` 리포지토리를 대상으로 **포크된 리포지토리에서** 풀 리퀘스트(Pull Request)를 생성합니다.

![pr](./pr.gif)

⚠️ 풀 리퀘스트 제목은 본인 이름으로 기재 부탁드립니다 😄

## UI 요구 사항

- [ ] (필수) 로그인에 필요한 아이디와 패스워드를 입력할 수 있는 2개의 인풋 박스가 존재한다.
- [ ] (필수) `Sign In` 버튼을 눌렀을 때 인풋 박스에 입력된 아이디와 패스워드 값을 서버에 전달한다.

```
POST https://jsonplaceholder.typicode.com/users/
Content-Type application/json
Request Parameters
{
  name: '로그인 아이디',
  password: '비밀번호'
}
```

- [ ] (선택) 비밀번호의 길이가 6자리 이하인 경우 로그인 버튼을 누를 수 없고 패스워드를 6자 이상 입력하라는 문구를 표시한다.

## 제출 기한

6/4(금) 23시까지 제출