---
title: 'PromStack 소개 - AI 네이티브 팀을 위한 올인원 프롬프트 관리 플랫폼'
description: 'AI 프롬프트 관리, 에이전트 빌더, 테스트 자동화, MCP 통합까지. PromStack의 핵심 기능과 사용 방법을 소개합니다.'
pubDate: 'Jan 08 2026'
heroImage: '../../assets/blog-placeholder-3.jpg'
---

PromStack은 **AI 네이티브 팀을 위한 올인원 협업 플랫폼**입니다. 프롬프트 엔지니어링부터 AI 에이전트 구축, 테스트 자동화, MCP 통합까지 모든 LLMOps 작업을 하나의 플랫폼에서 처리할 수 있습니다.

## 🎯 왜 PromStack인가?

AI 시대에 프롬프트는 소프트웨어의 핵심 자산입니다. 하지만 많은 팀들이 프롬프트를 노션, 구글 독스, 심지어 메모장에 관리하고 있습니다. PromStack은 이 문제를 해결합니다.

### 이런 분들께 추천합니다

| 역할 | 활용 방법 |
|------|----------|
| **개발자** | 프롬프트 버전 관리, MCP로 IDE 연동, API SDK로 앱 통합 |
| **PM/기획자** | 코드 없이 AI 에이전트 생성, 모델 비교, 팀원들과 프롬프트 공유 |
| **AI 연구원** | AI 테스트 분석으로 실패 패턴 분석, 프롬프트 자동 개선 |
| **기업** | 팀 협업, MCP Skills 내보내기, 감사 로그로 안전한 AI 운영 |

## ✨ 핵심 기능

### 1. 프롬프트 버전 관리

Git처럼 프롬프트의 모든 변경사항을 추적하세요.

- **자동 버전 생성** - 수정할 때마다 자동으로 히스토리 저장
- **브랜칭** - 실험적 변경을 분기해서 테스트
- **복원** - 언제든 이전 버전으로 돌아가기
- **비교** - 버전 간 차이점 시각화

```typescript
// SDK를 통한 프롬프트 조회
const client = new PromStackClient({ apiKey: 'your-api-key' });
const prompts = await client.getPrompts({ category: 'writing' });
```

### 2. AI 에이전트 빌더

코드 한 줄 없이 나만의 AI 어시스턴트를 만드세요.

- **다중 AI 모델** - GPT-4, Claude 3.5 Sonnet 등 원하는 모델 선택
- **내장 도구** - 계산기, 웹 검색, 날씨, 시간, 주식 정보
- **커스텀 API** - 외부 HTTP API를 도구로 연동
- **MCP 서버** - Model Context Protocol로 확장

### 3. 테스트 센터

AI 프롬프트의 품질을 체계적으로 검증하세요.

| 기능 | 설명 |
|------|------|
| **배치 테스트** | CSV/JSON으로 대량 테스트 케이스 한 번에 실행 |
| **LLM Judge** | AI가 응답 품질을 자동으로 평가 |
| **Model Arena** | 최대 3개 모델을 블라인드 비교 |
| **AI 분석** | 실패 패턴 도출 및 개선안 자동 생성 |

### 4. 워크플로우 자동화

드래그앤드롭으로 복잡한 AI 작업을 자동화하세요.

```
Start → Agent → HTTP → Email
 📍      🤖      🌐      📧
```

16종의 노드를 조합해 다양한 자동화 시나리오를 구축할 수 있습니다.

## 🔌 MCP 통합

PromStack은 **Model Context Protocol (MCP)** 를 완벽하게 지원합니다. Claude Desktop이나 VS Code에서 프롬프트 라이브러리에 직접 접근하세요.

```json
{
  "mcpServers": {
    "promstack": {
      "url": "https://mcp.promstack.com",
      "headers": {
        "PROMSTACK_API_KEY": "YOUR_API_KEY"
      }
    }
  }
}
```

### 지원 도구

- `list_prompts` - 프롬프트 목록 조회
- `get_prompt` - 특정 프롬프트 상세 정보
- `select_prompt` - 작업에 맞는 프롬프트 자동 추천
- `export_skill` - Claude Skills 형식으로 내보내기

## 💰 가격 정책

| 플랜 | 가격 | 주요 기능 |
|------|------|----------|
| **Starter** | ₩0 | 프로젝트 2개, 프롬프트 10개, 에이전트 2개 |
| **Plus** | ₩9,900/월 | 배치 테스트, AI 분석, 워크플로우 |
| **Pro** | ₩21,900/월 | 무제한, LLM Judge, Model Arena |

> 💡 연간 결제 시 17% 할인 (2개월 무료)

## 🚀 시작하기

1. [promstack.com](https://promstack.com)에서 무료 계정 생성
2. 첫 번째 프롬프트 작성
3. 에이전트 빌더로 AI 어시스턴트 만들기
4. MCP로 IDE에 연동

---

AI 시대의 프롬프트 관리, PromStack과 함께 시작하세요.

**[PromStack 바로가기 →](https://promstack.com)**
