
[![Netlify Status](https://api.netlify.com/api/v1/badges/4be0506a-71b1-4421-ad6a-db2dc4263f1a/deploy-status)](https://app.netlify.com/sites/elaborate-pasca-b565fa/deploys)
## 📌 설명
vue와 api를 사용하여 Notion 클론하기

## 👩‍💻 요구 사항과 구현 내용
- [x] 글 단위를 Document라고 합니다. Document는 Document 여러개를 포함할 수 있습니다.
- [x] vue router의 createWebHistory를 사용하여 SPA 형태로 만듭니다.
- [x] 편집기에 기본적인 저장버튼이 없습니다. 지속적으로 서버에 저장되도록 합니다.
- [x] 화면 좌측에 Root Documents를 불러오는 API를 통해 루트 Documents를 렌더링합니다.
  - [x] Root Document를 클릭하면 오른쪽 편집기 영역에 해당 Document의 Content를 렌더링합니다.
  - [x] 해당 Root Document에 하위 Document가 있는 경우, 해당 Document 아래에 트리 형태로 렌더링 합니다.
  - [x] Document Tree에서 각 Document 우측에는 + 버튼이 있습니다. 해당 버튼을 클릭하면, 클릭한 Document의 하위 Document로 새 Document를 생성하고 편집화면으로 넘깁니다.
- [x] 상위 문서로 이동할수 있는 breadcrumb를 구현합니다.

### 기본 화면
<img src="https://user-images.githubusercontent.com/105067764/207599364-6e8cd72e-887c-4371-a943-f1890d6506ed.png" width="70%" height="70%">

### workspace
![image](https://user-images.githubusercontent.com/105067764/207599502-0f5cb922-a0ed-4a82-847b-184f0bf1a947.png)

마우스를 문서에 올리면 삭제버튼과 하위문서 추가 버튼을 활성화 합니다.

![image](https://user-images.githubusercontent.com/105067764/207599792-e890d884-a0ce-4b31-b90e-87fe8ddf8e25.png)

새로운 페이지를 클릭시 최상단 문서가 생성됩니다.

### workspace resize
<img src="https://user-images.githubusercontent.com/105067764/207601616-f920efb1-ce82-470c-b73a-116df45970ac.gif" width="70%" height="70%">

사이드바의 크기를 변경할 수 있습니다. 사이드바를 더블클릭시 초기설정으로 돌아갑니다.

### edit
<img src="https://user-images.githubusercontent.com/105067764/207602687-883fcdfd-d14d-4db4-855e-772e369509a5.png">

편집기의 제목 입력시 workspace의 제목도 변경됩니다.

### breadcrumb
![image](https://user-images.githubusercontent.com/105067764/207604278-3217d640-829e-4972-a9f6-c32846f1bba9.png)

breadcrumb의 제목을 클릭시 해당 편집기로 이동합니다.

