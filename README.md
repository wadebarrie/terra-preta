# Terra Preta Organics

Soil amendment products for reclamation sites across Alberta and the Prairies.

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- pnpm 10+

### Local Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Type check
pnpm check

# Format code
pnpm format
```

## 📝 Content Management System

This project uses **Decap CMS** (formerly Netlify CMS) - a free, open-source, git-based content management system.

### Quick Access
- **CMS Admin**: `/admin` (after deployment with Netlify Identity)
- **Documentation**: See `QUICK_START_CMS.md`

### What You Can Manage
- 📄 Case Studies
- 📝 Blog Posts
- 👥 Team Members
- 🏠 Page Content (Home, About, Product)
- ⚙️ Site Settings

## 🌐 Deployment to Netlify

### Fast Deploy

1. **Push to Git**:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy on Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Import your repository
   - Deploy (settings auto-configured)

3. **Enable CMS** (in Netlify Dashboard):
   - Enable Identity
   - Enable Git Gateway
   - Invite users

4. **Access CMS**:
   - Visit `https://your-site.netlify.app/admin`

### Detailed Guides
- 📘 **Quick Start**: `QUICK_START_CMS.md`
- 📗 **Full Setup**: `CMS_SETUP.md`
- 📙 **Content Integration**: `CONTENT_INTEGRATION.md`
- 📕 **Netlify Deployment**: `NETLIFY_DEPLOYMENT.md`
- 📊 **Optimizations**: `OPTIMIZATION_SUMMARY.md`

## 🎯 Features

### Content Management
- ✅ User-friendly CMS interface
- ✅ Git-based version control
- ✅ Image upload support
- ✅ Markdown editor
- ✅ No external dependencies

### Performance
- ✅ Optimized build process
- ✅ CDN delivery
- ✅ Image caching (1 year)
- ✅ Security headers
- ✅ Fast page loads

### Developer Experience
- ✅ TypeScript
- ✅ React 19
- ✅ TailwindCSS
- ✅ tRPC
- ✅ Vite
- ✅ Hot reload

## 📁 Project Structure

```
terra-preta/
├── client/                    # Frontend application
│   ├── public/
│   │   ├── admin/            # CMS admin interface
│   │   └── uploads/          # User uploaded images
│   └── src/
│       ├── components/       # React components
│       ├── pages/            # Page components
│       └── lib/              # Utilities & content loaders
├── server/                    # Backend API
│   ├── _core/                # Core server functionality
│   └── contentRouter.ts      # Content API endpoints
├── content/                   # CMS content files
│   ├── case-studies/         # Case study markdown files
│   ├── blog/                 # Blog post markdown files
│   ├── team/                 # Team member profiles
│   ├── pages/                # Page content (JSON)
│   └── settings/             # Site settings (JSON)
├── shared/                    # Shared types & constants
└── drizzle/                   # Database schema & migrations
```

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **TypeScript** - Type safety
- **TailwindCSS** - Styling
- **Wouter** - Routing
- **tRPC** - Type-safe API
- **Tanstack Query** - Data fetching

### Backend
- **Express** - Server framework
- **tRPC** - API layer
- **Drizzle ORM** - Database
- **MySQL** - Database

### CMS & Deployment
- **Decap CMS** - Content management
- **Netlify** - Hosting & deployment
- **Git Gateway** - Authentication
- **Netlify Identity** - User management

## 🔧 Development

### Available Scripts

```bash
pnpm dev        # Start dev server
pnpm build      # Build for production
pnpm start      # Start production server
pnpm check      # TypeScript type check
pnpm format     # Format code with Prettier
pnpm test       # Run tests
pnpm db:push    # Update database schema
```

### Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
# Required
NODE_ENV=development
DATABASE_URL=mysql://...
SESSION_SECRET=your-secret

# Optional
OPENAI_API_KEY=...
AWS_ACCESS_KEY_ID=...
```

## 📚 Content Integration

### Import JSON Content

```typescript
import homeContent from '../../../content/pages/home.json';

<h1>{homeContent.heroTitle}</h1>
```

### Use Content API

```typescript
import { trpc } from '@/lib/trpc';

function CaseStudies() {
  const { data } = trpc.content.getCaseStudies.useQuery();
  return <>{/* render case studies */}</>;
}
```

## 🚢 Production Deployment

### Netlify (Recommended)

1. Connect repository to Netlify
2. Configure environment variables
3. Enable Identity & Git Gateway
4. Deploy!

### Manual Deployment

```bash
pnpm build
# Upload dist/ to your hosting provider
```

## 💰 Cost

**Total: $0/month** 🎉

- Netlify Free Tier: 100GB bandwidth, 300 build minutes
- Decap CMS: Free forever
- Netlify Identity: Free for 1,000 users

## 📖 Documentation

- `QUICK_START_CMS.md` - Fast CMS setup
- `CMS_SETUP.md` - Complete CMS guide
- `CONTENT_INTEGRATION.md` - Using CMS content
- `NETLIFY_DEPLOYMENT.md` - Deployment guide
- `OPTIMIZATION_SUMMARY.md` - Performance optimizations

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT License - see LICENSE file for details

## 🆘 Support

For issues or questions:
- Check documentation in the project root
- Review [Netlify Docs](https://docs.netlify.com/)
- Consult [Decap CMS Docs](https://decapcms.org/docs/)

---

**Built with ❤️ for Terra Preta Organics**

