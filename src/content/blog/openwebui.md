# OpenWebUI: Open Source AI Chat for Your Company

I've always had a soft spot for open source software. There's something beautiful about the community-driven approach - people building things together just because they're useful and interesting. Lately, I've been thinking a lot about how open source AI applications are quietly catching up to proprietary solutions. The gap is closing faster than most people realize.

For me, it's also about sovereignty. I'm not particularly comfortable with my company's data living exclusively on servers in the US, controlled by a handful of tech giants. Digital independence matters, especially when you're working with sensitive information or simply want control over your tech stack.

That's why I've been experimenting with OpenWebUI, and thought I'd share my experience setting it up.

## What is OpenWebUI?

OpenWebUI is an open source web interface for interacting with AI models. Think of it as a self-hosted alternative to commercial AI chat platforms, but with more flexibility.

A common misconception is that you need to run local models to use something like OpenWebUI. That's not true at all. While you can connect it to locally-hosted models (via Ollama, for example), you can just as easily hook it up to commercial APIs through services like OpenRouter.ai, or directly to providers like OpenAI, Anthropic, or Google.

What makes OpenWebUI particularly useful for organizations is how it handles knowledge management. The platform makes it straightforward to set up custom RAGs (Retrieval Augmented Generation) and specialized assistants that can access your company's private documents and data. 

The access management is surprisingly simple too. You can configure user groups, implement single sign-on, and control who has access to which models and features without much fuss.

## Why Consider OpenWebUI?

For me, the main appeal is giving employees a consistent interface to interact with AI models in a way that's secure and cost-effective. Instead of everyone having separate commercial AI accounts (with separate billing!), you can centralize everything.

Cost management becomes much clearer. You're in control of which models are used, how they're used, and you don't have to deal with subscription fees or business licenses - just the actual usage costs of whatever API you're connecting to (if any).

There's also a learning component here. Getting your developers familiar with deploying open source applications is valuable experience. It's good practice for working outside the ecosystem of the big three US cloud providers, which builds resilience and flexibility into your team's skillset.

I've noticed that creating custom full-stack software has become remarkably accessible these days. Between modern frameworks, containers, and open source components, the barrier to entry for building your own solutions has dropped dramatically. That's why I suspect the SaaS model might not remain as profitable as it has been - when building your own becomes this easy, paying ongoing subscriptions makes less sense for many use cases.

## How to Deploy OpenWebUI

Setting up OpenWebUI is pretty straightforward. Here's how I did it on a basic VM from a European provider (I used Hetzner, but Contabo or any similar service works fine):

### Prerequisites

- A VM with 4GB RAM and 2 CPUs (more if you want to run local models)
- Ubuntu 20.04 or newer
- Docker and Docker Compose installed

### Step 1: Prepare Your VM

After creating your VM, SSH in and update the system:

```bash
ssh user@your-server-ip
sudo apt update && sudo apt upgrade -y
```

Install Docker and Docker Compose if they're not already available:

```bash
sudo apt install docker.io docker-compose -y
sudo systemctl enable docker
sudo systemctl start docker
```

### Step 2: Set Up Docker Compose

Make a directory for the project:

```bash
mkdir openwebui && cd openwebui
```

Create a `docker-compose.yml` file:

```bash
nano docker-compose.yml
```

Here's a basic configuration to get started:

```yaml
version: '3'
services:
  openwebui:
    image: ghcr.io/open-webui/open-webui:main
    container_name: openwebui
    restart: always
    ports:
      - "3000:3000"
    environment:
      - OPENWEBUI_BASE_URL=http://localhost:3000
      - OPENWEBUI_DEFAULT_MODELS=openai/gpt-3.5-turbo
      - OPENWEBUI_ADMIN_PASSWORD=change-this-password
      - OPENWEBUI_AUTH_SECRET=generate-a-64-character-key
    volumes:
      - ./data:/app/backend/data
```

If you want to use local models via Ollama, you can add that service:

```yaml
  ollama:
    image: ollama/ollama:latest
    container_name: ollama
    restart: always
    volumes:
      - ./ollama:/root/.ollama
```

And then update the OpenWebUI service to include:

```yaml
environment:
  - OLLAMA_API_BASE_URL=http://ollama:11434/api
```

### Step 3: Configure Security

Two environment variables are particularly important for security:

1. `OPENWEBUI_ADMIN_PASSWORD`: Set this to a strong password for the admin account

2. `OPENWEBUI_AUTH_SECRET`: This needs to be a long, random string. Generate one with:

```bash
openssl rand -hex 32
```

Copy the output and use it as your auth secret.

### Step 4: Start the Service

Launch everything with:

```bash
docker-compose up -d
```

Verify it's running:

```bash
docker-compose ps
```

### Step 5: Access and Configure

You can now access OpenWebUI at `http://your-server-ip:3000`

For proper production use, I'd recommend setting up Nginx with SSL:

```bash
sudo apt install nginx certbot python3-certbot-nginx -y
```

Create a basic Nginx config:

```bash
sudo nano /etc/nginx/sites-available/openwebui
```

With content like:

```
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable and secure it:

```bash
sudo ln -s /etc/nginx/sites-available/openwebui /etc/nginx/sites-enabled/
sudo certbot --nginx -d your-domain.com
sudo nginx -t && sudo systemctl reload nginx
```

### Step 6: Setup Your Models and Knowledge Base

Once logged in as admin, you can:

1. Add API connections to services like OpenAI, Anthropic, or OpenRouter
2. Configure local models if you're using Ollama
3. Upload documents to create knowledge bases
4. Set up user accounts and permissions

## Alternative: Using Coolify

If you prefer a more managed approach, Coolify makes deployment even simpler:

1. Install Coolify on your server
2. Create a new service and select "Docker Compose"
3. Use the same compose configuration from above
4. Deploy with a few clicks

## Some Security Considerations

- Change the default admin password immediately
- Generate a strong auth secret and keep it secure
- Always use HTTPS in production
- Consider network restrictions (firewall, VPN) for sensitive deployments
- Back up your data directory regularly:
  ```bash
  tar -czf openwebui-backup-$(date +%Y%m%d).tar.gz ./data
  ```
- Keep your installation updated:
  ```bash
  docker-compose pull
  docker-compose up -d
  ```

## Final Thoughts

OpenWebUI isn't perfect, but it represents something important - the democratization of AI tools. You don't need to be locked into specific vendors or platforms to give your team access to powerful AI capabilities.

What I appreciate most is the flexibility. As the AI landscape evolves and new models emerge, you can adapt without migration headaches or vendor lock-in. That kind of freedom is worth the small effort of setting up your own infrastructure.

Open source solutions like this remind me that technology works best when it empowers people to solve problems their own way. Whether you're looking for data sovereignty, cost control, or just a better way to provide AI tools to your team, it's worth giving OpenWebUI a try.