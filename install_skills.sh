#!/bin/bash
cd /home/node/.openclaw/workspace

# Skill列表
skills=(
    "self-improving"
    "summarize"
    "ontology"
    "proactive-agent"
    "skill-vetter"
    "humanizer"
    "obsidian"
    "auto-updater"
    "openclaw-youtube-transcript"
    "elite-longterm-memory"
    "meta-ads-manager"
    "google-ads-api"
    "shopify-admin-api"
)

echo "开始安装 ${#skills[@]} 个skill..."

for skill in "${skills[@]}"; do
    echo "正在安装: $skill"
    npx clawhub install "$skill" 2>&1 | tail -5
    sleep 3  # 避免速率限制
done

echo "安装完成！"