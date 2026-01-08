---
title: 'LinkStack 소개 - AI 기반 북마크 & 지식 관리 플랫폼'
description: 'Chrome 확장 프로그램으로 웹 페이지를 저장하고, AI 요약과 하이라이트로 지식을 체계적으로 관리하세요. LinkStack의 모든 기능을 소개합니다.'
pubDate: 'Jan 08 2026'
heroImage: '/blog-placeholder-4.jpg'
---

LinkStack은 **AI 네이티브 링크 관리 플랫폼**입니다. Chrome 확장 프로그램과 웹 대시보드를 통해 웹 페이지의 링크와 컨텍스트를 저장하고, AI와 함께 지식 베이스를 구축할 수 있습니다.

## 🎯 LinkStack이 해결하는 문제

인터넷에서 좋은 글을 발견했을 때, 어떻게 저장하시나요?

- 브라우저 북마크? → 쌓여만 가고 다시 안 봄
- 노션에 복사? → 링크만 있고 맥락이 없음
- 나중에 읽기 앱? → AI가 없어서 정리가 어려움

LinkStack은 이 모든 문제를 해결합니다.

## ✨ 핵심 기능

### 🌐 Chrome 확장 프로그램

| 기능 | 설명 |
|------|------|
| **원클릭 저장** | 현재 페이지의 URL, 제목, 본문 컨텐츠를 즉시 저장 |
| **컨텍스트 캡처** | 페이지의 핵심 내용, Open Graph 데이터, 이미지 추출 |
| **키보드 단축키** | `Ctrl+Shift+S` (저장), `Ctrl+Shift+E` (의견 추가) |
| **AI 주입** | ChatGPT, Claude, Gemini에 컨텍스트 직접 전송 |
| **하이라이트** | 페이지 내 텍스트 하이라이트 및 메모 저장 |

### 📊 웹 대시보드

- **대시보드** - 저장된 링크 통계 및 최근 활동 확인
- **스마트 검색** - 제목, URL, 본문 내용까지 전체 검색
- **폴더 구조** - 계층형 폴더로 체계적 분류
- **컬러 태그** - 색상 지정 가능한 태그 시스템
- **팀 기능** - 팀별 링크 컬렉션 공유 및 댓글

### 🤖 AI 기능

```
페이지 저장 → AI 분석 → 자동 요약 생성
    ↓            ↓           ↓
  원클릭      GPT-5      핵심 내용 추출
```

- **AI 요약** - 저장된 페이지의 핵심 내용을 자동으로 요약
- **스마트 분류** - AI가 적절한 태그와 폴더를 추천
- **AI 챗봇 연동** - 저장된 컨텍스트를 AI에 직접 주입

## 🔧 기술 아키텍처

LinkStack은 최신 기술 스택으로 구축되었습니다.

| 레이어 | 기술 |
|--------|------|
| **Frontend** | Next.js 16, React 19, Tailwind CSS 4, Zustand |
| **Backend** | Express 4, TypeScript, MySQL/MariaDB, Redis |
| **Extension** | Chrome Manifest V3, Side Panel API |
| **AI** | OpenAI GPT-5 mini |

### 데이터베이스 구조

18개의 테이블로 구성된 체계적인 데이터 모델:

- `users` - 사용자 (Google/Kakao OAuth, Guest 지원)
- `links` - 저장된 링크 (공개/비공개 설정)
- `contexts` - 링크 컨텍스트 (본문, 메타, AI 요약)
- `folders` - 계층형 폴더
- `tags` - 컬러 태그
- `teams` - 팀 협업
- `highlights` - 텍스트 하이라이트
- `comments` - 댓글 및 토론

## 🚀 시작하기

### 1. 확장 프로그램 설치

1. Chrome 웹 스토어에서 LinkStack 검색
2. **Chrome에 추가** 클릭
3. 확장 프로그램 고정

### 2. 첫 링크 저장

1. 저장하고 싶은 웹 페이지 방문
2. `Ctrl+Shift+S` 또는 확장 아이콘 클릭
3. 폴더와 태그 선택 후 저장

### 3. AI 요약 생성

저장된 링크에서 **AI 요약 생성** 버튼을 클릭하면 GPT가 페이지 내용을 분석하고 핵심 요약을 생성합니다.

## 🔌 AI 챗봇 연동

저장된 링크의 컨텍스트를 ChatGPT, Claude, Gemini에 직접 주입할 수 있습니다.

1. 원하는 링크 선택
2. **AI에 전송** 버튼 클릭
3. 자동으로 AI 챗봇에 컨텍스트 삽입
4. 해당 내용에 대해 질문하기

이 기능은 특히 다음 상황에 유용합니다:

- 긴 기술 문서를 빠르게 이해하고 싶을 때
- 영어 아티클의 핵심 내용을 질문하고 싶을 때
- 여러 링크의 내용을 종합해서 분석하고 싶을 때

## 👥 팀 협업

팀원들과 링크 컬렉션을 공유하세요.

- **팀 생성** - 프로젝트별 팀 구성
- **멤버 초대** - 이메일로 팀원 초대
- **링크 공유** - 개인 링크를 팀에 공유
- **댓글 토론** - 링크에 대해 팀원들과 토론

## 🌐 API 접근

개발자를 위한 RESTful API를 제공합니다.

```bash
# 링크 목록 조회
curl -H "Authorization: Bearer YOUR_TOKEN" \
  https://linkapi.promstack.com/api/links

# 링크 저장
curl -X POST \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"url": "https://example.com", "title": "Example"}' \
  https://linkapi.promstack.com/api/links
```

## 🔒 개인정보 보호

- **비공개 기본** - 저장된 링크는 기본적으로 비공개
- **선택적 공개** - 원하는 링크만 커뮤니티에 공개
- **게스트 모드** - 로그인 없이 기기 ID로 사용 가능
- **데이터 내보내기** - 언제든 데이터를 내보낼 수 있음

---

웹에서 발견한 지식을 잃어버리지 마세요. LinkStack으로 체계적인 지식 관리를 시작하세요.

**[LinkStack 시작하기 →](https://link.promstack.com)**
