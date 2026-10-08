# Day 1 Setup Log

## Tools Installed
- Terraform v1.16.5
- Google Cloud SDK v588.0.0
- AWS CLI v2.37.9
- Docker v29.1.3
- k6 v2.3.0

## Verification Commands
```bash
terraform version
gcloud version
aws --version
docker --version
k6 version


Link Billing Account to Existing Project

gcloud beta billing projects link srevert-sri023 --billing-account 019DFA-092682-0EC841

gcloud beta billing projects link srevert-sri023 --billing-account 019DFA-092682-0EC841
billingAccountName: billingAccounts/019DFA-092682-0EC841
billingEnabled: true
name: projects/srevert-sri023/billingInfo
projectId: srevert-sri023

Enable Billing Alerts
Go to Google Cloud Console → Billing → Budgets & alerts.

Click Create budget.

Choose your billing account (019DFA-092682-0EC841).

Set a monthly budget (e.g., ₹500 or $10).

Add thresholds (50%, 90%, 100%).

Select email recipients for notifications.
