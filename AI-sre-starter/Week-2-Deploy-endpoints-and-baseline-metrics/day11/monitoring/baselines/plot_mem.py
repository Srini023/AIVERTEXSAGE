plt.figure(figsize=(12,6))

plt.plot(df["timestamp"],df["memory"])

plt.title("Memory Utilization Baseline")

plt.savefig(
  "monitoring/reports/memory_baseline.png"
)
