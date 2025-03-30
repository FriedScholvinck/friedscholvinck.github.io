# How to enable any LLM from `⌘ + space` on your Mac?

If you're a developer, you've probably experienced those moments when you need a quick answer while coding or doing some other task.. ChatGPT's desktop app has made this incredibly convenient with its global shortcut `⌥ + space` (Option + Space). No matter what application you're in, whether it's your code editor, terminal, or browser, you can instantly summon ChatGPT with this keyboard combination and it will present you with a floating chat interface.

This seamless integration into your workflow is a game-changer for productivity. Instead of context-switching to your browser, logging in, and navigating to ChatGPT, you can get answers without breaking your flow. 

This is usefull, but it is not easy to modify its behavior or call other LLMs from this shortcut. Raycast offers more flexibility and customization options with its extendable architecture.

## Setting up Raycast with ChatGPT

First, install [Raycast](https://www.raycast.com/) if you haven't already. It's a powerful productivity tool that can replace Spotlight on macOS.

Once installed, open Raycast (default shortcut is `⌘ + space`) and follow these steps:

1. Press `⌘ + ,` to open Raycast preferences
2. Go to Extensions
3. Search for "ChatGPT" in the Store tab
4. Click Install

## Configuring the Extension

After installation, you'll need to configure the extension with your API key:

1. Open Raycast preferences again
2. Go to Extensions > ChatGPT
3. Click on the extension settings
4. Enter your API key

By default, the extension uses OpenAI's API endpoint. However, you can modify the base URL to point to any compatible API endpoint.

## Using Alternative LLM Providers

### OpenRouter

To use OpenRouter instead of OpenAI directly:

1. Get an API key from [OpenRouter](https://openrouter.ai/)
2. In the extension settings, change the API Base URL to:
   ```
   https://openrouter.ai/api/v1
   ```
3. Enter your OpenRouter API key

Now you can use any model available on OpenRouter directly from Raycast!

### Self-hosted OpenWebUI

If you're running your own OpenWebUI instance (as described in my [previous post](/blog/openwebui)), you can point Raycast to your deployment:

1. In the extension settings, change the API Base URL to your OpenWebUI instance:
   ```
   https://your-openwebui-instance.com/v1
   ```
2. Use your OpenWebUI API key

This setup allows you to:
- Use your private RAG endpoints
- Access company-specific knowledge bases
- Keep sensitive queries within your infrastructure
- Use any model you've configured in OpenWebUI

## Using the Extension

Once configured, you can:

1. Press `⌘ + space` to open Raycast
2. Type "chat" or your configured keyword
3. Press Enter to start a new conversation
4. Start typing your query

The extension supports:
- Markdown formatting
- Code highlighting
- Conversation history
- Multiple chat sessions
- Custom system prompts

## Pro Tips

- Configure a dedicated shortcut for the ChatGPT extension in Raycast preferences
- Create different shortcuts for different models or RAG configurations
- Use the "Always on Top" feature to keep the chat window visible while working
- Leverage keyboard shortcuts within the chat interface for faster interaction

This setup gives you the flexibility to use any LLM provider while maintaining the convenience of a global shortcut. Whether you're using OpenAI directly, accessing multiple models through OpenRouter, or leveraging your own OpenWebUI deployment with custom RAGs, it's all available through the same familiar interface.
