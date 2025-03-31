document.addEventListener("DOMContentLoaded", function () {
  const skillData = {
    courses: [
      "▶ 擅長生物",
      "▶ 喜歡籃球，看書",
      "▶ 近期目標:上大學"
    ],
    skills: [
      { name: "邏輯力", level: 70 },
      { name: "想像力", level: 90 },
      { name: "實作", level: 60 }
    ]
  };

  // 生成「技能條」HTML
  const skillsSection = document.getElementById("skills");

  skillsSection.innerHTML = `
      <h4>技能條</h4>
      ${skillData.skills
        .map(
          (skill) => `
        <div class="skill-bar">
          <label>${skill.name}</label>
          <div class="bar">
            <div class="level" style="width: 0%"><span>0%</span></div>
          </div>
        </div>
      `
        )
        .join("")}
    `;

  // 等待進度條顯示後開始動畫
  setTimeout(() => {
    const levels = document.querySelectorAll('.level');
    const spans = document.querySelectorAll('.level span');

    skillData.skills.forEach((skill, index) => {
      const levelElement = levels[index];
      const spanElement = spans[index];
      const level = skill.level;

      // 設定進度條寬度
      levelElement.style.width = `${level}%`;

      // 設定進度條數字顯示
      spanElement.textContent = `${level}%`;
    });
  }, 500); // 延遲一點時間，確保動畫順利顯示
});