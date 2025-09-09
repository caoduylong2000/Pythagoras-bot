const { updateMessage, getRandomColor, replyMessage } = require('../utils/helps');
const numerologyData = require('../data/numerologyData');

// Các hàm tiện ích đã được cập nhật
function sumDigits(num) {
  let sum = 0;
  let strNum = String(num);
  for (let digit of strNum) {
    sum += Number(digit);
  }
  return sum;
}

function reduceNumber(num, getMaster = true) {
  let reduced = num;
  if (getMaster) {
    while (reduced > 9 && ![11, 22, 33].includes(reduced)) {
      reduced = sumDigits(reduced);
    }
  } else {
    while (reduced > 9) {
      reduced = sumDigits(reduced);
    }
  }
  return reduced;
}

async function getPinnaclePyramidPayload(birthday) {
  const [year, month, day] = birthday.split('-');

  const M = reduceNumber(sumDigits(month));
  const N = reduceNumber(sumDigits(day));
  const Y = reduceNumber(sumDigits(year));

  const pinnacle1 = reduceNumber(M + N);
  const pinnacle2 = reduceNumber(N + Y);
  const pinnacle3 = reduceNumber(pinnacle1 + pinnacle2);
  const pinnacle4 = reduceNumber(M + Y);

  const lifePath = reduceNumber(sumDigits(day) + sumDigits(month) + sumDigits(year));
  const lifePathForAgeCalc = reduceNumber(lifePath, false);
  
  const pinnacle1EndAge = 36 - lifePathForAgeCalc;
  const pinnacle2EndAge = pinnacle1EndAge + 9;
  const pinnacle3EndAge = pinnacle2EndAge + 9;

  const p1Data = numerologyData.pinnacle[pinnacle1] || { embed: [{ title: `Đỉnh 1: Con số ${pinnacle1}`, description: "Không có nội dung." }] };
  const p2Data = numerologyData.pinnacle[pinnacle2] || { embed: [{ title: `Đỉnh 2: Con số ${pinnacle2}`, description: "Không có nội dung." }] };
  const p3Data = numerologyData.pinnacle[pinnacle3] || { embed: [{ title: `Đỉnh 3: Con số ${pinnacle3}`, description: "Không có nội dung." }] };
  const p4Data = numerologyData.pinnacle[pinnacle4] || { embed: [{ title: `Đỉnh 4: Con số ${pinnacle4}`, description: "Không có nội dung." }] };


  const payload = {
    t: `Biểu đồ Kim tự tháp (Pinnacle Cycles)\n\n` +
       `Đây là bốn giai đoạn quan trọng trong cuộc đời bạn:\n\n` +
       `Đỉnh 1: Con số ${pinnacle1}\n` +
       `  - Tuổi: Từ lúc sinh ra đến ~${pinnacle1EndAge} tuổi\n\n` +
       `Đỉnh 2: Con số ${pinnacle2}\n` +
       `  - Tuổi: Từ ~${pinnacle1EndAge + 1} đến ~${pinnacle2EndAge} tuổi\n\n` +
       `Đỉnh 3: Con số ${pinnacle3}\n` +
       `  - Tuổi: Từ ~${pinnacle2EndAge + 1} đến ~${pinnacle3EndAge} tuổi\n\n` +
       `Đỉnh 4: Con số ${pinnacle4}\n` +
       `  - Tuổi: Từ ~${pinnacle3EndAge + 1} tuổi trở đi`,
    embed: [
      ...p1Data.embed,
      ...p2Data.embed,
      ...p3Data.embed,
      ...p4Data.embed,
    ],
    components: [],
  };

  return payload;
}

async function getPersonalYearPayload(birthday) {
    const [year, month, day] = birthday.split('-');
    const currentYear = new Date().getFullYear().toString();

    const total = sumDigits(day) + sumDigits(month) + sumDigits(currentYear);
    
    const result = reduceNumber(total);

    const personalYearContent = numerologyData.personalYear[result] || "Không tìm thấy nội dung cho con số này.";

    const responseText = `Năm cá nhân của bạn: ${result}\n\n` + personalYearContent;

    const finalPayload = {
      t: responseText,
      components: [],
    };
    
    return finalPayload;
}

async function sendAdvancedNumerologyResults(client, event, birthday, isNewMessage = false) {
  const payloads = await Promise.all([
    getPinnaclePyramidPayload(birthday),
    getPersonalYearPayload(birthday),
  ]);

  const combinedText = payloads.map(p => p.t).join('\n\n---\n\n');
  const combinedEmbeds = payloads.flatMap(p => p.embed || []);

  const finalPayload = {
    t: `Dưới đây là kết quả về các chỉ số nâng cao của bạn:\n\n---\n\n${combinedText}`,
    embed: combinedEmbeds,
    components: []
  };

  if(!isNewMessage) {
    await updateMessage(client, event, finalPayload);
  } else {
    await replyMessage(client, event, finalPayload);
  }
}

module.exports = {
  sendAdvancedNumerologyResults,
};