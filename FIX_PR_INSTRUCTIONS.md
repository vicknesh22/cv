# How to Fix Your is-a.dev PR #30844

## 🔴 Problem Identified

Your PR has an **incorrect CNAME configuration**. Here's why:

### Current (WRONG) Configuration:
```json
{
  "record": {
    "CNAME": "vicknesh22.github.io"  ❌ WRONG
  }
}
```

### Issue:
- Your repository is named `cv` (not `vicknesh22.github.io`)
- This makes it a **project site**, deployed at: `vicknesh22.github.io/cv`
- NOT a user site at: `vicknesh22.github.io`
- That's why you're getting a 404 error!

---

## ✅ Solution: Update Your PR

You need to update the file in your is-a.dev PR with the correct configuration:

### Updated (CORRECT) Configuration:
```json
{
  "description": "Personal CV and portfolio website for Vicknesh Rethinavelu - Senior Cloud Operations Engineer with 9+ years experience in Kubernetes, AWS, GCP, Azure, and Platform Engineering",
  "repo": "https://github.com/vicknesh22/cv",
  "owner": {
    "username": "vicknesh22",
    "email": "vicknesh22@gmail.com"
  },
  "record": {
    "URL": "https://vicknesh22.github.io/cv"
  }
}
```

### Key Changes:
1. **Changed `CNAME` to `URL`** - Because we're forwarding to a subpath
2. **Added full URL** - `https://vicknesh22.github.io/cv` (includes `/cv`)
3. **Removed `proxied` field** - Not needed for URL records and causes validation errors

---

## 📝 Step-by-Step Fix Instructions

### Option 1: Edit the Existing PR (Recommended)

1. **Go to your is-a.dev fork**
   - https://github.com/YOUR-USERNAME/register

2. **Navigate to the file**
   - Go to `domains/vicknesh.json`

3. **Click the pencil icon (Edit)**

4. **Replace the entire content** with:
```json
{
  "description": "Personal CV and portfolio website for Vicknesh Rethinavelu - Senior Cloud Operations Engineer with 9+ years experience in Kubernetes, AWS, GCP, Azure, and Platform Engineering",
  "repo": "https://github.com/vicknesh22/cv",
  "owner": {
    "username": "vicknesh22",
    "email": "vicknesh22@gmail.com"
  },
  "record": {
    "URL": "https://vicknesh22.github.io/cv"
  }
}
```

5. **Commit changes**
   - Commit message: "Fix CNAME to URL record for project site"
   - This will automatically update PR #30844

6. **Add a comment to the PR**:
```
Updated the configuration to use URL record instead of CNAME since this is a project site (vicknesh22.github.io/cv), not a user site.
```

### Option 2: Close and Recreate PR

If editing doesn't work:
1. Close PR #30844
2. Delete `domains/vicknesh.json` from your fork
3. Create new file with correct content above
4. Submit new PR

---

## 🧪 Test Your Site First

Before the PR is merged, verify your site is accessible:

```bash
# Your site SHOULD be at:
https://vicknesh22.github.io/cv/

# NOT at:
https://vicknesh22.github.io/  ❌ (404 error)
```

### If still getting 404 on vicknesh22.github.io/cv:

1. **Check GitHub Pages Settings**:
   - Go to: https://github.com/vicknesh22/cv/settings/pages
   - Source should be: **Deploy from a branch**
   - Branch: **main** (or master)
   - Folder: **/ (root)**
   - Click Save

2. **Wait 2-3 minutes** for GitHub Actions to deploy

3. **Check deployment status**:
   - Go to: https://github.com/vicknesh22/cv/actions
   - Look for "pages-build-deployment" workflow
   - Should show ✅ green checkmark

---

## 🎯 Alternative: Use User Site (Recommended)

If you want `vicknesh.is-a.dev` to point directly to your site (without `/cv`), you have two options:

### Option A: Rename Repository (Easiest)
1. Go to: https://github.com/vicknesh22/cv/settings
2. Rename repository from `cv` to `vicknesh22.github.io`
3. Update is-a.dev config back to:
```json
{
  "record": {
    "CNAME": "vicknesh22.github.io"
  }
}
```

### Option B: Keep Current Setup with URL Record (Recommended)
- Keep repository as `cv`
- Use URL record as shown above
- Site will forward correctly to `/cv`

---

## 📋 Updated PR Description

Update your PR #30844 description to include:

```markdown
# Website Preview

**Live URL:** https://vicknesh22.github.io/cv/
**Requested Domain:** https://vicknesh.is-a.dev/

The site is a project site (repository: cv), so it's deployed at /cv path.
Using URL record to forward vicknesh.is-a.dev → vicknesh22.github.io/cv
```

---

## ✅ Verification Checklist

Before is-a.dev approves:
- [ ] Site is accessible at https://vicknesh22.github.io/cv/
- [ ] Updated vicknesh.json with URL record
- [ ] Added `"proxied": false`
- [ ] Committed changes to PR #30844
- [ ] GitHub Pages is enabled and deployed

---

**After fixing, your PR should be approved within 24-48 hours!** 🚀
