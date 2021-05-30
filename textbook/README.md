# Vue.js 시작하기/중급/완벽가이드 정리

## 목차

- [시작하기](#시작하기)
- [중급](#중급)
- [완벽 가이드](#완벽-가이드)

## 시작하기

#### 인스턴스

뷰 서비스 개발을 위해 필수로 생성해야 하는 단위

```js
var instanceOptions = {
  data: {
    str: 'hi'
  }
};
new Vue(instanceOptions);
```

#### 컴포넌트

화면의 UI 영역을 구분한 단위

```js
var AppHeader = {
  template: '<h1>앱 헤더</h1>'
}

new Vue({
  components: {
    'app-header': AppHeader
  }
})
```

#### 컴포넌트 통신

화면이 여러 개의 컴포넌트로 구성되었을 때 컴포넌트 간 데이터 전달을 위한 방법

##### props

```html
<body>
  <div id="app">
    <app-header :app-title="headerTitle">
  </div>
</body>

<script>
var AppHeader = {
  template: '<h1>{{ appTitle }}</h1>',
  props: 'appTitle'
}

new Vue({
  components: {
    'app-header': AppHeader
  },
  data: {
    headerTitle: '앱 헤더'
  }
})
</script>
```

##### event emit

```html
<body>
  <div id="app">
    <app-header v-on:greet="logGreeting">
  </div>
</body>

<script>
var AppHeader = {
  template: '<button v-on:click="$emit('greet')">반갑습니다</button>',
}

new Vue({
  components: {
    'app-header': AppHeader
  },
  methods: {
    logGreeting: function() {
      console.log('환영합니다')
    }
  }
})
</script>
```

#### 라우터

뷰로 싱글 페이지 애플리케이션(SPA)을 제작하기 위한 페이지 이동 & 구성 라이브러리

```js
var routerInstance = new VueRouter({
  routes: [
    { path: '/', component: MainPage },
    { path: '/login', component: LoginPage }
  ]
})

new Vue({
  router: routerInstance,
})
```

#### 템플릿 문법

화면 UI 요소를 조작하기 위해 제공되는 뷰 기본 문법

##### 데이터 바인딩

```html
<div>{{ str }}</div>

<script>
new Vue({
  data: {
    str: 'hi'
  }
})
</script>
```

##### 뷰 디렉티브

```html
<div v-if="login">로그인 되었습니다.</div>
<button v-on:click="loginUser">로그인하기</button>

<script>
new Vue({
  data: {
    login: false
  },
  methods: {
    loginUser: function() {
      this.login = true;
    }
  }
})
</script>
```

#### 뷰 CLI

뷰로 빠르게 웹 서비스를 개발할 수 있도록 뷰 프로젝트를 생성해주는 도구

## 중급

#### 컴포넌트 설계 & 구현

Presentational & Container 컴포넌트

![vuejs-component](https://vuejs.org/images/components.png)

#### ES6+

##### const, let

변수를 선언하는 방법

```js
let a = 10;
a = 20;
let a = 30; // error

const b = 10;
b = 20; // error
```

##### arrow function

함수를 정의하는 방법

```js
var sum = function(a, b) {
  return a + b;
}

var sum = (a, b) => {
  return a + b;
}
```

##### enhanced object literal

객체 선언 방법

```js
var obj = {
  // es5
  sum: function(a, b) {
    return a + b;
  },
  // es6+
  sum(a, b) {
    return a + b;
  }

  // es5
  name: 'hi',
  // es6+
  name
}
```

##### destructuring

객체의 속성을 쉽게 접근할 수 있는 방법

```js
var obj = {
  name: 'capt',
  age: 100
}
// es5
var name = obj.name;
var age = obj.age;
// es6+
var { name, age } = obj;
```

##### modules

변수, 함수 등의 모듈화 방법

```js
// math.js
function sum(a, b) {
  return a + b;
}

// app.js
import { sum } from './math.js';
sum(10, 20);
```

#### Vuex

최소 2~3군데 이상 쓰이는 공통 뷰 인스턴스의 데이터를 효율적으로 관리하는 방법

```js
new Vuex.Store({
  state: {
    user: {},
  },
  getters: {
    userName(state) {
      return state.user.name;
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    fetchUser(context) {
      $.ajax('users/1', function(result) {
        context.commit('setUser', result)
      })
    }
  }
})
```

#### Vuex mapHelpers

뷰엑스에 선언한 속성을 컴포넌트에서 쉽게 들고오기 위한 방법

```js
// store/index.js
new Vuex.Store({
  state: {
    counter: 1,
  },
  getters: {
    doubleCounter(state) {
      return state.counter * 2;
    }
  }
})

// UserProfile.vue
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState(['str']),
    ...mapGetters({
      myCounter: 'doubleCounter'
    })
  }
}
```

#### Vuex Modules

스토어의 코드가 길어지지 않게 데이터 또는 도메인 단위 별로 나누어 관리하는 방법

```js
// user.js
export default {
  namespaced: true,
  state: {
    user: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    }
  }
}

// store/index.js
import user from './user.js'

new Vuex.Store({
  modules: {
    user: user
  },
  state: {
    str: 'hi',
  }
})
```

## 완벽 가이드

#### Vue CLI를 이용한 프로젝트 생성 방법

- ESLint + Prettier 설정
- VSCode를 사용하는 경우 jsconfig.json 파일 설정
- 


#### 웹 서비스 개발 절차

1. CLI를 이용한 프로젝트 구성
2. 페이지 단위의 라우터 설계(사용자별 진입 권한, 리다이렉트, fallback 등)
3. 페이지별 UI 컴포넌트 설계 및 구현
4. api 함수 모듈화 및 REST API 인터페이스 정리
5. 선택적으로 Vuex, 외부 라이브러리 활용

#### 자바스크립트 비동기 처리 패턴

- callback

```js
function fetchUser(callback) {
  $.ajax('users/1', function(result) {
    callback(result);
  })
}

fetchUser(function(result) {
  var data = result;
  console.log(data);
})
```

- promise

```js
function fetchUser() {
  return new Promise(function(resolve) {
    $.ajax('users/1', function(result) {
      resolve(result);
    })
  })
}

fetchUser().then(function(result) {
  var data = result;
  console.log(data);
})
```

- async & await

```js
function fetchUser() {
  return new Promise(function(resolve) {
    $.ajax('users/1', function(result) {
      resolve(result);
    })
  })
}

async function getUserData() {
  var data = await fetchUser();
  console.log(data);
}
```

#### 외부 라이브러리 모듈화

```js
// plugins/ChartPlugin.js
import Chart from 'chart.js';

export default {
  install(Vue) {
    Vue.prototype.$_Chart = Chart;
  }
}

// src/main.js
import Vue from 'vue';
import ChartPlugin from './plugins/ChartPlugin.js';

Vue.use(ChartPlugin);

new Vue({
  // ...
})
```

#### 컴포넌트 코드 재활용 방법

##### slot

특정 컴포넌트를 등록해서 사용할 때 마크업 부분만 재정의해서 활용할 수 있는 방법

```html
<!-- App.vue -->
<div>
  <AlertModal>
    <h1 slot="title">모달 제목</h1>
    <p slot="contents">모달 본문입니다</p>
  </AlertModal>
</div>

<!-- AlertModal.vue -->
<template>
  <div class="modal">
    <div class="modal-inner">
      <div class="modal-header">
        <slot name="title"></slot>
      </div>
      <div class="modal-contents">
        <slot name="contents"></slot>
      </div>
    </div>
  </div>
</template>
```

##### 믹스인

컴포넌트마다 반복되는 코드들을 미리 정의해놓고 가져다 주입시켜서 쓸 수 있는 방법

```js
// mixins/ModalMixin.js
export default {
  methods: {
    openModal() {
      this.modalOpen = true;
    },
    closeModal() {
      this.modalOpen = false;
    }
  }
}

// App.vue
import ModalMixin from './mixins/ModalMixin.js';

export default {
  mixins: [ModalMixin],
  data() {
    return { modalOpen: false }
  },
  methods: {
    fetchData() {
      axios.get('/products').catch(error => {
        this.openModal();
      });
    }
  }
}
```

#### 서비스 배포

1. 뷰 뷰 CLI로 생성해서 구현 후 배포하는 경우 서버에 경로 우회 설정 필요(뷰 라우터가 히스토리 모드일 때)

[서버별 경로 우회 설정 방법](https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations)

2. 로컬, 테스트, 프로덕션 등 API 엔드포인트를 쉽게 전환할 수 있도록 env 환경 변수 설정

```bash
# .env.local
VUE_APP_API_ENDPOINT=http://localhost:8080

# .env.development
VUE_APP_API_ENDPOINT=http://dev-lgcns.com

# .env.production
VUE_APP_API_ENDPOINT=https://lgcns.com

# .env
VUE_APP_VERSION=1.0
```

[더 자세한 내용 살펴보기](https://joshua1988.github.io/vue-camp/deploy/cli3-rules.html)

## FAQ

- Q) 뷰엑스는 언제 써야 하나요?
- Q) 스토어에 비즈니스 로직을 모두 넣어도 상관 없나요?
- Q) 컴포넌트는 어떤 기준으로 구분해야 하나요?
- Q) 컴포넌트 코드 재활용 방법 중 어떤게 좋을까요?
- Q) 복잡한 애플리케이션을 구현하는 건 뷰보다 리액트가 더 적합하다고 하는데 맞나요?
- Q) 서버 사이드 렌더링은 언제 쓰는 것이 좋을까요?
- Q) 새로 프로젝트를 시작한다면 Vue 2로 해야 할까요? Vue 3로 해야 할까요?
- Q) 뷰에 타입스크립트를 쉽게 적용할 수 있을까요?