plt.figure(figsize=(10,5))

plt.plot(
    df["timestamp"],
    df["instances"]
)

plt.title("Instance Count")
plt.ylabel("Instances")
plt.grid(True)

plt.savefig(
    "monitoring/reports/instance_count.png"
)
