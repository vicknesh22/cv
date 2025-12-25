# Custom Domain Setup: vicknesh.is-a.dev

## Step 1: CNAME File ✅
The CNAME file has been created in this repository with `vicknesh.is-a.dev`.

## Step 2: Register with is-a.dev

To activate your `vicknesh.is-a.dev` domain, you need to submit a registration to the is-a.dev project:

### Registration Steps:

1. **Fork the is-a.dev repository**
   - Go to: https://github.com/is-a-dev/register
   - Click "Fork" button

2. **Create your domain configuration file**
   - In your forked repo, navigate to `domains/` folder
   - Create a new file named: `vicknesh.json`

3. **Add this configuration to `vicknesh.json`:**

```json
{
  "owner": {
    "username": "vicknesh22"
  },
  "record": {
    "CNAME": "vicknesh22.github.io"
  }
}
```

**Note**: The email field is optional. You can add it if you want.

4. **Commit and create Pull Request**
   - Commit the `vicknesh.json` file
   - Go to your forked repository
   - Click "Contribute" → "Open pull request"
   - Submit the PR with title: "Register vicknesh.is-a.dev"

5. **Wait for approval**
   - The is-a.dev team will review your PR (usually within 24-48 hours)
   - Once merged, your domain will be active!

6. **Verify DNS propagation**
   - After PR is merged, wait 5-10 minutes
   - Visit: https://vicknesh.is-a.dev
   - Your CV site should be live!

## Step 3: Enable HTTPS (After DNS is active)

1. Go to your GitHub repository settings
2. Navigate to: Settings → Pages
3. Custom domain should show: `vicknesh.is-a.dev` ✅
4. Enable "Enforce HTTPS" checkbox

## Troubleshooting

- **DNS not working?** Wait 24 hours for full propagation
- **PR not merged?** Check for feedback from is-a.dev maintainers
- **404 error?** Ensure CNAME file is in the root of your repository

## Resources

- is-a.dev Registration: https://github.com/is-a-dev/register
- is-a.dev Documentation: https://is-a.dev
- GitHub Pages Custom Domain Docs: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
