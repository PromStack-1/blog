---
title: 'Claude Code 시작 가이드 - 터미널에서 AI와 코딩하기'
description: 'Anthropic의 Claude Code를 설치하고 활용하는 방법. MCP 연동부터 실전 코딩 팁까지 완벽 정리.'
pubDate: 'Jan 09 2026'
heroImage: '../../assets/blog-placeholder-2.jpg'
---

Claude Code는 Anthropic이 만든 **터미널 기반 AI 코딩 어시스턴트**입니다. Cursor나 GitHub Copilot과 달리 CLI에서 직접 AI와 대화하며 코드를 작성할 수 있습니다.

## 🚀 Claude Code 설치

### 1. 설치

```bash
npm install -g @anthropic-ai/claude-code
```

### 2. 인증

```bash
claude login
```

브라우저에서 Anthropic 계정으로 로그인합니다.

### 3. 시작

```bash
claude
```

터미널에서 바로 Claude와 대화를 시작할 수 있습니다!

## 💬 기본 사용법

### 터미널에서 질문하기

```bash
claude "이 함수를 최적화해줘"
```

### 인터랙티브 모드

```bash
claude
> 안녕, React 프로젝트를 시작하고 싶어
> 로그인 폼 컴포넌트를 만들어줘
> exit
```

### 파일 컨텍스트 제공

```bash
claude --file src/app.tsx "이 코드의 버그를 찾아줘"
```

### 전체 디렉토리 분석

```bash
claude --dir ./src "프로젝트 구조를 설명해줘"
```

## 🔌 MCP 서버 연동

Claude Code의 진정한 힘은 **MCP 서버 연동**에서 나옵니다.

### MCP 서버 추가하기

```bash
claude mcp add --transport http promstack https://mcp.promstack.com \
  --header "PROMSTACK_API_KEY: YOUR_API_KEY"
```

### 연결된 서버 확인

```bash
claude mcp list
```

### 서버 제거

```bash
claude mcp remove promstack
```

## 🎯 실전 활용 예시

### 1. 프로젝트 초기화

```bash
claude "Next.js 14 + TypeScript + Tailwind 프로젝트를 만들어줘"
```

Claude가 직접 `npx create-next-app` 명령어를 실행합니다.

### 2. 코드 리팩토링

```bash
claude --file utils/api.ts "이 API 클라이언트를 클래스로 리팩토링해줘"
```

### 3. 테스트 작성

```bash
claude --file src/components/Button.tsx "이 컴포넌트의 Jest 테스트를 작성해줘"
```

### 4. PromStack 프롬프트 활용

MCP 연동 후:

```
> promstack에서 코드 리뷰 프롬프트를 찾아줘
> 그 프롬프트로 이 파일을 리뷰해줘
```

### 5. Git 커밋 메시지 생성

```bash
claude "현재 스테이징된 변경사항을 보고 커밋 메시지를 작성해줘"
```

## ⚙️ 설정 커스터마이징

### 기본 설정 파일

`~/.claude/config.json`:

```json
{
  "model": "claude-sonnet-4-20250514",
  "maxTokens": 4096,
  "systemPrompt": "당신은 시니어 풀스택 개발자입니다. 한국어로 답변하세요."
}
```

### 프로젝트별 설정

프로젝트 루트에 `.claude/config.json` 생성:

```json
{
  "systemPrompt": "이 프로젝트는 React + TypeScript를 사용합니다. ESLint와 Prettier 규칙을 준수하세요."
}
```

## 🔥 파워 유저 팁

### 1. 별칭(Alias) 설정

`.zshrc` 또는 `.bashrc`:

```bash
alias cc="claude"
alias ccode="claude --dir ."
alias creview="claude --file $1 '코드 리뷰해줘'"
```

### 2. 파이프라인 활용

```bash
git diff | claude "이 변경사항을 요약해줘"
```

```bash
cat error.log | claude "이 에러의 원인을 분석해줘"
```

### 3. 출력 저장

```bash
claude "README.md 템플릿을 작성해줘" > README.md
```

### 4. 세션 유지

```bash
claude --session "프로젝트 X 개발"
```

세션 이름으로 이전 대화를 이어갈 수 있습니다.

## 🆚 Cursor vs Claude Code

| 기능 | Cursor | Claude Code |
|------|--------|-------------|
| **인터페이스** | GUI (VS Code 기반) | CLI (터미널) |
| **파일 편집** | 직접 편집 | 제안 후 확인 |
| **MCP 지원** | ✅ | ✅ |
| **자동완성** | ✅ | ❌ |
| **Git 통합** | ✅ | ✅ |
| **가격** | $20/월 | API 사용량 기반 |

> 💡 두 도구를 함께 사용하는 것도 좋습니다. Cursor로 에디팅하고 Claude Code로 분석과 질문!

## ⚠️ 주의사항

1. **API 비용** - Claude Code는 API 호출 기반이므로 사용량에 따라 비용 발생
2. **문맥 제한** - 너무 큰 파일은 여러 번 나눠서 전달
3. **민감 정보** - API 키나 비밀번호가 포함된 파일 주의

## 🔗 PromStack과 함께 사용하기

Claude Code에서 PromStack 프롬프트를 바로 사용하세요:

```bash
# MCP 서버 추가
claude mcp add --transport http promstack https://mcp.promstack.com \
  --header "PROMSTACK_API_KEY: YOUR_API_KEY"

# 프롬프트 검색
claude
> promstack에서 버그 분석 프롬프트를 찾아줘
> 이 프롬프트로 error.log를 분석해줘
```

---

Claude Code로 터미널에서 AI와 함께 코딩하세요. MCP 연동으로 PromStack의 프롬프트 라이브러리까지 활용하면 개발 생산성이 크게 향상됩니다!

**[PromStack API 키 발급 →](https://promstack.com/settings/api-keys)**
