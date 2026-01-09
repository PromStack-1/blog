---
title: 'MCP (Model Context Protocol) 완벽 가이드 - AI 에이전트의 새로운 표준'
description: 'Anthropic이 발표한 MCP란 무엇인가? Claude Desktop, VS Code와 연동하는 방법부터 직접 MCP 서버를 구축하는 방법까지.'
pubDate: 'Jan 06 2026'
heroImage: '../../assets/blog-placeholder-5.jpg'
---

MCP(Model Context Protocol)는 Anthropic이 2024년 11월에 발표한 **AI 에이전트의 새로운 표준**입니다. AI 모델이 외부 도구와 데이터 소스에 접근하는 통합된 방식을 제공합니다.

## 🎯 MCP란 무엇인가?

기존에는 AI 모델이 외부 도구를 사용하려면 각 서비스마다 별도의 통합이 필요했습니다:

```
이전 방식:
Claude ─┬─ Slack API 연동
        ├─ GitHub API 연동  
        ├─ Database 연동
        └─ 각각 별도 구현 필요 😰
```

MCP는 이 문제를 해결합니다:

```
MCP 방식:
Claude ── MCP ─┬─ Slack Server
               ├─ GitHub Server
               ├─ Database Server
               └─ 표준화된 프로토콜 ✨
```

## 🔧 MCP 구성 요소

| 구성 요소 | 역할 |
|----------|------|
| **Host** | AI 모델을 실행하는 애플리케이션 (Claude Desktop 등) |
| **Client** | MCP 서버와 통신하는 클라이언트 |
| **Server** | 도구와 리소스를 제공하는 서버 |
| **Tool** | 서버가 제공하는 실행 가능한 기능 |
| **Resource** | 서버가 제공하는 데이터 |

## 🚀 Claude Desktop에서 MCP 사용하기

### 1. 설정 파일 열기

**Mac:**

```bash
code ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

**Windows:**

```bash
code %APPDATA%\Claude\claude_desktop_config.json
```

### 2. MCP 서버 추가

```json
{
  "mcpServers": {
    "promstack": {
      "url": "https://mcp.promstack.com",
      "headers": {
        "PROMSTACK_API_KEY": "YOUR_API_KEY"
      }
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"]
    }
  }
}
```

### 3. Claude 재시작

설정 저장 후 Claude Desktop을 재시작하면 MCP 도구가 활성화됩니다.

## 📝 PromStack MCP 사용법

PromStack은 MCP를 완벽하게 지원합니다. 프롬프트 라이브러리에 Claude에서 직접 접근할 수 있습니다.

### 지원 도구

| 도구 | 설명 |
|------|------|
| `list_prompts` | 프롬프트 목록 조회 (검색, 필터링) |
| `get_prompt` | 특정 프롬프트 상세 정보 |
| `select_prompt` | 작업 설명으로 최적 프롬프트 추천 |
| `export_skill` | Claude Skills 형식으로 내보내기 |

### 사용 예시

Claude에서 다음과 같이 질문할 수 있습니다:

> "PromStack에서 코드 리뷰 관련 프롬프트를 찾아줘"

> "마케팅 카피 작성 작업에 맞는 프롬프트를 추천해줘"

> "프롬프트 ID 42번을 Claude Skill 형식으로 내보내줘"

## 🛠 MCP 서버 직접 구축하기

간단한 MCP 서버를 TypeScript로 구축하는 방법입니다.

### 1. 프로젝트 설정

```bash
mkdir my-mcp-server
cd my-mcp-server
npm init -y
npm install @modelcontextprotocol/sdk typescript
```

### 2. 서버 코드 작성

```typescript
// src/index.ts
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

const server = new Server({
  name: 'my-mcp-server',
  version: '1.0.0'
}, {
  capabilities: {
    tools: {}
  }
});

// 도구 정의
server.setRequestHandler('tools/list', async () => ({
  tools: [{
    name: 'hello',
    description: '인사말을 반환합니다',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string', description: '이름' }
      },
      required: ['name']
    }
  }]
}));

// 도구 실행
server.setRequestHandler('tools/call', async (request) => {
  if (request.params.name === 'hello') {
    const name = request.params.arguments?.name;
    return {
      content: [{
        type: 'text',
        text: `안녕하세요, ${name}님!`
      }]
    };
  }
});

// 서버 시작
const transport = new StdioServerTransport();
server.connect(transport);
```

### 3. 빌드 및 등록

```bash
npx tsc
```

Claude Desktop 설정에 추가:

```json
{
  "mcpServers": {
    "my-server": {
      "command": "node",
      "args": ["/path/to/my-mcp-server/dist/index.js"]
    }
  }
}
```

## 🌐 HTTP 기반 MCP 서버

로컬 실행이 아닌 원격 서버로 MCP를 제공할 수도 있습니다.

```json
{
  "mcpServers": {
    "remote-server": {
      "serverUrl": "https://api.example.com/mcp",
      "headers": {
        "Authorization": "Bearer TOKEN"
      }
    }
  }
}
```

PromStack의 MCP 서버가 이 방식으로 동작합니다:

```
https://mcp.promstack.com
```

## 🔐 보안 고려사항

MCP 서버를 구축할 때 주의할 점:

1. **인증 필수** - API 키나 토큰으로 접근 제어
2. **권한 최소화** - 꼭 필요한 도구만 제공
3. **입력 검증** - 모든 입력값 유효성 검사
4. **속도 제한** - API 남용 방지
5. **로깅** - 모든 요청 기록

## 📚 추가 자료

- [MCP 공식 문서](https://modelcontextprotocol.io)
- [MCP GitHub](https://github.com/modelcontextprotocol)
- [PromStack MCP 가이드](https://promstack.com/settings/api-keys)

---

MCP는 AI 에이전트 생태계의 게임 체인저입니다. 표준화된 프로토콜로 한 번 구축하면 모든 MCP 호환 AI에서 사용할 수 있습니다.

PromStack의 프롬프트 라이브러리를 MCP로 연동하고 싶다면 **[API 키 설정](https://promstack.com/settings/api-keys)** 에서 시작하세요.
