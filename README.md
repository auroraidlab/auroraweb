# AURORA SENSE ORDER

PRD를 바탕으로 제작한 첫 웹사이트 시안입니다. 별도 빌드나 패키지 설치 없이 `dist/index.html`을 브라우저에서 열 수 있습니다.

## 구성

- 미색 배경과 명조 타이포그래피의 Hero / Philosophy
- 원베일리 Monograph 편집 구성안
- 개별 URL 쿼리로 열리는 에세이 3편과 접근 가능한 읽기 창
- 모바일 메뉴, 이메일 문의, 모션 감소 설정 대응

## 공개 전 교체할 자료

- `dist/light.svg`는 직접 제작한 컨셉 일러스트이며 실제 원베일리 사진이 아닙니다.
- 프로젝트 서술은 PRD 기반 초안입니다. 실제 참여 범위, 설계 근거, 연도, 사진과 크레딧을 확인해야 합니다.
- 에세이 본문은 검토용 새 원고입니다. 기존 기고문으로 표시하지 않았습니다.
- 문의는 메일 앱을 여는 링크입니다. 이메일 주소의 실제 수신 가능 여부는 확인하지 않았습니다.
- 웹폰트는 Google Fonts에서 불러오며 오프라인에서는 시스템 명조와 산세리프로 표시됩니다.

## Vercel 배포

GitHub 저장소 `auroraidlab/auroraweb`을 Vercel 프로젝트에 연결합니다. `vercel.json`에서 정적 파일 폴더를 `dist`로 지정하고 설치 및 빌드 명령을 비워 두었습니다. 별도 프레임워크나 패키지 설치가 필요하지 않습니다.

Vercel 프로젝트의 Root Directory는 저장소 루트(기본값)로 사용합니다. GitHub에 올라간 저장소에는 `sense-order` 상위 폴더가 없으므로 Root Directory에 `sense-order`를 입력하지 않습니다. `main` 브랜치에 푸시하면 연결된 Vercel 프로젝트가 다시 배포됩니다.

## GitHub Pages 배포 (대안)

이 `sense-order` 폴더가 Git 저장소 루트입니다. `.github/workflows/pages.yml`은 `main` 브랜치에 푸시할 때 `dist`를 GitHub Pages로 배포합니다. 빌드나 별도 배포 토큰은 필요하지 않습니다.

1. GitHub에서 빈 저장소를 생성합니다.
2. 이 폴더에서 아래 명령으로 연결하고 푸시합니다. `YOUR_ACCOUNT/YOUR_REPOSITORY`를 실제 저장소 경로로 바꿉니다.

```sh
git remote add origin https://github.com/YOUR_ACCOUNT/YOUR_REPOSITORY.git
git add .
git commit -m "Add Aurora Sense Order website"
git push -u origin main
```

3. GitHub 저장소의 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 설정합니다.
4. **Actions → Deploy GitHub Pages → Run workflow**를 실행합니다. 이후에는 `main`에 푸시할 때 자동 배포됩니다.
5. 성공한 워크플로의 `github-pages` 환경 링크에서 사이트를 엽니다.

일반 프로젝트 저장소의 기본 주소는 `https://YOUR_ACCOUNT.github.io/YOUR_REPOSITORY/`입니다. CSS, JavaScript, 이미지, 에세이 링크는 상대 경로를 사용하므로 저장소 하위 경로에서도 작동합니다. 커스텀 도메인은 확정 후 Pages 설정에 연결하면 됩니다.

공식 안내: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

## 검증 상태

JavaScript 구문 검사는 통과했습니다. 브라우저 미리보기 권한이 거절되어 화면 및 상호작용 검증은 미완료입니다. GitHub 원격 저장소가 아직 연결되지 않아 푸시와 실제 배포는 진행하지 않았습니다. Sites 배포 설정은 제거했습니다.
