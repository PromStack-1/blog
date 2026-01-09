---
title: 'PromStack + LinkStack 시너지 - AI 개발 생산성을 극대화하는 조합'
description: 'PromStack의 프롬프트 관리와 LinkStack의 링크/하이라이트 관리를 함께 사용하면 AI 개발 워크플로우가 완성됩니다.'
pubDate: 'Jan 09 2026'
heroImage: '../../assets/blog-placeholder-5.jpg'
---

**PromStack**과 **LinkStack**은 함께 사용할 때 더 강력해집니다. 프롬프트 관리와 지식 관리를 결합하면 AI 개발 생산성이 크게 향상됩니다.

## 🧩 두 제품의 역할

| | PromStack | LinkStack |
| --- | --------- | --------- |
| 핵심 기능 | 프롬프트 관리, AI 에이전트 | 링크 저장, 하이라이트 관리 |
| 주요 사용자 | 개발자, PM, AI 연구원 | 모든 지식 노동자 |
| MCP 서버 | mcp.promstack.com | linkmcp.promstack.com |
| 데이터 | 프롬프트, 테스트 결과 | 링크, 하이라이트, 태그 |

## 🔗 시너지 포인트

### 1. 리서치 → 프롬프트 개발

```text
[LinkStack에서]
AI 관련 아티클 저장 → 핵심 부분 하이라이트
        ↓
[PromStack에서]
하이라이트 내용을 참고해 프롬프트 작성
```

**예시 워크플로우:**

1. LinkStack으로 "프롬프트 엔지니어링" 아티클 수집
2. 핵심 기법들 하이라이트로 저장
3. Claude Code에서 LinkStack MCP로 하이라이트 검색
4. 검색된 내용 기반으로 프롬프트 작성
5. PromStack에 프롬프트 저장

### 2. MCP 듀얼 연동

Claude Desktop이나 VS Code에서 **두 MCP 서버를 동시에** 연결하세요:

```json
{
  "mcpServers": {
    "promstack": {
      "url": "https://mcp.promstack.com",
      "headers": {
        "PROMSTACK_API_KEY": "YOUR_PROMSTACK_KEY"
      }
    },
    "linkstack": {
      "url": "https://linkmcp.promstack.com",
      "headers": {
        "LINKSTACK_API_KEY": "YOUR_LINKSTACK_KEY"
      }
    }
  }
}
```

이제 AI 에디터에서:

```text
> linkstack에서 "React 성능 최적화" 관련 저장한 링크 찾아줘
> promstack에서 코드 리뷰 프롬프트 가져와서 이 코드 분석해줘
```

### 3. 지식 기반 에이전트

LinkStack에 저장된 자료를 PromStack 에이전트의 **지식 베이스**로 활용:

```text
┌─────────────────────────────────────┐
│         PromStack Agent             │
│   "당신은 기술 블로그 작가입니다"    │
│                                     │
│   도구:                             │
│   - LinkStack (저장된 참고 자료)    │
│   - 웹 검색 (최신 정보)             │
│   - 계산기                          │
└─────────────────────────────────────┘
```

에이전트가 글을 쓸 때 LinkStack에 저장된 참고 자료를 먼저 검색합니다.

### 4. 브라우저 익스텐션 활용

LinkStack 크롬 익스텐션으로:

1. 웹 서핑 중 유용한 프롬프트 예시 발견
2. 원클릭으로 LinkStack에 저장
3. 나중에 PromStack에서 참고하며 프롬프트 작성

## 💼 실전 사용 시나리오

### 시나리오 1: 새 프로젝트 시작

```text
1. [LinkStack] 경쟁사 제품 분석 자료 수집
2. [LinkStack] 기술 문서, API 레퍼런스 저장
3. [PromStack] 코드 생성 프롬프트 작성
4. [PromStack] 에이전트로 보일러플레이트 생성
5. 개발 시작!
```

### 시나리오 2: 기술 블로그 작성

```text
1. [LinkStack] 주제 관련 아티클 10개 수집
2. [LinkStack] 핵심 인사이트 하이라이트
3. [PromStack] 블로그 작성 에이전트 실행
   - LinkStack 도구로 참고 자료 검색
   - 하이라이트 기반 초안 작성
4. 편집 후 발행
```

### 시나리오 3: 코드 리뷰

```text
1. [PromStack] 코드 리뷰 프롬프트 불러오기
2. [LinkStack] 팀 코딩 컨벤션 문서 검색
3. Claude Code에서 두 정보 결합해 리뷰 수행
4. [LinkStack] 발견된 패턴을 하이라이트로 저장
```

## 🛠 통합 설정 가이드

### Step 1: 두 서비스 가입

- [PromStack](https://promstack.com) 가입
- [LinkStack](https://link.promstack.com) 가입 (또는 크롬 익스텐션 설치)

### Step 2: API 키 발급

- PromStack: 설정 → API 키 → 새 키 생성
- LinkStack: 설정 → API 키 → 새 키 생성

### Step 3: MCP 설정 (Cursor 예시)

`~/.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "promstack": {
      "url": "https://mcp.promstack.com",
      "headers": {
        "PROMSTACK_API_KEY": "pm_xxxxxxxx"
      }
    },
    "linkstack": {
      "url": "https://linkmcp.promstack.com",
      "headers": {
        "LINKSTACK_API_KEY": "lk_xxxxxxxx"
      }
    }
  }
}
```

### Step 4: 활용 시작

Cursor에서:

```text
> promstack에서 버그 분석 프롬프트 찾아줘
> linkstack에서 최근 저장한 에러 해결 문서 검색해줘
> 두 정보를 결합해서 이 버그를 분석해줘
```

## 📊 생산성 개선 효과

| 작업 | 기존 방식 | PromStack+LinkStack |
| ---- | --------- | ------------------- |
| 프롬프트 재사용 | 복붙, 검색 | MCP로 즉시 호출 |
| 참고 자료 찾기 | 북마크, 노션 | 태그/검색으로 즉시 |
| 에이전트 지식 주입 | 수동 복사 | 자동 도구 연동 |
| 컨텍스트 전환 | 탭 여러 개 | AI 에디터에서 통합 |

**예상 시간 절약: 작업당 30-50%**

## 🎯 추천 조합

| 역할 | 추천 활용법 |
| ---- | ---------- |
| 개발자 | MCP 듀얼 연동 + Claude Code |
| PM | LinkStack 리서치 + PromStack 에이전트 |
| 콘텐츠 크리에이터 | LinkStack 자료 수집 + 글쓰기 에이전트 |
| 연구원 | 논문 하이라이트 + 분석 프롬프트 |

## 🚀 지금 시작하기

1. **[PromStack 가입](https://promstack.com)** - 프롬프트 관리 시작
2. **[LinkStack 설치](https://link.promstack.com)** - 지식 관리 시작
3. **MCP 설정** - AI 에디터에서 통합 사용
4. **워크플로우 구축** - 나만의 AI 개발 파이프라인 완성

---

PromStack과 LinkStack의 시너지로 AI 개발 생산성을 극대화하세요. **프롬프트 + 지식 = 완벽한 AI 워크플로우**

**[PromStack](https://promstack.com) | [LinkStack](https://link.promstack.com)**
