# GAEMI Loci Manual

ROBOTIS AI의 **GAEMI Loci** — 자율 이동 로봇을 위한 HD 맵 생성 · 편집 · 관리 웹 플랫폼 매뉴얼입니다.
Astro + Starlight 기반 정적 사이트이며, 한국어/영어 두 개 로케일을 지원합니다.

🌐 **Live**: https://kangminjurobot.github.io/gaemi-loci-manual/

## 구성

| 섹션 | 내용 |
|------|------|
| 소개 | GAEMI Loci 개요, 도구 개요, 워크플로 |
| 대시보드 | Job 생성, 진행 상태 관리, 세션 운영 |
| 서비스 구역 에디터 | 위성 지도 기반 서비스 구역 등록 |
| 내비게이션 에디터 | 경로 편집, 2D 맵 에디터, 타일 스티칭 |
| 베이스 맵 에디터 | 현장 매핑 절차, 충전 스테이션 등록 |
| 3D 맵 에디터 / 맵 보정 | 기준점 정렬, 경로 보정, 맵 병합 |
| 파일 관리 | 매핑 데이터 업로드/다운로드 |

## 로컬 개발

```bash
npm install
npm run dev       # http://localhost:4321/gaemi-loci-manual/
npm run build     # ./dist/로 정적 사이트 빌드
npm run preview   # 빌드 결과 로컬 프리뷰
```

## 배포

`main` 브랜치에 push 되면 `.github/workflows/deploy.yml`이 자동으로 빌드하고 GitHub Pages에 배포합니다.

## 라이선스

© 2026 ROBOTIS AI. All rights reserved.
