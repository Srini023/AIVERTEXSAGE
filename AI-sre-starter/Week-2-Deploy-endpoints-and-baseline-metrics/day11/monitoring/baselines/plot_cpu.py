#Generate Baseline Graphs
#CPU Chart

import pandas as pd
import matplotlib.pyplot as plt

df=pd.read_csv("cpu.csv")

plt.figure(figsize=(12,6))
plt.plot(df["timestamp"], df["cpu"])

plt.title("CPU Utilization Baseline")
plt.ylabel("CPU %")
plt.xlabel("Time")
plt.grid(True)

plt.savefig("monitoring/reports/cpu_baseline.png")
