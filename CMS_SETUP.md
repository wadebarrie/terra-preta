# Decap CMS Setup Guide for Netlify

This project is now configured with **Decap CMS** (formerly Netlify CMS), a free, open-source, git-based content management system that integrates seamlessly with Netlify.

## What's Been Set Up

✅ **CMS Admin Interface** - Access at `/admin` after deployment
✅ **Content Collections** - Case Studies, Blog Posts, Team Members, Pages, and Settings
✅ **Initial Content** - Sample content to get you started
✅ **Netlify Configuration** - Ready to deploy

## Content You Can Manage

- **Case Studies** - Client success stories with images and results
- **Blog Posts** - Articles and updates
- **Team Members** - Staff profiles with photos and bios
- **Home Page** - Hero section, features, and outcomes
- **About Page** - Company story and facility information
- **Product Info** - Terra Revive details and specifications
- **Site Settings** - Contact info, social media, etc.

## Deployment to Netlify

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Add Decap CMS configuration"
git push origin main
```

### Step 2: Deploy to Netlify

1. Go to [Netlify](https://netlify.com) and sign in
2. Click "Add new site" → "Import an existing project"
3. Choose your Git provider (GitHub, GitLab, etc.)
4. Select your `terra-preta` repository
5. Netlify should auto-detect the build settings from `netlify.toml`
6. Click "Deploy site"

### Step 3: Enable Netlify Identity

This is required for CMS authentication:

1. In your Netlify site dashboard, go to **Site settings** → **Identity**
2. Click **Enable Identity**
3. Under **Registration preferences**, select "Invite only" (recommended)
4. Under **External providers** (optional), you can enable GitHub, Google, etc.
5. Under **Services** → **Git Gateway**, click **Enable Git Gateway**

### Step 4: Invite Yourself as a User

1. Go to the **Identity** tab in your Netlify dashboard
2. Click **Invite users**
3. Enter your email address
4. Check your email and click the invitation link
5. Set your password

### Step 5: Access the CMS

1. Go to `https://your-site-name.netlify.app/admin`
2. Log in with your credentials
3. Start managing your content!

## Using the CMS

### Accessing the Admin Interface

Once deployed, visit: `https://your-site-name.netlify.app/admin`

### Creating New Content

1. Log into the admin interface
2. Click on the collection you want to add to (e.g., "Blog Posts" or "Case Studies")
3. Click **New Blog Post** or **New Case Study**
4. Fill in the fields
5. Click **Publish** → **Publish now**

The content will be committed directly to your Git repository!

### Editing Existing Content

1. Click on any collection (e.g., "Team Members")
2. Click on an item to edit it
3. Make your changes
4. Click **Publish** → **Publish now**

### Uploading Images

1. When editing content, look for image fields
2. Click **Choose an image**
3. Upload from your computer
4. Images are stored in `client/public/uploads/`

## Content Structure

All content is stored in the `content/` folder:

```
content/
├── case-studies/     # Markdown files for case studies
├── blog/             # Markdown files for blog posts
├── team/             # Markdown files for team members
├── pages/            # JSON files for page content
│   ├── home.json
│   ├── about.json
│   └── terra-revive.json
└── settings/         # JSON files for site settings
    └── general.json
```

## Customizing the CMS

To customize the CMS, edit `client/public/admin/config.yml`:

- Add new collections
- Modify existing fields
- Change upload directories
- Add validation rules

After making changes, commit and push to your repository. The CMS will automatically update.

## Integrating CMS Content into Your Site

To use the CMS content in your React components, you have two options:

### Option 1: Build-time Integration

Use a tool like `vite-plugin-markdown` or write a simple script to read the content files during build and import them into your components.

### Option 2: Runtime API

Create an API endpoint that reads the content files and serves them to your React components.

### Example: Reading Case Studies

```typescript
// In a future update, you could create a utility like this:
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function getCaseStudies() {
  const contentDir = path.join(process.cwd(), 'content/case-studies');
  const files = fs.readdirSync(contentDir);
  
  return files.map(filename => {
    const fileContent = fs.readFileSync(
      path.join(contentDir, filename),
      'utf-8'
    );
    const { data, content } = matter(fileContent);
    return { ...data, content, slug: filename.replace('.md', '') };
  });
}
```

## Why Decap CMS?

- ✅ **100% Free** - No subscriptions or usage limits
- ✅ **Git-based** - Content stored in your repository
- ✅ **No external dependencies** - No third-party services required
- ✅ **Editorial workflow** - Optional draft/review/publish workflow
- ✅ **Custom preview** - See changes before publishing
- ✅ **Open source** - Full control and extensibility

## Support & Documentation

- [Decap CMS Documentation](https://decapcms.org/docs/)
- [Netlify Identity Documentation](https://docs.netlify.com/visitor-access/identity/)
- [Git Gateway Documentation](https://docs.netlify.com/visitor-access/git-gateway/)

## Security Best Practices

1. Keep **Registration preferences** set to "Invite only"
2. Use strong passwords
3. Regularly review invited users in Netlify Identity
4. Enable two-factor authentication on your Git provider
5. Only invite trusted team members

## Next Steps

1. Deploy to Netlify following the steps above
2. Enable Identity and Git Gateway
3. Invite yourself as a user
4. Log into `/admin` and start managing content
5. Gradually migrate hard-coded content to the CMS
6. Invite team members who need to edit content

## Troubleshooting

### "Error loading the CMS configuration"
- Check that `client/public/admin/config.yml` is valid YAML
- Ensure Git Gateway is enabled in Netlify

### "Unable to authenticate"
- Verify Netlify Identity is enabled
- Check that you've accepted the user invitation
- Try logging out and back in

### "Unable to save"
- Ensure Git Gateway is enabled
- Check that your user has write permissions
- Verify the branch name in `config.yml` matches your repo

---

**Your CMS is ready to use!** Once deployed to Netlify with Identity enabled, you'll have a powerful, free content management system at your fingertips.

