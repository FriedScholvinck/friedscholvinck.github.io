# Supercharge Your Raycast Experience: Connect to Custom AI Models

Ever felt like you're missing out by only using the default ChatGPT model in Raycast? With a simple tweak, you can connect Raycast to your own custom OpenWebUI models or access the variety of models available through OpenRouter. Let me show you how to unlock this hidden potential.

## The Magic of Custom Models

Raycast is already a productivity powerhouse, but the default ChatGPT extension limits you to OpenAI's models. Meanwhile, you might have local models running through OpenWebUI or want to tap into the diverse offerings on OpenRouter.

The good news? You don't need a completely new extension or complex setup. With a simple URL change, you can redirect your existing ChatGPT extension to work with these alternative sources.

## Getting It Done

Here's the straightforward process to connect your Raycast ChatGPT extension to custom models:

1. **Install prerequisites**
   - Make sure you have Raycast installed
   - Install the ChatGPT extension if you haven't already
   - Have your OpenWebUI instance running or an OpenRouter account set up

2. **Find the extension settings**
   - Open Raycast (⌘+Space)
   - Type "Extensions" and select "Extensions" from the results
   - Find and select "ChatGPT" from your installed extensions
   - Click on "Extension Settings"

3. **Change the base URL**
   - Look for the "API URL" or "Base URL" field
   - For OpenWebUI: Replace the default URL with your local instance URL (typically something like `http://localhost:8080/v1`)
   - For OpenRouter: Use `https://openrouter.ai/api/v1`

4. **Add your API key**
   - For OpenWebUI: Enter your local instance API key
   - For OpenRouter: Enter your OpenRouter API key

5. **Configure model options (if available)**
   - Some setups may allow you to specify which model you want to use
   - This might be in a separate field called "Model" or similar

6. **Test your connection**
   - Close the settings
   - Open a new chat in Raycast
   - Try sending a message to verify your custom model responds

## The Benefits You'll Notice

After making this change, you'll immediately gain several advantages:

- **Access to specialized models**: Use models fine-tuned for coding, creative writing, or specific knowledge domains
- **Cost savings**: Local models have no usage fees, and OpenRouter might offer better pricing for certain models
- **Privacy control**: Keep sensitive queries on your local machine rather than sending them to OpenAI
- **Consistent experience**: Use the same familiar Raycast interface while leveraging different AI backends
- **Flexibility**: Switch between different models for different tasks without changing your workflow

## Troubleshooting Tips

If things aren't working right away:

- Double-check your API key for typos
- Verify your base URL includes the correct endpoint path
- Ensure your local instance is actually running (if using OpenWebUI)
- Check your OpenRouter account for any usage limits or restrictions
- Restart Raycast after making changes

## Final Thoughts

This simple modification opens up a world of possibilities for your Raycast workflow. Whether you're running local models to keep your data private or tapping into OpenRouter's model marketplace for specialized AI capabilities, you're no longer limited to just what the default extension offers.

Give it a try - you might be surprised at how much more useful your Raycast experience becomes with the right AI model for each specific task.

Happy prompting!