Make it executable:
chmod +x run_local.sh

4. Test Locally
./run_local.sh

Then call the API:
curl "http://localhost:8080/predict?sepal_length=5.1&sepal_width=3.5&petal_length=1.4&petal_width=0.2"

Expected output:
{"class":"setosa"}


✅ Outcome
FastAPI + sklearn iris model container built.

Dockerfile + run script committed.

Local test with docker run -p 8080:8080 my-iris:latest successful.

🔧 File Roles
app/main.py → FastAPI app serving predictions from the iris model.

requirements.txt → Lists dependencies (fastapi, uvicorn, scikit-learn).

Dockerfile → Defines container image build.

run_local.sh → Automates build + run (docker build + docker run).

README.md → Quickstart guide for developers (how to run locally, example curl request).

📝 Workflow
Develop app → keep all Python code inside app/.

Build image → docker build -t my-iris:latest .

Run locally → ./run_local.sh (exposes port 8080).

Test API → curl http://localhost:8080/predict?...

Commit & push → add all files under model-server/ to repo.

✅ Outcome
Clear separation: infra configs in infra/, app container in model-server/.

Easy local testing with one script.
