df=pd.read_csv("latency.csv")

plt.figure(figsize=(12,6))

plt.plot(
    df["concurrency"],
    df["p95_ms"],
    marker="o"
)

plt.title("P95 Latency Baseline")

plt.xlabel("Concurrency")

plt.ylabel("Latency (ms)")

plt.grid(True)

plt.savefig(
  "monitoring/reports/latency_baseline.png"
)
