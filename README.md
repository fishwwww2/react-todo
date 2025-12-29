# 📝 React Todo List

React와 Vite를 사용해 **Todo CRUD**, **현재 시간 표시**, **랜덤 명언** 기능을 구현한 프로젝트입니다.  
json-server를 활용해 Todo 데이터를 파일 기반 API로 관리하고,  
Custom Hook을 통해 Todo 관련 로직을 분리했습니다.

---

## 🔗 주요 기능

### ✅ Todo CRUD
- Todo 생성(Create)
- Todo 조회(Read)
- Todo 완료 상태 수정(Update)
- Todo 삭제(Delete)
- 체크박스를 통해 완료 상태 표시 (회색 + 취소선)

### ⏰ 현재 시간 표시
- `useEffect`와 `setInterval`을 사용한 실시간 시계

### 💬 랜덤 명언
- 버튼 클릭 시 랜덤 명언 표시
- `useRef`를 활용한 DOM 제어

---

## 🛠 사용 기술

- React
- Vite
- JavaScript (ES6)
- json-server
- HTML / CSS

---

## 📂 프로젝트 구조

```
react-todo/
┣ src/
┃ ┣ components/
┃ ┃ ┣ TodoList.jsx
┃ ┃ ┣ TodoItem.jsx
┃ ┃ ┣ Clock.jsx
┃ ┃ ┗ Quote.jsx
┃ ┣ hooks/
┃ ┃ ┗ useTodos.js
┃ ┣ env/
┃ ┃ ┗ api.js
┃ ┣ App.jsx
┃ ┗ App.css
┣ db.json
┣ package.json
┗ README.md
```

yaml
코드 복사

---

## 📌 Custom Hook 설명

Todo 관련 로직을 `useTodos`라는 Custom Hook으로 분리하여  
컴포넌트에서는 UI에만 집중할 수 있도록 구성했습니다.

```js
const { todos, loading, addTodo, toggleTodo, deleteTodo } = useTodos();
