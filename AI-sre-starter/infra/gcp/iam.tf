resource "google_service_account" "vertex_sre" {
  account_id   = "vertex-sre"
  display_name = "Vertex SRE Service Account"
}

resource "google_project_iam_binding" "vertex_sre_ai" {
  project = var.project_id
  role    = "roles/aiplatform.user"
  members = ["serviceAccount:${google_service_account.vertex_sre.email}"]
}

resource "google_project_iam_binding" "vertex_sre_storage" {
  project = var.project_id
  role    = "roles/storage.objectViewer"
  members = ["serviceAccount:${google_service_account.vertex_sre.email}"]
}

