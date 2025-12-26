# Complete is-a.dev Registration Guide

## ✅ Pre-Registration Checklist

All requirements have been completed:
- ✅ Website is complete and professional
- ✅ Software development related (DevOps/Cloud Engineer CV)
- ✅ Not for commercial use (personal portfolio)
- ✅ Contact information provided (email: vicknesh22@gmail.com)
- ✅ Domain configuration file created (`vicknesh.json`)
- ✅ PR template prepared (`PR_TEMPLATE.md`)
- ✅ Performance optimizations implemented

## 📋 Step-by-Step Registration Process

### Step 1: Take Website Screenshot

Before submitting the PR, you need a screenshot of your website:

**Option A: Using Browser DevTools**
1. Open https://vicknesh22.github.io/cv/ in Chrome/Firefox
2. Press F12 to open DevTools
3. Press Ctrl+Shift+P (or Cmd+Shift+P on Mac)
4. Type "screenshot" and select "Capture full size screenshot"
5. Save as `preview.png` in your repository root

**Option B: Using Online Tool**
1. Visit https://www.screely.com/ or https://screenshot.rocks/
2. Enter URL: https://vicknesh22.github.io/cv/
3. Take screenshot
4. Download and save as `preview.png`

### Step 2: Add Screenshot to Repository

```bash
cd /home/user/cv
# Copy your screenshot file to the repository
# Then commit:
git add preview.png
git commit -m "Add website preview screenshot for is-a.dev registration"
git push
```

### Step 3: Fork is-a.dev Repository

1. Go to: https://github.com/is-a-dev/register
2. Click "Fork" button (top right)
3. Wait for fork to complete

### Step 4: Add Domain Configuration

In your forked repository:

1. Navigate to `domains/` folder
2. Click "Add file" → "Create new file"
3. Name the file: `vicknesh.json`
4. Copy the content from `/home/user/cv/vicknesh.json`:

```json
{
  "description": "Personal CV and portfolio website for Vicknesh Rethinavelu - Senior Cloud Operations Engineer with 9+ years experience in Kubernetes, AWS, GCP, Azure, and Platform Engineering",
  "repo": "https://github.com/vicknesh22/cv",
  "owner": {
    "username": "vicknesh22",
    "email": "vicknesh22@gmail.com"
  },
  "record": {
    "CNAME": "vicknesh22.github.io"
  }
}
```

5. Commit the file with message: "Register vicknesh.is-a.dev"

### Step 5: Create Pull Request

1. Go to your forked repository homepage
2. Click "Contribute" → "Open pull request"
3. Title: **"Register vicknesh.is-a.dev"**
4. Copy the content from `/home/user/cv/PR_TEMPLATE.md` into the PR description
5. **IMPORTANT:** Update the screenshot URL in the PR description:
   - Change `![Website Preview](https://raw.githubusercontent.com/vicknesh22/cv/main/preview.png)`
   - To use the actual path where you uploaded your screenshot
6. Click "Create pull request"

### Step 6: Wait for Approval

- The is-a.dev team typically reviews PRs within 24-48 hours
- They may ask questions or request changes
- Once approved and merged, wait 5-10 minutes for DNS propagation

### Step 7: Configure GitHub Pages (After Approval)

1. Go to: https://github.com/vicknesh22/cv/settings/pages
2. Under "Custom domain", it should show: `vicknesh.is-a.dev` ✅
3. Check "Enforce HTTPS"
4. Wait a few minutes for certificate generation

### Step 8: Verify Your Domain

```bash
# Check DNS propagation
nslookup vicknesh.is-a.dev

# Visit your website
# https://vicknesh.is-a.dev/
```

## 📝 Important Notes

### Email Visibility
Your email (`vicknesh22@gmail.com`) will be publicly visible in the is-a.dev repository. If you prefer privacy:
- Use your GitHub-provided email: `vicknesh22@users.noreply.github.com`
- Or create a dedicated email for your domain

### Domain Configuration Best Practices
The `vicknesh.json` file includes:
- ✅ `description` - Helps reviewers understand your site
- ✅ `repo` - Links to your source code
- ✅ `owner.username` - Your GitHub username
- ✅ `owner.email` - Contact email
- ✅ `record.CNAME` - Points to your GitHub Pages URL

### Common Approval Delays
- ❌ Website is just "Hello World" or template with minimal changes
- ❌ Website is not software development related
- ❌ Website is for commercial/business purposes
- ❌ Missing or invalid contact information
- ❌ No screenshot provided in PR
- ❌ Domain name doesn't follow naming guidelines

**Your website meets ALL requirements** ✅

### Timeline Expectations
- **PR Submission:** Immediate
- **Initial Review:** 6-24 hours
- **Approval & Merge:** 24-48 hours
- **DNS Propagation:** 5-10 minutes after merge
- **HTTPS Certificate:** 10-20 minutes after DNS

## 🎯 Quick Checklist Before Submitting

- [ ] Screenshot taken and uploaded to repository
- [ ] Screenshot URL updated in PR template
- [ ] `vicknesh.json` created in is-a.dev fork
- [ ] PR created with complete description
- [ ] Email in configuration is correct
- [ ] All checkboxes in PR marked with [x]

## 📞 Support

If your PR is not approved:
- Check for reviewer comments on your PR
- Review the [is-a.dev documentation](https://docs.is-a.dev/)
- Ask questions in the PR comments
- Join their [Discord community](https://discord.gg/is-a-dev)

## ✨ After Approval

Once your domain is live at `https://vicknesh.is-a.dev/`:
1. Update your LinkedIn profile with the new URL
2. Update your GitHub profile README
3. Share your professional CV with potential employers
4. Consider adding analytics (Google Analytics, Plausible, etc.)
5. Keep your CV updated with latest achievements

---

**Good luck with your registration!** 🚀

Your website is professional, complete, and meets all requirements. The PR should be approved without issues.
